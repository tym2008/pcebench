<template>
  <div class="glass-panel p-5 flex flex-col h-full">
    <!-- Header with Tab Switcher -->
    <div class="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
      <div class="flex items-center space-x-3">
        <div class="flex rounded-lg bg-slate-800 p-0.5 border border-slate-700 text-xs font-medium">
          <button
            @click="activeTab = 'matrix'"
            :class="[
              'px-3 py-1 rounded-md transition-all flex items-center gap-1.5',
              activeTab === 'matrix'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-slate-200'
            ]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            2D 双向效率矩阵表
          </button>
          <button
            @click="activeTab = 'list'"
            :class="[
              'px-3 py-1 rounded-md transition-all flex items-center gap-1.5',
              activeTab === 'list'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-slate-200'
            ]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3.01" y2="6"></line>
              <line x1="3" y1="12" x2="3.01" y2="12"></line>
              <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
            步进采样流水明细
          </button>
        </div>
      </div>

      <!-- Live Count Stats -->
      <div class="text-xs font-mono text-slate-400">
        已测点数: <b class="text-cyan-400">{{ completedCount }}</b> / {{ points.length }}
      </div>
    </div>

    <!-- Tab 1: 2D Matrix Table View -->
    <div v-if="activeTab === 'matrix'" class="flex-1 overflow-auto">
      <div v-if="voltageSteps.length === 0 || loadSteps.length === 0" class="h-64 flex flex-col items-center justify-center text-slate-500 text-xs">
        <span>尚未配置测试矩阵</span>
      </div>

      <div v-else class="inline-block min-w-full align-middle">
        <table class="min-w-full divide-y divide-slate-800 text-center font-mono text-xs">
          <thead>
            <tr class="bg-slate-900/90 text-slate-300">
              <th class="p-2.5 text-left border-r border-slate-800 sticky left-0 bg-slate-900 z-10">
                负载 \ 电压
              </th>
              <th
                v-for="v in voltageSteps"
                :key="v"
                class="p-2.5 min-w-[76px] font-semibold text-amber-400"
              >
                {{ v }}V
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800/60">
            <tr v-for="loadVal in loadSteps" :key="loadVal" class="hover:bg-slate-800/30 transition-colors">
              <!-- Row Header (Load Value) -->
              <td class="p-2.5 text-left font-semibold text-sky-400 border-r border-slate-800 sticky left-0 bg-slate-900/95 z-10">
                {{ loadVal }}{{ loadMode === 'CC' ? 'A' : 'W' }}
              </td>

              <!-- Matrix Cells (Efficiency Values) -->
              <td
                v-for="v in voltageSteps"
                :key="v"
                class="p-2 border-r border-slate-800/40 relative cursor-pointer"
                @click="selectPoint(getPoint(v, loadVal))"
              >
                <template v-if="getPoint(v, loadVal)">
                  <!-- Running pulse -->
                  <div
                    v-if="getPoint(v, loadVal)!.status === 'running'"
                    class="py-1 px-1.5 rounded bg-cyan-500/20 border border-cyan-400 text-cyan-300 animate-pulse font-bold"
                  >
                    采样中...
                  </div>

                  <!-- Completed Cell -->
                  <div
                    v-else-if="getPoint(v, loadVal)!.status === 'completed'"
                    class="py-1 px-1.5 rounded transition-transform hover:scale-105 font-bold"
                    :class="getCellBgClass(getPoint(v, loadVal)!.efficiency)"
                  >
                    {{ getPoint(v, loadVal)!.efficiency.toFixed(1) }}%
                  </div>

                  <!-- Pending Cell -->
                  <div v-else class="py-1 px-1.5 text-slate-600 font-mono text-[11px]">
                    --
                  </div>
                </template>
                <span v-else class="text-slate-700">--</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Tab 2: Detailed Step List Table View -->
    <div v-else class="flex-1 overflow-auto">
      <table class="min-w-full divide-y divide-slate-800 font-mono text-xs text-right">
        <thead class="bg-slate-900/90 text-slate-400 sticky top-0 z-10 text-[11px]">
          <tr>
            <th class="p-2 text-center">步号</th>
            <th class="p-2">目标Vin(V)</th>
            <th class="p-2">目标负载</th>
            <th class="p-2 text-amber-300">实测Vin(V)</th>
            <th class="p-2 text-slate-300">实测Iin(A)</th>
            <th class="p-2 text-slate-300">实测Pin(W)</th>
            <th class="p-2 text-sky-300">实测Vout(V)</th>
            <th class="p-2 text-slate-300">实测Iout(A)</th>
            <th class="p-2 text-slate-300">实测Pout(W)</th>
            <th class="p-2 text-emerald-400 text-center">转换效率 η</th>
            <th class="p-2 text-center">状态</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-800/60">
          <tr
            v-for="pt in points"
            :key="pt.stepIndex"
            class="hover:bg-slate-800/40 transition-colors"
            :class="{ 'bg-cyan-950/20': pt.status === 'running' }"
          >
            <td class="p-2 text-center text-slate-400">#{{ pt.stepIndex }}</td>
            <td class="p-2">{{ pt.voltageTarget.toFixed(2) }}</td>
            <td class="p-2">{{ pt.loadTarget.toFixed(2) }} {{ pt.loadMode }}</td>
            <td class="p-2 font-bold text-amber-400">{{ pt.status !== 'pending' ? pt.vin.toFixed(3) : '--' }}</td>
            <td class="p-2">{{ pt.status !== 'pending' ? pt.iin.toFixed(3) : '--' }}</td>
            <td class="p-2">{{ pt.status !== 'pending' ? pt.pin.toFixed(3) : '--' }}</td>
            <td class="p-2 font-bold text-sky-400">{{ pt.status !== 'pending' ? pt.vout.toFixed(3) : '--' }}</td>
            <td class="p-2">{{ pt.status !== 'pending' ? pt.iout.toFixed(3) : '--' }}</td>
            <td class="p-2">{{ pt.status !== 'pending' ? pt.pout.toFixed(3) : '--' }}</td>
            <td class="p-2 text-center font-bold">
              <span v-if="pt.status === 'completed'" :class="getEffTextClass(pt.efficiency)">
                {{ pt.efficiency.toFixed(2) }}%
              </span>
              <span v-else-if="pt.status === 'running'" class="text-cyan-400 animate-pulse">测定中</span>
              <span v-else class="text-slate-600">--</span>
            </td>
            <td class="p-2 text-center">
              <span
                class="px-2 py-0.5 rounded text-[10px]"
                :class="{
                  'bg-emerald-950 text-emerald-400 border border-emerald-500/30': pt.status === 'completed',
                  'bg-cyan-950 text-cyan-400 border border-cyan-500/30 animate-pulse': pt.status === 'running',
                  'bg-slate-800 text-slate-500': pt.status === 'pending',
                }"
              >
                {{ pt.status === 'completed' ? '已完成' : pt.status === 'running' ? '采样中' : '等待' }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { MatrixPoint, LoadScanMode } from '../types/test';

const props = defineProps<{
  points: MatrixPoint[];
  voltageSteps: number[];
  loadSteps: number[];
  loadMode: LoadScanMode;
}>();

const emit = defineEmits<{
  (e: 'select-point', point: MatrixPoint): void;
}>();

const activeTab = ref<'matrix' | 'list'>('matrix');

const completedCount = computed(() => {
  return props.points.filter((p) => p.status === 'completed').length;
});

function getPoint(voltage: number, loadVal: number): MatrixPoint | undefined {
  return props.points.find(
    (p) => Math.abs(p.voltageTarget - voltage) < 1e-4 && Math.abs(p.loadTarget - loadVal) < 1e-4
  );
}

function selectPoint(pt?: MatrixPoint) {
  if (pt && pt.status === 'completed') {
    emit('select-point', pt);
  }
}

function getCellBgClass(eff: number): string {
  if (eff >= 92) return 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm';
  if (eff >= 85) return 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30';
  if (eff >= 75) return 'bg-amber-500/20 text-amber-300 border border-amber-500/30';
  return 'bg-rose-500/20 text-rose-300 border border-rose-500/30';
}

function getEffTextClass(eff: number): string {
  if (eff >= 92) return 'text-emerald-400';
  if (eff >= 85) return 'text-cyan-400';
  if (eff >= 75) return 'text-amber-400';
  return 'text-rose-400';
}
</script>
