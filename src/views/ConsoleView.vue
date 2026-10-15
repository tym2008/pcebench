<template>
  <div class="min-h-screen flex flex-col bg-slate-950 text-slate-100">
    <!-- Header Navigation -->
    <HeaderNav
      :psu-connected="serialManager.psu.state.connected"
      :psu-port-name="serialManager.psu.state.portName"
      :load-connected="serialManager.load.state.connected"
      :load-port-name="serialManager.load.state.portName"
      :has-data="currentRecord !== null && currentRecord.points.some(p => p.status === 'completed')"
      :latest-test-id="currentRecord?.id"
      @open-serial-modal="isSerialModalOpen = true"
      @toggle-history="openHistoryDrawer"
      @export-csv="handleExportCurrentCSV"
      @open-3d-new-window="openResult3DWindow(currentRecord?.id)"
    />

    <!-- Main Workspace Body -->
    <main class="flex-1 p-6 flex flex-col gap-5 max-w-[1600px] w-full mx-auto">
      <!-- 1. Real-Time Telemetry Dashboard -->
      <DashboardMetrics :metrics="metrics" />

      <!-- 2. Dual Panel Layout: Left Config Card (1/3) & Right 2D Matrix Table (2/3) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-1 min-h-[500px]">
        <!-- Left: Sweep Config & Controls (col-span-5) -->
        <div class="lg:col-span-5 flex flex-col">
          <SweepConfigCard
            :config="sweepConfig"
            :is-running="isRunning"
            :is-paused="isPaused"
            @start-test="handleStartTest"
            @pause-test="handlePauseTest"
            @resume-test="handleResumeTest"
            @stop-test="handleStopTest"
          />
        </div>

        <!-- Right: 2D Matrix / Step-by-Step Table (col-span-7) -->
        <div class="lg:col-span-7 flex flex-col">
          <MatrixTable
            :points="matrixPoints"
            :voltage-steps="activeVoltageSteps"
            :load-steps="activeLoadSteps"
            :load-mode="sweepConfig.loadMode"
            @select-point="handleSelectPoint"
          />
        </div>
      </div>
    </main>

    <!-- Serial Connection Dialog -->
    <SerialConfigModal
      :is-open="isSerialModalOpen"
      :psu-connected="serialManager.psu.state.connected"
      :psu-port-name="serialManager.psu.state.portName"
      :load-connected="serialManager.load.state.connected"
      :load-port-name="serialManager.load.state.portName"
      :web-serial-supported="serialManager.psu.isWebSerialSupported()"
      @close="isSerialModalOpen = false"
      @connect-virtual="handleConnectVirtual"
      @connect-physical-psu="handleConnectPhysicalPsu"
      @disconnect-psu="handleDisconnectPsu"
      @connect-physical-load="handleConnectPhysicalLoad"
      @disconnect-load="handleDisconnectLoad"
    />

    <!-- History Drawer (5 items in IndexedDB) -->
    <HistoryDrawer
      :is-open="isHistoryOpen"
      :records="historyRecords"
      @close="isHistoryOpen = false"
      @open-3d="openResult3DWindow"
      @export-record-csv="handleExportRecordCSV"
      @delete-record="handleDeleteHistoryRecord"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue';
import confetti from 'canvas-confetti';
import HeaderNav from '../components/HeaderNav.vue';
import DashboardMetrics from '../components/DashboardMetrics.vue';
import SweepConfigCard from '../components/SweepConfigCard.vue';
import MatrixTable from '../components/MatrixTable.vue';
import SerialConfigModal from '../components/SerialConfigModal.vue';
import HistoryDrawer from '../components/HistoryDrawer.vue';
import { WebSerialManager } from '../serial/WebSerialManager';
import { SweepConfig, MatrixPoint, TestRecord, DashboardMetrics as IDashboardMetrics } from '../types/test';
import { saveTestRecord, getAllTestRecords, deleteTestRecord } from '../storage/indexedDB';
import { exportRecordToCSV } from '../utils/csvExport';

const serialManager = WebSerialManager.getInstance();

// Modals & Drawers state
const isSerialModalOpen = ref(false);
const isHistoryOpen = ref(false);
const historyRecords = ref<TestRecord[]>([]);

// Test execution state
const isRunning = ref(false);
const isPaused = ref(false);
let abortController: AbortController | null = null;
let sampleTimer: number | null = null;

// Sweep Configuration (Default matching user's diagram)
const sweepConfig = reactive<SweepConfig>({
  voltageMin: 5.0,
  voltageMax: 12.0,
  voltageStep: 1.0,
  inputCurrentLimit: 3.5,
  loadMin: 0.5,
  loadMax: 2.5,
  loadStep: 0.5,
  loadMode: 'CC',
  stepDwellTime: 1.0,
  sampleRateHz: 30,
});

// Active Matrix Dimensions
const activeVoltageSteps = ref<number[]>([]);
const activeLoadSteps = ref<number[]>([]);
const matrixPoints = ref<MatrixPoint[]>([]);
const currentRecord = ref<TestRecord | null>(null);

// Real-time Telemetry Metrics
const metrics = reactive<IDashboardMetrics>({
  vin: 0,
  iin: 0,
  pin: 0,
  vout: 0,
  iout: 0,
  pout: 0,
  efficiency: 0,
  activeTargetV: 5.0,
  activeTargetLoad: 1.0,
  progressPercent: 0,
  currentStep: 0,
  totalSteps: 0,
});

// Generate matrix points array
function generateMatrix() {
  const vSteps: number[] = [];
  for (let v = sweepConfig.voltageMin; v <= sweepConfig.voltageMax + 1e-5; v += sweepConfig.voltageStep) {
    vSteps.push(Math.round(v * 100) / 100);
  }

  const lSteps: number[] = [];
  for (let l = sweepConfig.loadMin; l <= sweepConfig.loadMax + 1e-5; l += sweepConfig.loadStep) {
    lSteps.push(Math.round(l * 100) / 100);
  }

  activeVoltageSteps.value = vSteps;
  activeLoadSteps.value = lSteps;

  const pts: MatrixPoint[] = [];
  let idx = 1;
  for (const v of vSteps) {
    for (const l of lSteps) {
      pts.push({
        stepIndex: idx++,
        voltageTarget: v,
        loadTarget: l,
        loadMode: sweepConfig.loadMode,
        vin: 0,
        iin: 0,
        pin: 0,
        vout: 0,
        iout: 0,
        pout: 0,
        efficiency: 0,
        status: 'pending',
        timestamp: 0,
      });
    }
  }

  matrixPoints.value = pts;
  metrics.totalSteps = pts.length;
  metrics.currentStep = 0;
  metrics.progressPercent = 0;
}

// Start Automated 2D Matrix Sweep
async function handleStartTest() {
  if (!serialManager.isBothConnected()) {
    // If not connected, automatically prompt or activate virtual simulation
    serialManager.autoConnectVirtual();
  }

  generateMatrix();
  isRunning.value = true;
  isPaused.value = false;
  abortController = new AbortController();

  startContinuousSampling();

  try {
    let completed = 0;

    for (let i = 0; i < matrixPoints.value.length; i++) {
      if (abortController.signal.aborted) break;

      // Handle Pause loop
      while (isPaused.value && !abortController.signal.aborted) {
        await new Promise((r) => setTimeout(r, 200));
      }

      const point = matrixPoints.value[i];
      point.status = 'running';
      metrics.activeTargetV = point.voltageTarget;
      metrics.activeTargetLoad = point.loadTarget;
      metrics.currentStep = i + 1;

      // 1. Set Hardware Instruments
      await serialManager.setPsuOutput(true, point.voltageTarget, sweepConfig.inputCurrentLimit);
      await serialManager.setLoadInput(true, sweepConfig.loadMode, point.loadTarget);

      // 2. Dwell & sample with transient rejection
      const dwellMs = sweepConfig.stepDwellTime * 1000;
      const marginMs = Math.min(150, dwellMs * 0.15); // discard first and last 15% transient
      const sampleIntervalMs = Math.round(1000 / sweepConfig.sampleRateHz);

      const startTime = performance.now();
      let sumVin = 0, sumIin = 0, sumPin = 0;
      let sumVout = 0, sumIout = 0, sumPout = 0;
      let count = 0;

      while (performance.now() - startTime < dwellMs) {
        if (abortController.signal.aborted) break;
        while (isPaused.value && !abortController.signal.aborted) {
          await new Promise((r) => setTimeout(r, 200));
        }

        const elapsed = performance.now() - startTime;
        const meas = serialManager.measure();

        // Update dashboard instantly
        metrics.vin = meas.vin;
        metrics.iin = meas.iin;
        metrics.pin = meas.pin;
        metrics.vout = meas.vout;
        metrics.iout = meas.iout;
        metrics.pout = meas.pout;
        metrics.efficiency = meas.efficiency;

        // Collect steady-state samples outside transient margin
        if (elapsed >= marginMs && elapsed <= dwellMs - marginMs) {
          sumVin += meas.vin;
          sumIin += meas.iin;
          sumPin += meas.pin;
          sumVout += meas.vout;
          sumIout += meas.iout;
          sumPout += meas.pout;
          count++;
        }

        await new Promise((r) => setTimeout(r, sampleIntervalMs));
      }

      // 3. Finalize Step Calculations
      if (count > 0) {
        point.vin = Math.round((sumVin / count) * 1000) / 1000;
        point.iin = Math.round((sumIin / count) * 1000) / 1000;
        point.pin = Math.round((sumPin / count) * 1000) / 1000;
        point.vout = Math.round((sumVout / count) * 1000) / 1000;
        point.iout = Math.round((sumIout / count) * 1000) / 1000;
        point.pout = Math.round((sumPout / count) * 1000) / 1000;
        point.efficiency = point.pin > 0.01 ? Math.min(100, Math.round((point.pout / point.pin) * 10000) / 100) : 0;
      } else {
        const lastMeas = serialManager.measure();
        point.vin = lastMeas.vin;
        point.iin = lastMeas.iin;
        point.pin = lastMeas.pin;
        point.vout = lastMeas.vout;
        point.iout = lastMeas.iout;
        point.pout = lastMeas.pout;
        point.efficiency = lastMeas.efficiency;
      }

      point.status = 'completed';
      point.timestamp = Date.now();
      completed++;
      metrics.progressPercent = (completed / matrixPoints.value.length) * 100;
    }

    if (!abortController.signal.aborted) {
      await finalizeTest();
    }
  } catch (err) {
    console.error('Test execution error:', err);
    alert('测试执行过程中发生异常：' + String(err));
  } finally {
    isRunning.value = false;
    isPaused.value = false;
    stopContinuousSampling();
  }
}

// Finalize Completed Test
async function finalizeTest() {
  await serialManager.emergencyStopAll();

  // Calculate summaries
  const validPts = matrixPoints.value.filter((p) => p.status === 'completed');
  let maxEff = 0;
  let minEff = 100;
  let sumEff = 0;
  let optimal: MatrixPoint | undefined = undefined;

  validPts.forEach((p) => {
    if (p.efficiency > maxEff) {
      maxEff = p.efficiency;
      optimal = p;
    }
    if (p.efficiency < minEff) {
      minEff = p.efficiency;
    }
    sumEff += p.efficiency;
  });

  const avgEff = validPts.length > 0 ? sumEff / validPts.length : 0;

  const testId = `test_${Date.now()}`;
  const now = new Date();
  const record: TestRecord = {
    id: testId,
    title: `芯片效率扫描 [${sweepConfig.voltageMin}V-${sweepConfig.voltageMax}V | ${sweepConfig.loadMode}]`,
    createdAt: now.toISOString(),
    config: { ...sweepConfig },
    voltageSteps: [...activeVoltageSteps.value],
    loadSteps: [...activeLoadSteps.value],
    points: JSON.parse(JSON.stringify(matrixPoints.value)),
    summary: {
      totalPoints: matrixPoints.value.length,
      completedPoints: validPts.length,
      maxEfficiency: Math.round(maxEff * 100) / 100,
      minEfficiency: Math.round(minEff * 100) / 100,
      avgEfficiency: Math.round(avgEff * 100) / 100,
      optimalPoint: optimal,
      durationSeconds: Math.round(validPts.length * sweepConfig.stepDwellTime),
    },
  };

  currentRecord.value = record;

  // Save to IndexedDB (auto-keeps latest 5 records)
  await saveTestRecord(record);
  await refreshHistoryList();

  // Fire celebratory confetti!
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#38bdf8', '#10b981', '#f59e0b', '#8b5cf6'],
  });

  // User requirement:
  // "测试结束后可以跳转到一个独立的结果展示界面（url需要有变化，打开一个全新的窗口以可视化数据。控制台仍旧展示现在这个表格），展示对应的三维图表。"
  openResult3DWindow(testId);
}

function handlePauseTest() {
  isPaused.value = true;
}

function handleResumeTest() {
  isPaused.value = false;
}

async function handleStopTest() {
  if (abortController) {
    abortController.abort();
  }
  isRunning.value = false;
  isPaused.value = false;
  await serialManager.emergencyStopAll();
  stopContinuousSampling();
}

function startContinuousSampling() {
  if (sampleTimer) clearInterval(sampleTimer);
  sampleTimer = window.setInterval(() => {
    if (!isRunning.value) {
      const meas = serialManager.measure();
      metrics.vin = meas.vin;
      metrics.iin = meas.iin;
      metrics.pin = meas.pin;
      metrics.vout = meas.vout;
      metrics.iout = meas.iout;
      metrics.pout = meas.pout;
      metrics.efficiency = meas.efficiency;
    }
  }, 100);
}

function stopContinuousSampling() {
  if (sampleTimer) {
    clearInterval(sampleTimer);
    sampleTimer = null;
  }
}

// Open 3D Result View in a NEW Window / Tab with URL changed to #/result/:id
function openResult3DWindow(testId?: string) {
  const targetId = testId || currentRecord.value?.id;
  if (!targetId) {
    alert('暂无已完成的测试数据可供 3D 展现！');
    return;
  }

  // Construct URL with hash route
  const currentBase = window.location.href.split('#')[0];
  const targetUrl = `${currentBase}#/result/${targetId}`;

  // Open brand new window/tab
  window.open(targetUrl, '_blank');
}

// Export CSV for current test
function handleExportCurrentCSV() {
  if (currentRecord.value) {
    exportRecordToCSV(currentRecord.value);
  }
}

// Export CSV for a specific history record
function handleExportRecordCSV(rec: TestRecord) {
  exportRecordToCSV(rec);
}

// Delete a history record
async function handleDeleteHistoryRecord(id: string) {
  await deleteTestRecord(id);
  await refreshHistoryList();
}

// Refresh history from IndexedDB
async function refreshHistoryList() {
  try {
    historyRecords.value = await getAllTestRecords();
  } catch (e) {
    console.warn('Failed to load history:', e);
  }
}

async function openHistoryDrawer() {
  await refreshHistoryList();
  isHistoryOpen.value = true;
}

// Hardware Connection Actions
function handleConnectVirtual() {
  serialManager.autoConnectVirtual();
  isSerialModalOpen.value = false;
}

async function handleConnectPhysicalPsu(baud: number) {
  try {
    await serialManager.psu.connectPhysical(baud);
  } catch (e: any) {
    alert('连接电源串口失败: ' + (e?.message || e));
  }
}

async function handleDisconnectPsu() {
  await serialManager.psu.disconnect();
}

async function handleConnectPhysicalLoad(baud: number) {
  try {
    await serialManager.load.connectPhysical(baud);
  } catch (e: any) {
    alert('连接负载串口失败: ' + (e?.message || e));
  }
}

async function handleDisconnectLoad() {
  await serialManager.load.disconnect();
}

function handleSelectPoint(pt: MatrixPoint) {
  metrics.vin = pt.vin;
  metrics.iin = pt.iin;
  metrics.pin = pt.pin;
  metrics.vout = pt.vout;
  metrics.iout = pt.iout;
  metrics.pout = pt.pout;
  metrics.efficiency = pt.efficiency;
}

onMounted(async () => {
  serialManager.autoConnectVirtual();
  generateMatrix();
  startContinuousSampling();
  await refreshHistoryList();
});

onUnmounted(() => {
  stopContinuousSampling();
});
</script>
