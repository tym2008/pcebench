<template>
  <header class="w-full bg-slate-900/80 backdrop-blur-md border-b border-cyan-500/20 px-6 py-3 flex items-center justify-between sticky top-0 z-30 shadow-md">
    <!-- Brand / Title -->
    <div class="flex items-center space-x-3">
      <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      </div>
      <div>
        <h1 class="text-base font-bold tracking-tight text-white flex items-center gap-2">
          <span>电源芯片转换效率 3D 自动化测试工作台</span>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            Web Serial + 3D Edition
          </span>
        </h1>
        <p class="text-xs text-slate-400 font-mono">
          RIGOL DP700 直流电源 & UNI-T UTL8500 电子负载 (支持纯浏览器COM口直连 & 仿真驱动)
        </p>
      </div>
    </div>

    <!-- Hardware Status Badges & Action Buttons -->
    <div class="flex items-center space-x-3">
      <!-- PSU Status Badge -->
      <button
        @click="$emit('open-serial-modal')"
        class="flex items-center space-x-2 px-3 py-1.5 rounded-lg border text-xs font-mono transition-all"
        :class="psuConnected
          ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300 hover:border-emerald-400'
          : 'bg-rose-950/40 border-rose-500/40 text-rose-300 hover:border-rose-400'"
      >
        <span class="w-2 h-2 rounded-full" :class="psuConnected ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'"></span>
        <span>电源 (DP700): {{ psuPortName }}</span>
      </button>

      <!-- Load Status Badge -->
      <button
        @click="$emit('open-serial-modal')"
        class="flex items-center space-x-2 px-3 py-1.5 rounded-lg border text-xs font-mono transition-all"
        :class="loadConnected
          ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300 hover:border-emerald-400'
          : 'bg-rose-950/40 border-rose-500/40 text-rose-300 hover:border-rose-400'"
      >
        <span class="w-2 h-2 rounded-full" :class="loadConnected ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'"></span>
        <span>负载 (UTL8500): {{ loadPortName }}</span>
      </button>

      <!-- History Drawer Toggle -->
      <button
        @click="$emit('toggle-history')"
        class="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-medium transition-all shadow"
        title="查看最近5条 IndexedDB 测试记录"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <span>测试历史 (5条)</span>
      </button>

      <!-- Export CSV Button -->
      <button
        @click="$emit('export-csv')"
        :disabled="!hasData"
        class="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg font-medium text-xs transition-all shadow"
        :class="hasData
          ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-emerald-900/30'
          : 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed'"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        <span>导出 CSV</span>
      </button>

      <!-- Link to open 3D in new window directly if test completed -->
      <button
        v-if="latestTestId"
        @click="$emit('open-3d-new-window')"
        class="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium text-xs transition-all shadow shadow-cyan-900/30"
        title="在新窗口打开当前测试数据的 3D 可视化视图"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
        <span>新窗口 3D 视图</span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  psuConnected: boolean;
  psuPortName: string;
  loadConnected: boolean;
  loadPortName: string;
  hasData: boolean;
  latestTestId?: string;
}>();

defineEmits<{
  (e: 'open-serial-modal'): void;
  (e: 'toggle-history'): void;
  (e: 'export-csv'): void;
  (e: 'open-3d-new-window'): void;
}>();
</script>
