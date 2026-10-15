<template>
  <div style="width: 100vw; height: 100vh; display: flex; flex-direction: column; overflow: hidden; background-color: #121519; color: #e2e8f0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
    <!-- 1. Top Header & Action Bar -->
    <header style="height: 48px; background-color: #1a1e24; border-bottom: 1px solid #2d3748; display: flex; align-items: center; justify-content: space-between; padding: 0 16px; z-index: 30; gap: 12px;">
      <!-- Title & Return to Console -->
      <div style="display: flex; align-items: center; gap: 12px;">
        <router-link
          to="/"
          class="btn"
          style="padding: 4px 10px; font-weight: bold; background-color: #2b6cb0; color: white; border-color: #3182ce;"
          title="返回控制台"
        >
          <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          控制台
        </router-link>

        <div>
          <div style="font-weight: bold; font-size: 13px; color: #ffffff; display: flex; align-items: center; gap: 8px;">
            <span>{{ currentRecord?.title || '测试结果数据查看' }}</span>
            <span style="font-size: 10px; font-family: monospace; padding: 1px 6px; border-radius: 3px; background-color: #234e52; color: #4fd1c5; border: 1px solid #319795;">
              独立结果可视化
            </span>
          </div>
          <div style="font-size: 10.5px; color: #a0aec0; font-family: 'Consolas', monospace;">
            测试时间: {{ currentRecord ? new Date(currentRecord.createdAt).toLocaleString() : '--' }} |
            规格: {{ currentRecord?.config?.voltageMin }}V~{{ currentRecord?.config?.voltageMax }}V, {{ currentRecord?.config?.loadMode }}
          </div>
        </div>
      </div>

      <!-- Key Performance Badges (Max / Avg / Total) -->
      <div v-if="currentRecord?.summary" style="display: flex; align-items: center; gap: 10px; font-size: 11px; font-family: 'Consolas', monospace;">
        <div style="background-color: #1c4532; border: 1px solid #276749; color: #9ae6b4; padding: 3px 8px; border-radius: 4px; display: flex; align-items: center; gap: 6px;">
          <span>峰值效率 η_max: <b style="color: #68d391; font-size: 13px;">{{ currentRecord.summary.maxEfficiency.toFixed(2) }}%</b></span>
          <span v-if="currentRecord.summary.optimalPoint" style="font-size: 10px; color: #c6f6d5;">
            (@{{ currentRecord.summary.optimalPoint.vin.toFixed(1) }}V, {{ currentRecord.summary.optimalPoint.iout.toFixed(2) }}A)
          </span>
        </div>

        <div style="background-color: #234e52; border: 1px solid #285e61; color: #81e6d9; padding: 3px 8px; border-radius: 4px;">
          <span>平均效率 η_avg: <b style="color: #4fd1c5; font-size: 12px;">{{ currentRecord.summary.avgEfficiency.toFixed(2) }}%</b></span>
        </div>

        <div style="background-color: #2d3748; border: 1px solid #4a5568; color: #e2e8f0; padding: 3px 8px; border-radius: 4px;">
          <span>矩阵测试点: <b style="color: #ecc94b;">{{ currentRecord.points.length }} 点</b></span>
        </div>
      </div>

      <!-- View Tabs & Actions -->
      <div style="display: flex; align-items: center; gap: 8px;">
        <!-- View Mode Switch: 3D vs 2D Matrix -->
        <div style="display: flex; background-color: #2d3748; padding: 2px; border-radius: 4px; font-size: 11px;">
          <button
            class="btn"
            :style="{
              backgroundColor: activeViewTab === '3d' ? '#3182ce' : 'transparent',
              color: activeViewTab === '3d' ? '#ffffff' : '#a0aec0',
              fontWeight: activeViewTab === '3d' ? 'bold' : 'normal',
              border: 'none',
              padding: '3px 10px'
            }"
            @click="activeViewTab = '3d'"
          >
            3D 空间柱状图
          </button>
          <button
            class="btn"
            :style="{
              backgroundColor: activeViewTab === 'matrix' ? '#3182ce' : 'transparent',
              color: activeViewTab === 'matrix' ? '#ffffff' : '#a0aec0',
              fontWeight: activeViewTab === 'matrix' ? 'bold' : 'normal',
              border: 'none',
              padding: '3px 10px'
            }"
            @click="activeViewTab = 'matrix'"
          >
            2D 效率矩阵表
          </button>
        </div>

        <!-- Switch between the 5 saved records in IndexedDB -->
        <select
          v-if="allRecords.length > 1"
          v-model="selectedRecordId"
          @change="handleSwitchRecord"
          style="padding: 3px 6px; font-size: 11px; max-width: 170px;"
        >
          <option v-for="rec in allRecords" :key="rec.id" :value="rec.id">
            {{ rec.title }}
          </option>
        </select>

        <!-- Export CSV Button -->
        <button
          v-if="currentRecord"
          class="btn btn-success"
          style="padding: 4px 10px; font-weight: bold;"
          @click="handleExportCSV"
        >
          <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          下载 CSV
        </button>

        <button
          class="btn"
          style="padding: 4px 8px;"
          @click="closeWindow"
          title="关闭页面"
        >
          ✕
        </button>
      </div>
    </header>

    <!-- 2. Main Visualization Content Area -->
    <div style="flex: 1; width: 100%; height: 100%; overflow: hidden; position: relative;">
      <!-- View 1: 3D Bar Chart -->
      <div
        v-show="activeViewTab === '3d'"
        style="width: 100%; height: 100%; position: relative;"
      >
        <ThreeBarChart
          v-if="currentRecord && currentRecord.points.length > 0"
          :points="currentRecord.points"
          :voltage-steps="currentRecord.voltageSteps"
          :load-steps="currentRecord.loadSteps"
          :load-mode="currentRecord.config.loadMode"
        />
        <div v-else style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: #718096; font-size: 13px;">
          正在从 IndexedDB 加载 3D 矩阵效率数据...
        </div>
      </div>

      <!-- View 2: 2D Matrix Table -->
      <div
        v-show="activeViewTab === 'matrix'"
        style="width: 100%; height: 100%; display: flex; flex-direction: column; background-color: #171b22; overflow: hidden;"
      >
        <!-- 2D Matrix Header -->
        <div style="height: 34px; background-color: #1a1e24; border-bottom: 1px solid #2d3748; display: flex; align-items: center; justify-content: space-between; padding: 0 14px; font-weight: bold; font-size: 12px;">
          <span style="color: #63b3ed; display: flex; align-items: center; gap: 6px;">
            <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            2D 双向芯片效率特征矩阵表 (η vs Vin, Load)
          </span>

          <!-- Color Scale Legend -->
          <div style="display: flex; align-items: center; gap: 8px; font-size: 10px; font-family: monospace;">
            <span style="display: flex; align-items: center; gap: 4px;"><span style="width: 10px; height: 10px; background-color: #22543d; border: 1px solid #38a169; border-radius: 2px;"></span> &gt;90% 高效</span>
            <span style="display: flex; align-items: center; gap: 4px;"><span style="width: 10px; height: 10px; background-color: #234e52; border: 1px solid #319795; border-radius: 2px;"></span> 85~90%</span>
            <span style="display: flex; align-items: center; gap: 4px;"><span style="width: 10px; height: 10px; background-color: #744210; border: 1px solid #d69e2e; border-radius: 2px;"></span> 75~85%</span>
            <span style="display: flex; align-items: center; gap: 4px;"><span style="width: 10px; height: 10px; background-color: #742a2a; border: 1px solid #e53e3e; border-radius: 2px;"></span> &lt;75% 低效</span>
          </div>
        </div>

        <!-- 2D Matrix Table Grid Container -->
        <div style="flex: 1; overflow: auto; padding: 12px;">
          <table
            v-if="currentRecord"
            style="width: 100%; border-collapse: collapse; font-family: 'Consolas', monospace; font-size: 11.5px; text-align: center;"
          >
            <thead>
              <tr style="background-color: #121519; color: #e2e8f0; border-bottom: 2px solid #2d3748;">
                <th style="padding: 8px 10px; text-align: left; border-right: 1px solid #2d3748; background-color: #121519; position: sticky; left: 0; z-index: 5;">
                  负载 ({{ currentRecord.config.loadMode === 'CC' ? 'A' : 'W' }}) \ 电压 (V)
                </th>
                <th
                  v-for="v in currentRecord.voltageSteps"
                  :key="v"
                  style="padding: 8px 10px; min-width: 80px; color: #ecc94b; font-weight: bold; border-right: 1px solid #2d3748;"
                >
                  {{ v }}V
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="lVal in currentRecord.loadSteps"
                :key="lVal"
                style="border-bottom: 1px solid #2d3748;"
              >
                <!-- Row Header: Load Value -->
                <td style="padding: 8px 10px; text-align: left; font-weight: bold; color: #63b3ed; border-right: 1px solid #2d3748; background-color: #171b22; position: sticky; left: 0; z-index: 5;">
                  {{ lVal }}{{ currentRecord.config.loadMode === 'CC' ? 'A' : 'W' }}
                </td>

                <!-- Cells: Efficiency Values -->
                <td
                  v-for="vVal in currentRecord.voltageSteps"
                  :key="vVal"
                  style="padding: 6px; border-right: 1px solid #2d3748; cursor: pointer; transition: transform 0.1s;"
                  @mouseenter="($event.currentTarget as HTMLElement).style.transform = 'scale(1.04)'"
                  @mouseleave="($event.currentTarget as HTMLElement).style.transform = 'scale(1.0)'"
                  @click="selectedDetailPoint = getPoint(vVal, lVal) || null"
                >
                  <template v-if="getPoint(vVal, lVal)">
                    <div
                      style="padding: 5px 6px; border-radius: 4px; font-weight: bold; font-size: 12px;"
                      :style="getCellStyle(getPoint(vVal, lVal)!.efficiency)"
                    >
                      {{ getPoint(vVal, lVal)!.efficiency.toFixed(2) }}%
                    </div>
                  </template>
                  <span v-else style="color: #4a5568;">--</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Selected Point Detail Card at bottom of 2D Matrix -->
        <div
          v-if="selectedDetailPoint"
          style="padding: 8px 14px; background-color: #121519; border-top: 1px solid #2d3748; display: flex; align-items: center; justify-content: space-between; font-family: 'Consolas', monospace; font-size: 11px;"
        >
          <span style="color: #63b3ed; font-weight: bold;">
            选定点 (#{{ selectedDetailPoint.stepIndex }}):
          </span>
          <span>目标: {{ selectedDetailPoint.voltageTarget }}V / {{ selectedDetailPoint.loadTarget }}{{ selectedDetailPoint.loadMode }}</span>
          <span>实测Vin: <b style="color: #ecc94b;">{{ selectedDetailPoint.vin.toFixed(3) }}V</b></span>
          <span>实测Iin: <b>{{ selectedDetailPoint.iin.toFixed(3) }}A</b></span>
          <span>实测Pin: <b>{{ selectedDetailPoint.pin.toFixed(3) }}W</b></span>
          <span>实测Vout: <b style="color: #63b3ed;">{{ selectedDetailPoint.vout.toFixed(3) }}V</b></span>
          <span>实测Iout: <b>{{ selectedDetailPoint.iout.toFixed(3) }}A</b></span>
          <span>实测Pout: <b>{{ selectedDetailPoint.pout.toFixed(3) }}W</b></span>
          <span style="color: #48bb78; font-weight: bold; font-size: 13px;">
            效率 η: {{ selectedDetailPoint.efficiency.toFixed(2) }}%
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ThreeBarChart from '../components/ThreeBarChart.vue';
import { TestRecord, MatrixPoint } from '../types/test';
import { getTestRecordById, getAllTestRecords } from '../storage/indexedDB';
import { exportRecordToCSV } from '../utils/csvExport';

const route = useRoute();
const router = useRouter();

const currentRecord = ref<TestRecord | null>(null);
const allRecords = ref<TestRecord[]>([]);
const selectedRecordId = ref<string>('');
const selectedDetailPoint = ref<MatrixPoint | null>(null);
const activeViewTab = ref<'3d' | 'matrix'>('3d');

async function loadData() {
  const targetId = (route.params.id as string) || '';

  allRecords.value = await getAllTestRecords();

  if (targetId) {
    const rec = await getTestRecordById(targetId);
    if (rec) {
      currentRecord.value = rec;
      selectedRecordId.value = rec.id;
      return;
    }
  }

  // Fallback to latest
  if (allRecords.value.length > 0) {
    currentRecord.value = allRecords.value[0];
    selectedRecordId.value = allRecords.value[0].id;
  }
}

function getPoint(voltage: number, loadVal: number): MatrixPoint | undefined {
  if (!currentRecord.value) return undefined;
  return currentRecord.value.points.find(
    (p) => Math.abs(p.voltageTarget - voltage) < 1e-4 && Math.abs(p.loadTarget - loadVal) < 1e-4
  );
}

function getCellStyle(eff: number) {
  if (eff >= 90) {
    return { backgroundColor: '#1c4532', color: '#9ae6b4', border: '1px solid #276749' };
  } else if (eff >= 85) {
    return { backgroundColor: '#234e52', color: '#81e6d9', border: '1px solid #285e61' };
  } else if (eff >= 75) {
    return { backgroundColor: '#744210', color: '#fbd38d', border: '1px solid #975a16' };
  } else {
    return { backgroundColor: '#742a2a', color: '#feb2b2', border: '1px solid #9b2c2c' };
  }
}

function handleSwitchRecord() {
  if (selectedRecordId.value) {
    router.replace(`/result/${selectedRecordId.value}`);
  }
}

function handleExportCSV() {
  if (currentRecord.value) {
    exportRecordToCSV(currentRecord.value);
  }
}

function closeWindow() {
  if (window.opener) {
    window.close();
  } else {
    router.push('/');
  }
}

watch(
  () => route.params.id,
  () => {
    loadData();
  }
);

onMounted(() => {
  loadData();
});
</script>
