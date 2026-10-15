<template>
  <div class="w-screen h-screen flex flex-col bg-slate-950 text-slate-100 overflow-hidden select-none">
    <!-- Top Action & Statistics Bar -->
    <header class="px-6 py-3 bg-slate-900/90 backdrop-blur-md border-b border-cyan-500/20 flex flex-wrap items-center justify-between gap-4 z-20 shadow-md">
      <!-- Title & Test Run Metadata -->
      <div class="flex items-center space-x-3">
        <router-link
          to="/"
          class="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all flex items-center gap-1.5 text-xs font-medium"
          title="返回控制台"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          控制台
        </router-link>

        <div>
          <h1 class="text-sm font-bold text-white flex items-center gap-2">
            <span>{{ currentRecord?.title || '3D 效率矩阵空间图谱' }}</span>
            <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              独立可视化新窗口
            </span>
          </h1>
          <p class="text-[11px] text-slate-400 font-mono">
            测试时间: {{ currentRecord ? new Date(currentRecord.createdAt).toLocaleString() : '--' }} |
            规格: {{ currentRecord?.config?.voltageMin }}V~{{ currentRecord?.config?.voltageMax }}V, {{ currentRecord?.config?.loadMode }}
          </p>
        </div>
      </div>

      <!-- Key Performance Badges (Max / Avg / Min) -->
      <div v-if="currentRecord?.summary" class="flex items-center flex-wrap gap-2.5 text-xs font-mono">
        <div class="px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 flex items-center gap-1.5 shadow">
          <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>峰值效率 η_max: <b class="text-emerald-400 font-bold text-sm">{{ currentRecord.summary.maxEfficiency.toFixed(2) }}%</b></span>
          <span v-if="currentRecord.summary.optimalPoint" class="text-[10px] text-emerald-400/80">
            (@{{ currentRecord.summary.optimalPoint.vin.toFixed(1) }}V, {{ currentRecord.summary.optimalPoint.iout.toFixed(2) }}A)
          </span>
        </div>

        <div class="px-3 py-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 flex items-center gap-1.5">
          <span>平均效率 η_avg: <b class="text-cyan-400 font-bold">{{ currentRecord.summary.avgEfficiency.toFixed(2) }}%</b></span>
        </div>

        <div class="px-3 py-1.5 rounded-lg bg-amber-950/40 border border-amber-500/30 text-amber-300 flex items-center gap-1.5">
          <span>矩阵测试点数: <b class="text-amber-400 font-bold">{{ currentRecord.points.length }} 点</b></span>
        </div>
      </div>

      <!-- Right Actions: Switch Recent Runs / Export CSV / Close -->
      <div class="flex items-center space-x-2">
        <!-- Switch between the 5 saved records in IndexedDB -->
        <div v-if="allRecords.length > 1" class="relative">
          <select
            v-model="selectedRecordId"
            @change="handleSwitchRecord"
            class="text-xs font-mono py-1.5 px-2 bg-slate-800 border-slate-700 text-slate-200 rounded-lg outline-none cursor-pointer"
          >
            <option v-for="rec in allRecords" :key="rec.id" :value="rec.id">
              {{ rec.title }} ({{ new Date(rec.createdAt).toLocaleTimeString() }})
            </option>
          </select>
        </div>

        <!-- Export CSV Button -->
        <button
          v-if="currentRecord"
          @click="handleExportCSV"
          class="px-3 py-1.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-medium text-xs transition-all flex items-center gap-1.5 shadow"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          下载 CSV 报告
        </button>

        <button
          @click="closeWindow"
          class="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 transition-all"
          title="关闭窗口"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>

    <!-- 3D WebGL Canvas Area -->
    <div class="flex-1 w-full h-full relative">
      <ThreeBarChart
        v-if="currentRecord && currentRecord.points.length > 0"
        :points="currentRecord.points"
        :voltage-steps="currentRecord.voltageSteps"
        :load-steps="currentRecord.loadSteps"
        :load-mode="currentRecord.config.loadMode"
      />

      <!-- Loading or empty state -->
      <div v-else class="w-full h-full flex flex-col items-center justify-center text-slate-500 gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-cyan-500 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
        </svg>
        <p class="text-sm font-mono">正在从 IndexedDB 加载 3D 矩阵效率数据...</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ThreeBarChart from '../components/ThreeBarChart.vue';
import { TestRecord } from '../types/test';
import { getTestRecordById, getAllTestRecords } from '../storage/indexedDB';
import { exportRecordToCSV } from '../utils/csvExport';

const route = useRoute();
const router = useRouter();

const currentRecord = ref<TestRecord | null>(null);
const allRecords = ref<TestRecord[]>([]);
const selectedRecordId = ref<string>('');

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

  // Fallback to latest record
  if (allRecords.value.length > 0) {
    currentRecord.value = allRecords.value[0];
    selectedRecordId.value = allRecords.value[0].id;
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
