<template>
  <div style="width: 100%; height: 100vh; display: flex; flex-direction: column; overflow: hidden; background-color: #121519;">
    <!-- 1. Top Menubar (Exact Python Qt Dark Style) -->
    <div class="menubar">
      <!-- File Menu -->
      <div class="menu-item" :class="{ active: openMenu === 'file' }" @click="toggleMenu('file')">
        文件 (File)
        <div v-if="openMenu === 'file'" class="dropdown-menu" @click.stop>
          <div class="dropdown-item" @click="handleExportCurrentCSV(); closeMenus();">
            <span>导出测试结果 CSV (Export CSV)...</span>
            <span style="font-size: 10px; color: #718096; font-family: monospace;">Ctrl+E</span>
          </div>
          <div class="dropdown-divider"></div>
          <div class="dropdown-item" @click="closeMenus()">
            <span>退出 (Exit)</span>
            <span style="font-size: 10px; color: #718096; font-family: monospace;">Ctrl+Q</span>
          </div>
        </div>
      </div>

      <!-- View Menu -->
      <div class="menu-item" :class="{ active: openMenu === 'view' }" @click="toggleMenu('view')">
        视图 (View)
        <div v-if="openMenu === 'view'" class="dropdown-menu" @click.stop>
          <div class="dropdown-item" @click="clearCurrentData(); closeMenus();">
            <span>清空图表数据 (Clear Charts)</span>
          </div>
        </div>
      </div>

      <!-- Tools Menu (Requested: 历史数据查看 - 查看近5条) -->
      <div class="menu-item" :class="{ active: openMenu === 'tools' }" @click="toggleMenu('tools')">
        工具 (Tools)
        <div v-if="openMenu === 'tools'" class="dropdown-menu" @click.stop>
          <div class="dropdown-item" @click="openHistory(); closeMenus();">
            <span style="color: #63b3ed; font-weight: bold;">历史数据查看 (最近5条)...</span>
            <span style="font-size: 10px; color: #63b3ed; font-family: monospace;">IndexedDB</span>
          </div>
          <div class="dropdown-divider"></div>
          <div class="dropdown-item" @click="isSerialModalOpen = true; closeMenus();">
            <span>打开串口硬件连接设置...</span>
          </div>
        </div>
      </div>

      <!-- Help Menu -->
      <div class="menu-item" :class="{ active: openMenu === 'help' }" @click="toggleMenu('help')">
        帮助 (Help)
        <div v-if="openMenu === 'help'" class="dropdown-menu" @click.stop>
          <div class="dropdown-item" @click="showAbout(); closeMenus();">
            <span>关于工作台 (About Workbench)...</span>
          </div>
        </div>
      </div>

      <!-- Top Right Quick Info -->
      <div style="margin-left: auto; display: flex; align-items: center; gap: 10px; font-size: 11px; font-family: 'Consolas', monospace;">
        <span style="display: flex; align-items: center; gap: 5px;">
          <span style="width: 7px; height: 7px; border-radius: 50%;" :style="{ backgroundColor: serialManager.psu.state.connected ? '#48bb78' : '#e53e3e' }"></span>
          电源: {{ serialManager.psu.state.portName }}
        </span>
        <span style="display: flex; align-items: center; gap: 5px;">
          <span style="width: 7px; height: 7px; border-radius: 50%;" :style="{ backgroundColor: serialManager.load.state.connected ? '#48bb78' : '#e53e3e' }"></span>
          负载: {{ serialManager.load.state.portName }}
        </span>

        <button
          v-if="currentRecord"
          class="btn btn-primary"
          style="padding: 2px 8px; font-size: 11px; font-weight: bold;"
          @click="openResult3DWindow(currentRecord.id)"
          title="在新窗口打开当前测试结果的 2D 矩阵与 3D 柱状图"
        >
          <svg class="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
          打开 3D/2D 数据视图
        </button>
      </div>
    </div>

    <!-- 2. Main Workbench Splitter (1/4 Left Panel, 3/4 Right Visualization) -->
    <div class="workbench-body" @click="closeMenus">
      <!-- Left 1/4 Panel (Width: 350px) -->
      <div class="panel-left">
        <!-- Group 1: 🔌 仪器连接 (Instrument Ports) -->
        <div class="group-box">
          <div class="group-title">
            <span>🔌 仪器连接 (Instrument Ports)</span>
          </div>

          <!-- Simulation mode toggle & refresh -->
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
            <label style="color: #68d391; font-weight: bold; font-size: 11.5px; display: flex; align-items: center; gap: 5px; cursor: pointer;">
              <input type="checkbox" v-model="isSimulationMode" @change="toggleSimulationMode" />
              🧪 启用仿真演示模式
            </label>
            <button class="btn" style="padding: 2px 6px; font-size: 11px;" @click="isSerialModalOpen = true">
              ⚙ 配置
            </button>
          </div>

          <!-- PSU Row -->
          <div style="display: flex; align-items: center; gap: 4px; margin-bottom: 6px;">
            <span style="width: 36px; color: #63b3ed; font-weight: bold; font-size: 11px;">电源:</span>
            <input
              type="text"
              readonly
              :value="serialManager.psu.state.portName"
              style="flex: 1; padding: 2px 6px; font-size: 11px;"
            />
            <button
              class="btn"
              :class="serialManager.psu.state.connected ? 'btn-danger' : 'btn-primary'"
              style="padding: 3px 8px; font-weight: bold;"
              @click="togglePsuConnection"
            >
              {{ serialManager.psu.state.connected ? '断开' : '连接' }}
            </button>
          </div>

          <!-- Load Row -->
          <div style="display: flex; align-items: center; gap: 4px;">
            <span style="width: 36px; color: #63b3ed; font-weight: bold; font-size: 11px;">负载:</span>
            <input
              type="text"
              readonly
              :value="serialManager.load.state.portName"
              style="flex: 1; padding: 2px 6px; font-size: 11px;"
            />
            <button
              class="btn"
              :class="serialManager.load.state.connected ? 'btn-danger' : 'btn-primary'"
              style="padding: 3px 8px; font-weight: bold;"
              @click="toggleLoadConnection"
            >
              {{ serialManager.load.state.connected ? '断开' : '连接' }}
            </button>
          </div>
        </div>

        <!-- Group 2: ⚙ 2D 矩阵扫描测试参数 (Matrix Sweep Parameters) -->
        <div class="group-box">
          <div class="group-title" style="justify-content: space-between; width: 100%;">
            <span>⚙ 2D 矩阵扫描测试参数</span>
            <span style="font-size: 10px; color: #a0aec0; font-family: monospace; font-weight: normal;">
              总点数: {{ totalPointsCount }} 点
            </span>
          </div>

          <!-- Voltage Scan Row -->
          <div style="margin-bottom: 6px;">
            <div style="font-size: 11px; color: #ecc94b; font-weight: bold; margin-bottom: 3px;">
              输入电压扫描范围 (Vin):
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 4px;">
              <div>
                <span style="font-size: 10px; color: #a0aec0;">起始(V):</span>
                <input type="number" v-model.number="sweepConfig.voltageMin" :disabled="isRunning" step="0.5" style="width: 100%;" />
              </div>
              <div>
                <span style="font-size: 10px; color: #a0aec0;">终止(V):</span>
                <input type="number" v-model.number="sweepConfig.voltageMax" :disabled="isRunning" step="0.5" style="width: 100%;" />
              </div>
              <div>
                <span style="font-size: 10px; color: #a0aec0;">步长(V):</span>
                <input type="number" v-model.number="sweepConfig.voltageStep" :disabled="isRunning" step="0.2" style="width: 100%;" />
              </div>
            </div>
          </div>

          <!-- Load Scan Row -->
          <div style="margin-bottom: 6px;">
            <div style="font-size: 11px; color: #63b3ed; font-weight: bold; margin-bottom: 3px; display: flex; justify-content: space-between;">
              <span>负载扫描范围 (Load):</span>
              <div style="display: flex; gap: 4px;">
                <label style="cursor: pointer; color: #e2e8f0; font-size: 10.5px;">
                  <input type="radio" value="CC" v-model="sweepConfig.loadMode" :disabled="isRunning" /> CC恒流
                </label>
                <label style="cursor: pointer; color: #e2e8f0; font-size: 10.5px;">
                  <input type="radio" value="CW" v-model="sweepConfig.loadMode" :disabled="isRunning" /> CW恒功率
                </label>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 4px;">
              <div>
                <span style="font-size: 10px; color: #a0aec0;">起始({{ sweepConfig.loadMode === 'CC' ? 'A' : 'W' }}):</span>
                <input type="number" v-model.number="sweepConfig.loadMin" :disabled="isRunning" step="0.2" style="width: 100%;" />
              </div>
              <div>
                <span style="font-size: 10px; color: #a0aec0;">终止({{ sweepConfig.loadMode === 'CC' ? 'A' : 'W' }}):</span>
                <input type="number" v-model.number="sweepConfig.loadMax" :disabled="isRunning" step="0.2" style="width: 100%;" />
              </div>
              <div>
                <span style="font-size: 10px; color: #a0aec0;">步长({{ sweepConfig.loadMode === 'CC' ? 'A' : 'W' }}):</span>
                <input type="number" v-model.number="sweepConfig.loadStep" :disabled="isRunning" step="0.1" style="width: 100%;" />
              </div>
            </div>
          </div>

          <!-- Current Limit & Dwell Time -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px;">
            <div>
              <span style="font-size: 10px; color: #a0aec0;">电源限流(A):</span>
              <input type="number" v-model.number="sweepConfig.inputCurrentLimit" :disabled="isRunning" step="0.5" style="width: 100%;" />
            </div>
            <div>
              <span style="font-size: 10px; color: #a0aec0;">每步驻留稳定(秒):</span>
              <input type="number" v-model.number="sweepConfig.stepDwellTime" :disabled="isRunning" step="0.2" style="width: 100%;" />
            </div>
          </div>
        </div>

        <!-- Group 3: 📊 实时参数遥测仪表盘 (Dashboard) -->
        <div class="group-box">
          <div class="group-title">
            <span>📊 实时参数遥测 (0.2s 刷新)</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px; font-family: 'Consolas', monospace; font-size: 11.5px;">
            <div style="background-color: #121519; padding: 4px 6px; border-radius: 4px; border-left: 3px solid #ecc94b;">
              <div style="color: #a0aec0; font-size: 10px;">输入电压 Vin:</div>
              <div style="color: #ecc94b; font-weight: bold; font-size: 14px;">{{ metrics.vin.toFixed(3) }} <span style="font-size: 10px;">V</span></div>
            </div>

            <div style="background-color: #121519; padding: 4px 6px; border-radius: 4px; border-left: 3px solid #63b3ed;">
              <div style="color: #a0aec0; font-size: 10px;">输出电压 Vout:</div>
              <div style="color: #63b3ed; font-weight: bold; font-size: 14px;">{{ metrics.vout.toFixed(3) }} <span style="font-size: 10px;">V</span></div>
            </div>

            <div style="background-color: #121519; padding: 4px 6px; border-radius: 4px; border-left: 3px solid #48bb78;">
              <div style="color: #a0aec0; font-size: 10px;">输入电流 Iin:</div>
              <div style="color: #e2e8f0; font-weight: bold; font-size: 13px;">{{ metrics.iin.toFixed(3) }} <span style="font-size: 10px;">A</span></div>
            </div>

            <div style="background-color: #121519; padding: 4px 6px; border-radius: 4px; border-left: 3px solid #ed8936;">
              <div style="color: #a0aec0; font-size: 10px;">输出电流 Iout:</div>
              <div style="color: #e2e8f0; font-weight: bold; font-size: 13px;">{{ metrics.iout.toFixed(3) }} <span style="font-size: 10px;">A</span></div>
            </div>

            <div style="background-color: #121519; padding: 4px 6px; border-radius: 4px; border-left: 3px solid #9f7aea;">
              <div style="color: #a0aec0; font-size: 10px;">输入功率 Pin:</div>
              <div style="color: #e2e8f0; font-weight: bold; font-size: 13px;">{{ metrics.pin.toFixed(3) }} <span style="font-size: 10px;">W</span></div>
            </div>

            <div style="background-color: #121519; padding: 4px 6px; border-radius: 4px; border-left: 3px solid #f56565;">
              <div style="color: #a0aec0; font-size: 10px;">输出功率 Pout:</div>
              <div style="color: #e2e8f0; font-weight: bold; font-size: 13px;">{{ metrics.pout.toFixed(3) }} <span style="font-size: 10px;">W</span></div>
            </div>
          </div>

          <!-- Real-time Efficiency Big Display -->
          <div style="margin-top: 6px; background-color: #121519; padding: 6px 10px; border-radius: 4px; border: 1px solid #2f855a; display: flex; align-items: center; justify-content: space-between;">
            <span style="color: #48bb78; font-weight: bold; font-size: 12px;">转换效率 (η):</span>
            <span style="color: #48bb78; font-weight: bold; font-family: 'Consolas', monospace; font-size: 20px;">
              {{ metrics.efficiency.toFixed(2) }} %
            </span>
          </div>
        </div>

        <!-- Group 4: 控制按钮 (Exact Python Qt layout) -->
        <div style="display: flex; flex-direction: column; gap: 6px;">
          <!-- Big Start / Pause Button -->
          <button
            v-if="!isRunning"
            class="btn btn-success"
            style="height: 38px; font-size: 13px; font-weight: bold;"
            @click="handleStartTest"
          >
            ▶ 开始矩阵测试
          </button>

          <button
            v-else-if="!isPaused"
            class="btn btn-warning"
            style="height: 38px; font-size: 13px; font-weight: bold;"
            @click="handlePauseTest"
          >
            ⏸ 暂停测试
          </button>

          <button
            v-else
            class="btn btn-primary"
            style="height: 38px; font-size: 13px; font-weight: bold;"
            @click="handleResumeTest"
          >
            ▶ 继续测试
          </button>

          <div style="display: flex; gap: 6px;">
            <button
              class="btn btn-danger"
              style="flex: 1; height: 32px;"
              :disabled="!isRunning"
              @click="handleStopTest"
            >
              ⏹ 结束
            </button>

            <button
              class="btn"
              style="flex: 1; height: 32px;"
              :disabled="stepResults.length === 0"
              @click="handleExportCurrentCSV"
            >
              📊 导出CSV
            </button>
          </div>
        </div>
      </div>

      <!-- Right 3/4 Area (Waveforms Top, Step Summary Table Bottom) -->
      <div class="panel-right">
        <!-- Top Half: Real-time Waveforms (Canvas) -->
        <WaveformChart ref="waveformRef" :latest-sample="latestSample" style="height: 48%; min-height: 220px;" />

        <!-- Bottom Half: Step Results Summary Table (Python TableWidget Style) -->
        <div style="flex: 1; display: flex; flex-direction: column; background-color: #171b22; border: 1px solid #2d3748; border-radius: 6px; overflow: hidden;">
          <div style="height: 30px; background-color: #1a1e24; border-bottom: 1px solid #2d3748; display: flex; align-items: center; justify-content: space-between; padding: 0 10px; font-weight: bold; font-size: 12px; color: #e2e8f0;">
            <span>📋 步进明细数据表 (Step Summary Table)</span>
            <span style="font-size: 11px; font-family: 'Consolas', monospace; font-weight: normal; color: #a0aec0;">
              已完成: <b style="color: #48bb78;">{{ completedStepsCount }}</b> / {{ matrixPoints.length }} 步
            </span>
          </div>

          <div style="flex: 1; overflow: auto;">
            <table style="width: 100%; border-collapse: collapse; font-family: 'Consolas', monospace; font-size: 11px; text-align: right;">
              <thead style="background-color: #121519; color: #a0aec0; position: sticky; top: 0; z-index: 5;">
                <tr style="border-bottom: 1px solid #2d3748;">
                  <th style="padding: 5px 6px; text-align: center;">步号</th>
                  <th style="padding: 5px 6px;">目标Vin(V)</th>
                  <th style="padding: 5px 6px;">目标负载</th>
                  <th style="padding: 5px 6px; color: #ecc94b;">平均Vin(V)</th>
                  <th style="padding: 5px 6px;">平均Iin(A)</th>
                  <th style="padding: 5px 6px;">平均Pin(W)</th>
                  <th style="padding: 5px 6px; color: #63b3ed;">平均Vout(V)</th>
                  <th style="padding: 5px 6px;">平均Iout(A)</th>
                  <th style="padding: 5px 6px;">平均Pout(W)</th>
                  <th style="padding: 5px 6px; color: #48bb78; text-align: center;">效率 η(%)</th>
                  <th style="padding: 5px 6px; text-align: center;">状态</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="p in matrixPoints"
                  :key="p.stepIndex"
                  style="border-bottom: 1px solid #1e2530;"
                  :style="{ backgroundColor: p.status === 'running' ? '#1a365d' : 'transparent' }"
                >
                  <td style="padding: 4px 6px; text-align: center; color: #718096;">#{{ p.stepIndex }}</td>
                  <td style="padding: 4px 6px;">{{ p.voltageTarget.toFixed(2) }}</td>
                  <td style="padding: 4px 6px;">{{ p.loadTarget.toFixed(2) }} {{ p.loadMode }}</td>
                  <td style="padding: 4px 6px; color: #ecc94b; font-weight: bold;">
                    {{ p.status !== 'pending' ? p.vin.toFixed(4) : '--' }}
                  </td>
                  <td style="padding: 4px 6px;">{{ p.status !== 'pending' ? p.iin.toFixed(4) : '--' }}</td>
                  <td style="padding: 4px 6px;">{{ p.status !== 'pending' ? p.pin.toFixed(4) : '--' }}</td>
                  <td style="padding: 4px 6px; color: #63b3ed; font-weight: bold;">
                    {{ p.status !== 'pending' ? p.vout.toFixed(4) : '--' }}
                  </td>
                  <td style="padding: 4px 6px;">{{ p.status !== 'pending' ? p.iout.toFixed(4) : '--' }}</td>
                  <td style="padding: 4px 6px;">{{ p.status !== 'pending' ? p.pout.toFixed(4) : '--' }}</td>
                  <td style="padding: 4px 6px; text-align: center; font-weight: bold;">
                    <span v-if="p.status === 'completed'" style="color: #48bb78;">
                      {{ p.efficiency.toFixed(2) }}%
                    </span>
                    <span v-else-if="p.status === 'running'" style="color: #00d2ff;">测定中</span>
                    <span v-else style="color: #4a5568;">--</span>
                  </td>
                  <td style="padding: 4px 6px; text-align: center;">
                    <span
                      style="padding: 1px 5px; border-radius: 3px; font-size: 10px;"
                      :style="{
                        backgroundColor: p.status === 'completed' ? '#22543d' : p.status === 'running' ? '#2b6cb0' : '#2d3748',
                        color: p.status === 'completed' ? '#9ae6b4' : p.status === 'running' ? '#bee3f8' : '#718096'
                      }"
                    >
                      {{ p.status === 'completed' ? '已完成' : p.status === 'running' ? '测试中' : '等待' }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- 3. Bottom Status Bar -->
    <div class="statusbar">
      <span>{{ statusText }}</span>
      <span v-if="isRunning" style="color: #48bb78;">
        正在测试第 {{ metrics.currentStep }} / {{ metrics.totalSteps }} 点 ({{ metrics.progressPercent.toFixed(1) }}%)
      </span>
      <span v-else>就绪 (Ready)</span>
    </div>

    <!-- 4. History Modal ("工具 -> 历史数据查看") -->
    <HistoryModal
      :is-open="isHistoryOpen"
      :records="historyRecords"
      @close="isHistoryOpen = false"
      @open-result="openResult3DWindow"
      @export-csv="handleExportRecordCSV"
      @delete-record="handleDeleteHistoryRecord"
    />

    <!-- 5. Serial Connection Settings Modal -->
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
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue';
import confetti from 'canvas-confetti';
import WaveformChart, { WaveformPoint } from '../components/WaveformChart.vue';
import HistoryModal from '../components/HistoryModal.vue';
import SerialConfigModal from '../components/SerialConfigModal.vue';
import { WebSerialManager } from '../serial/WebSerialManager';
import { SweepConfig, MatrixPoint, TestRecord, DashboardMetrics as IDashboardMetrics } from '../types/test';
import { saveTestRecord, getAllTestRecords, deleteTestRecord } from '../storage/indexedDB';
import { exportRecordToCSV } from '../utils/csvExport';

const serialManager = WebSerialManager.getInstance();

// Menus & Modals
const openMenu = ref<string | null>(null);
const isHistoryOpen = ref(false);
const isSerialModalOpen = ref(false);
const isSimulationMode = ref(true);
const historyRecords = ref<TestRecord[]>([]);

const waveformRef = ref<InstanceType<typeof WaveformChart> | null>(null);
const latestSample = ref<WaveformPoint | undefined>(undefined);

// Test state
const isRunning = ref(false);
const isPaused = ref(false);
const statusText = ref('就绪 (Ready) - 请连接设备或开启仿真模式后开始测试');
let abortController: AbortController | null = null;
let sampleTimer: number | null = null;

// 2D Matrix Sweep Parameters
const sweepConfig = reactive<SweepConfig>({
  voltageMin: 5.0,
  voltageMax: 12.0,
  voltageStep: 1.0,
  inputCurrentLimit: 3.0,
  loadMin: 0.5,
  loadMax: 2.5,
  loadStep: 0.5,
  loadMode: 'CC',
  stepDwellTime: 1.0,
  sampleRateHz: 30,
});

// Generated Steps
const activeVoltageSteps = ref<number[]>([]);
const activeLoadSteps = ref<number[]>([]);
const matrixPoints = ref<MatrixPoint[]>([]);
const currentRecord = ref<TestRecord | null>(null);

// Real-time Telemetry
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

const totalPointsCount = computed(() => {
  const vSteps = Math.max(1, Math.floor((sweepConfig.voltageMax - sweepConfig.voltageMin) / sweepConfig.voltageStep) + 1);
  const lSteps = Math.max(1, Math.floor((sweepConfig.loadMax - sweepConfig.loadMin) / sweepConfig.loadStep) + 1);
  return vSteps * lSteps;
});

const completedStepsCount = computed(() => {
  return matrixPoints.value.filter((p) => p.status === 'completed').length;
});

const stepResults = computed(() => {
  return matrixPoints.value.filter((p) => p.status === 'completed');
});

function toggleMenu(menu: string) {
  openMenu.value = openMenu.value === menu ? null : menu;
}

function closeMenus() {
  openMenu.value = null;
}

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

async function handleStartTest() {
  if (!serialManager.isBothConnected()) {
    serialManager.autoConnectVirtual();
  }

  generateMatrix();
  if (waveformRef.value) waveformRef.value.clear();

  isRunning.value = true;
  isPaused.value = false;
  abortController = new AbortController();
  statusText.value = '正在执行全自动 2D 矩阵效率测试...';

  startContinuousSampling();

  try {
    let completed = 0;

    for (let i = 0; i < matrixPoints.value.length; i++) {
      if (abortController.signal.aborted) break;

      while (isPaused.value && !abortController.signal.aborted) {
        await new Promise((r) => setTimeout(r, 200));
      }

      const point = matrixPoints.value[i];
      point.status = 'running';
      metrics.activeTargetV = point.voltageTarget;
      metrics.activeTargetLoad = point.loadTarget;
      metrics.currentStep = i + 1;
      statusText.value = `正在测试步 #${point.stepIndex} (Vin: ${point.voltageTarget.toFixed(2)}V, 负载: ${point.loadTarget.toFixed(2)}${point.loadMode})...`;

      // 1. Hardware Commands
      await serialManager.setPsuOutput(true, point.voltageTarget, sweepConfig.inputCurrentLimit);
      await serialManager.setLoadInput(true, sweepConfig.loadMode, point.loadTarget);

      // 2. Dwell & sample with 15% transient rejection
      const dwellMs = sweepConfig.stepDwellTime * 1000;
      const marginMs = Math.min(150, dwellMs * 0.15);
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

        metrics.vin = meas.vin;
        metrics.iin = meas.iin;
        metrics.pin = meas.pin;
        metrics.vout = meas.vout;
        metrics.iout = meas.iout;
        metrics.pout = meas.pout;
        metrics.efficiency = meas.efficiency;

        // Push to real-time waveform buffer
        latestSample.value = {
          t: performance.now(),
          vin: meas.vin,
          vout: meas.vout,
          iin: meas.iin,
          iout: meas.iout,
        };

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

      // 3. Steady State Finalization
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
    statusText.value = '测试执行异常: ' + String(err);
    alert('测试执行过程中发生异常：' + String(err));
  } finally {
    isRunning.value = false;
    isPaused.value = false;
    stopContinuousSampling();
  }
}

// Finalize Completed Test Run
async function finalizeTest() {
  await serialManager.emergencyStopAll();

  statusText.value = '全套矩阵测试已完成！正在保存数据并在新窗口打开 2D 矩阵与 3D 柱状图可视化...';

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

  // Create clean plain data structure (Stripped of Vue Proxies)
  const plainConfig = JSON.parse(JSON.stringify(sweepConfig));
  const plainPoints = JSON.parse(JSON.stringify(matrixPoints.value));
  const plainOptimal = optimal ? JSON.parse(JSON.stringify(optimal)) : undefined;

  const record: TestRecord = {
    id: testId,
    title: `芯片双向矩阵扫描 [${sweepConfig.voltageMin}V-${sweepConfig.voltageMax}V | ${sweepConfig.loadMode}]`,
    createdAt: now.toISOString(),
    config: plainConfig,
    voltageSteps: [...activeVoltageSteps.value],
    loadSteps: [...activeLoadSteps.value],
    points: plainPoints,
    summary: {
      totalPoints: matrixPoints.value.length,
      completedPoints: validPts.length,
      maxEfficiency: Math.round(maxEff * 100) / 100,
      minEfficiency: Math.round(minEff * 100) / 100,
      avgEfficiency: Math.round(avgEff * 100) / 100,
      optimalPoint: plainOptimal,
      durationSeconds: Math.round(validPts.length * sweepConfig.stepDwellTime),
    },
  };

  currentRecord.value = record;

  // Save to IndexedDB (auto-keeps latest 5, 0 DataCloneError)
  await saveTestRecord(record);
  await refreshHistoryList();

  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#00d2ff', '#48bb78', '#ecc94b', '#9f7aea'],
  });

  // Specifically requested by user:
  // "在测试结束后弹出的数据查看界面厘米才现实2D矩阵表和3D柱状图"
  openResult3DWindow(testId);
}

function handlePauseTest() {
  isPaused.value = true;
  statusText.value = '测试已暂停';
}

function handleResumeTest() {
  isPaused.value = false;
  statusText.value = '测试已继续运行';
}

async function handleStopTest() {
  if (abortController) abortController.abort();
  isRunning.value = false;
  isPaused.value = false;
  await serialManager.emergencyStopAll();
  stopContinuousSampling();
  statusText.value = '测试已手动终止';
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

      latestSample.value = {
        t: performance.now(),
        vin: meas.vin,
        vout: meas.vout,
        iin: meas.iin,
        iout: meas.iout,
      };
    }
  }, 100);
}

function stopContinuousSampling() {
  if (sampleTimer) {
    clearInterval(sampleTimer);
    sampleTimer = null;
  }
}

// Open Dedicated Result View in a New Window
function openResult3DWindow(testId?: string) {
  const targetId = testId || currentRecord.value?.id;
  if (!targetId) {
    alert('暂无已完成的测试数据可供查看！请先运行测试或在【工具->历史数据查看】中选择一条历史记录。');
    return;
  }
  const currentBase = window.location.href.split('#')[0];
  const targetUrl = `${currentBase}#/result/${targetId}`;
  window.open(targetUrl, '_blank');
}

function handleExportCurrentCSV() {
  if (currentRecord.value) {
    exportRecordToCSV(currentRecord.value);
  } else if (stepResults.value.length > 0) {
    // Export intermediate steps if test is not finalized
    const tempRecord: TestRecord = {
      id: 'current_test',
      title: '电源芯片效率测试明细',
      createdAt: new Date().toISOString(),
      config: JSON.parse(JSON.stringify(sweepConfig)),
      voltageSteps: [...activeVoltageSteps.value],
      loadSteps: [...activeLoadSteps.value],
      points: JSON.parse(JSON.stringify(matrixPoints.value)),
      summary: {
        totalPoints: matrixPoints.value.length,
        completedPoints: stepResults.value.length,
        maxEfficiency: 0,
        minEfficiency: 0,
        avgEfficiency: 0,
        durationSeconds: 0,
      },
    };
    exportRecordToCSV(tempRecord);
  } else {
    alert('当前无可用测试数据可供导出！');
  }
}

function handleExportRecordCSV(rec: TestRecord) {
  exportRecordToCSV(rec);
}

async function handleDeleteHistoryRecord(id: string) {
  await deleteTestRecord(id);
  await refreshHistoryList();
}

async function refreshHistoryList() {
  try {
    historyRecords.value = await getAllTestRecords();
  } catch (e) {
    console.warn('Failed to load history:', e);
  }
}

async function openHistory() {
  await refreshHistoryList();
  isHistoryOpen.value = true;
}

function clearCurrentData() {
  matrixPoints.value = [];
  currentRecord.value = null;
  if (waveformRef.value) waveformRef.value.clear();
  generateMatrix();
  statusText.value = '图表与数据已清空';
}

function toggleSimulationMode() {
  if (isSimulationMode.value) {
    serialManager.autoConnectVirtual();
    statusText.value = '已启用内置仿真驱动模式 (Virtual Mode)';
  } else {
    serialManager.psu.disconnect();
    serialManager.load.disconnect();
    statusText.value = '已关闭仿真模式，请配置物理串口设备';
  }
}

function togglePsuConnection() {
  if (serialManager.psu.state.connected) {
    serialManager.psu.disconnect();
    statusText.value = '电源串口已断开';
  } else {
    isSerialModalOpen.value = true;
  }
}

function toggleLoadConnection() {
  if (serialManager.load.state.connected) {
    serialManager.load.disconnect();
    statusText.value = '电子负载串口已断开';
  } else {
    isSerialModalOpen.value = true;
  }
}

function handleConnectVirtual() {
  isSimulationMode.value = true;
  serialManager.autoConnectVirtual();
  isSerialModalOpen.value = false;
  statusText.value = '仿真驱动已就绪';
}

async function handleConnectPhysicalPsu(baud: number) {
  try {
    await serialManager.psu.connectPhysical(baud);
    isSimulationMode.value = false;
    statusText.value = `电源串口已连接 (${baud}bps)`;
  } catch (e: any) {
    alert('连接电源串口失败: ' + (e?.message || e));
  }
}

async function handleDisconnectPsu() {
  await serialManager.psu.disconnect();
  statusText.value = '电源串口已断开';
}

async function handleConnectPhysicalLoad(baud: number) {
  try {
    await serialManager.load.connectPhysical(baud);
    isSimulationMode.value = false;
    statusText.value = `负载串口已连接 (${baud}bps)`;
  } catch (e: any) {
    alert('连接负载串口失败: ' + (e?.message || e));
  }
}

async function handleDisconnectLoad() {
  await serialManager.load.disconnect();
  statusText.value = '负载串口已断开';
}

function showAbout() {
  alert(
    '电源转换芯片效率测试系统 (Power Converter Efficiency Tester)\n' +
    '版本: 2.0.0 (Vue 3 + Web Serial + Three.js 3D Edition)\n' +
    '完全适配 RIGOL DP700 直流电源与 UNI-T UTL8500 电子负载。\n' +
    '支持 2D 双向全自动矩阵扫描与 3D 空间交互式图谱展现。'
  );
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
