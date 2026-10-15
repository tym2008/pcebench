<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 overflow-hidden flex justify-end">
    <!-- Backdrop -->
    <div
      class="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
      @click="$emit('close')"
    ></div>

    <!-- Drawer Content -->
    <div class="relative w-full max-w-md bg-slate-900 border-l border-cyan-500/30 p-6 flex flex-col h-full shadow-2xl z-10">
      <!-- Title & Close -->
      <div class="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
        <div class="flex items-center space-x-2">
          <div class="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
            </svg>
          </div>
          <div>
            <h3 class="text-sm font-bold text-white">IndexedDB 测试历史记录</h3>
            <p class="text-[11px] text-slate-400 font-mono">本地浏览器自动保存最近 5 条测试数据</p>
          </div>
        </div>

        <button
          @click="$emit('close')"
          class="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <!-- History Record List -->
      <div v-if="records.length === 0" class="flex-1 flex flex-col items-center justify-center text-center text-slate-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-slate-600 mb-3 stroke-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <p class="text-sm font-medium">暂无历史测试记录</p>
        <p class="text-xs text-slate-600 mt-1">每次矩阵测试完成时将自动存储于浏览器 IndexedDB</p>
      </div>

      <div v-else class="flex-1 overflow-y-auto space-y-3 pr-1">
        <div
          v-for="rec in records"
          :key="rec.id"
          class="glass-card p-4 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between mb-1.5">
              <span class="text-xs font-bold text-cyan-300 font-mono">{{ rec.title }}</span>
              <span class="text-[10px] text-slate-400 font-mono">
                {{ new Date(rec.createdAt).toLocaleTimeString() }}
              </span>
            </div>

            <!-- Stats grid -->
            <div class="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-400 bg-slate-950/50 p-2.5 rounded-lg border border-slate-800/80 mb-3">
              <div>范围: <span class="text-slate-200">{{ rec.config.voltageMin }}V~{{ rec.config.voltageMax }}V</span></div>
              <div>模式: <span class="text-slate-200">{{ rec.config.loadMode }} ({{ rec.config.loadMin }}~{{ rec.config.loadMax }})</span></div>
              <div>总点数: <span class="text-cyan-400 font-bold">{{ rec.points.length }} 点</span></div>
              <div>最高效率: <span class="text-emerald-400 font-bold">{{ rec.summary?.maxEfficiency?.toFixed(2) ?? '--' }}%</span></div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex items-center justify-between pt-2 border-t border-slate-800 text-xs">
            <button
              @click="$emit('open-3d', rec.id)"
              class="px-2.5 py-1 rounded bg-cyan-600/30 hover:bg-cyan-500 text-cyan-200 hover:text-slate-950 font-medium transition-all flex items-center gap-1 border border-cyan-500/30"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              新窗口 3D 展现
            </button>

            <div class="flex items-center space-x-1.5">
              <button
                @click="$emit('export-record-csv', rec)"
                class="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-emerald-400 transition-all"
                title="导出此记录为 CSV"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </button>

              <button
                @click="$emit('delete-record', rec.id)"
                class="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-rose-400 transition-all"
                title="删除记录"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TestRecord } from '../types/test';

defineProps<{
  isOpen: boolean;
  records: TestRecord[];
}>();

defineEmits<{
  (e: 'close'): void;
  (e: 'open-3d', id: string): void;
  (e: 'export-record-csv', record: TestRecord): void;
  (e: 'delete-record', id: string): void;
}>();
</script>
