<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4">
    <!-- Backdrop -->
    <div
      class="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
      @click="$emit('close')"
    ></div>

    <!-- Modal Dialog -->
    <div class="relative w-full max-w-lg bg-slate-900 border border-cyan-500/30 rounded-2xl p-6 shadow-2xl z-10 flex flex-col gap-5">
      <!-- Title -->
      <div class="flex items-center justify-between pb-3 border-b border-slate-800">
        <div class="flex items-center space-x-2.5">
          <div class="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 11a9 9 0 0 1 9 9"></path>
              <path d="M4 4a16 16 0 0 1 16 16"></path>
              <circle cx="5" cy="19" r="1"></circle>
            </svg>
          </div>
          <div>
            <h3 class="text-sm font-bold text-white">仪器串口连接设置 (Web Serial)</h3>
            <p class="text-[11px] text-slate-400 font-mono">支持 Chrome/Edge 浏览器原生 COM 口直连或内置仿真</p>
          </div>
        </div>

        <button
          @click="$emit('close')"
          class="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <!-- Quick Virtual Simulation Mode Button -->
      <div class="bg-gradient-to-r from-cyan-950/40 via-indigo-950/40 to-slate-900 border border-cyan-500/30 rounded-xl p-3.5 flex items-center justify-between">
        <div>
          <div class="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            内置仿真驱动 (Virtual Mode)
          </div>
          <div class="text-[11px] text-slate-400 mt-0.5">无物理仪器时直接进行 2D 双向矩阵扫描与 3D 动画演示</div>
        </div>

        <button
          @click="$emit('connect-virtual')"
          class="px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-950/50 transition-all"
        >
          一键启用仿真驱动
        </button>
      </div>

      <!-- Device 1: RIGOL DP700 (Power Supply) -->
      <div class="glass-card p-4 border border-slate-800">
        <div class="flex items-center justify-between mb-2.5">
          <div class="flex items-center space-x-2">
            <span class="w-2.5 h-2.5 rounded-full" :class="psuConnected ? 'bg-emerald-400' : 'bg-slate-600'"></span>
            <span class="text-xs font-bold text-slate-200">直流电源 (RIGOL DP700)</span>
          </div>
          <span class="text-[11px] font-mono text-slate-400">{{ psuPortName }}</span>
        </div>

        <div class="flex items-center space-x-2">
          <select v-model.number="psuBaud" :disabled="psuConnected" class="text-xs py-1.5">
            <option :value="9600">9600 bps (标准)</option>
            <option :value="19200">19200 bps</option>
            <option :value="38400">38400 bps</option>
            <option :value="115200">115200 bps</option>
          </select>

          <button
            v-if="!psuConnected"
            @click="$emit('connect-physical-psu', psuBaud)"
            class="flex-1 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-cyan-500/30 text-xs font-mono font-medium transition-all"
          >
            浏览器选择电源 COM 口
          </button>
          <button
            v-else
            @click="$emit('disconnect-psu')"
            class="flex-1 py-1.5 rounded-lg bg-rose-950/50 hover:bg-rose-900/60 text-rose-300 border border-rose-500/30 text-xs font-mono font-medium transition-all"
          >
            断开电源串口
          </button>
        </div>
      </div>

      <!-- Device 2: UNI-T UTL8500 (Electronic Load) -->
      <div class="glass-card p-4 border border-slate-800">
        <div class="flex items-center justify-between mb-2.5">
          <div class="flex items-center space-x-2">
            <span class="w-2.5 h-2.5 rounded-full" :class="loadConnected ? 'bg-emerald-400' : 'bg-slate-600'"></span>
            <span class="text-xs font-bold text-slate-200">可编程电子负载 (UNI-T UTL8500)</span>
          </div>
          <span class="text-[11px] font-mono text-slate-400">{{ loadPortName }}</span>
        </div>

        <div class="flex items-center space-x-2">
          <select v-model.number="loadBaud" :disabled="loadConnected" class="text-xs py-1.5">
            <option :value="9600">9600 bps (标准)</option>
            <option :value="19200">19200 bps</option>
            <option :value="38400">38400 bps</option>
            <option :value="115200">115200 bps</option>
          </select>

          <button
            v-if="!loadConnected"
            @click="$emit('connect-physical-load', loadBaud)"
            class="flex-1 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-sky-400 border border-sky-500/30 text-xs font-mono font-medium transition-all"
          >
            浏览器选择负载 COM 口
          </button>
          <button
            v-else
            @click="$emit('disconnect-load')"
            class="flex-1 py-1.5 rounded-lg bg-rose-950/50 hover:bg-rose-900/60 text-rose-300 border border-rose-500/30 text-xs font-mono font-medium transition-all"
          >
            断开负载串口
          </button>
        </div>
      </div>

      <!-- Web Serial Support Warning if not supported -->
      <div v-if="!webSerialSupported" class="p-3 rounded-xl bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs font-mono">
        ⚠️ 检测到当前浏览器不支持 Web Serial API。您可直接使用上方<b>【一键启用仿真驱动】</b>进行无障碍测试，或切换至最新版 Chrome / Edge 浏览器。
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  isOpen: boolean;
  psuConnected: boolean;
  psuPortName: string;
  loadConnected: boolean;
  loadPortName: string;
  webSerialSupported: boolean;
}>();

defineEmits<{
  (e: 'close'): void;
  (e: 'connect-virtual'): void;
  (e: 'connect-physical-psu', baud: number): void;
  (e: 'disconnect-psu'): void;
  (e: 'connect-physical-load', baud: number): void;
  (e: 'disconnect-load'): void;
}>();

const psuBaud = ref(9600);
const loadBaud = ref(9600);
</script>
