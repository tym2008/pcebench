<template>
  <div class="glass-panel p-5 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
        <div class="flex items-center space-x-2">
          <div class="w-2.5 h-2.5 rounded-full bg-cyan-400"></div>
          <h2 class="text-xs font-bold tracking-wider text-slate-200 uppercase">2D 双向矩阵扫描参数设定</h2>
        </div>
        <span class="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-cyan-400 border border-slate-700">
          共 {{ totalPoints }} 个矩阵测试点 (~{{ estimatedDurationText }})
        </span>
      </div>

      <!-- Section 1: Input Voltage Scan Settings -->
      <div class="mb-4">
        <div class="text-[11px] font-semibold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
          </svg>
          输入电压扫描范围 (Input Voltage)
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div>
            <label class="block text-[11px] text-slate-400 font-mono mb-1">起始电压 (下限 V)</label>
            <input
              type="number"
              v-model.number="config.voltageMin"
              :disabled="isRunning"
              step="0.5"
              min="0"
              class="w-full font-mono text-xs"
            />
          </div>
          <div>
            <label class="block text-[11px] text-slate-400 font-mono mb-1">终止电压 (上限 V)</label>
            <input
              type="number"
              v-model.number="config.voltageMax"
              :disabled="isRunning"
              step="0.5"
              min="0"
              class="w-full font-mono text-xs"
            />
          </div>
          <div>
            <label class="block text-[11px] text-slate-400 font-mono mb-1">电压步长 (Step V)</label>
            <input
              type="number"
              v-model.number="config.voltageStep"
              :disabled="isRunning"
              step="0.2"
              min="0.1"
              class="w-full font-mono text-xs"
            />
          </div>
          <div>
            <label class="block text-[11px] text-slate-400 font-mono mb-1">输入限流 (A)</label>
            <input
              type="number"
              v-model.number="config.inputCurrentLimit"
              :disabled="isRunning"
              step="0.5"
              min="0.5"
              class="w-full font-mono text-xs"
            />
          </div>
        </div>
      </div>

      <!-- Section 2: Load Scan Settings -->
      <div class="mb-4">
        <div class="text-[11px] font-semibold text-sky-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <div class="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            负载扫描范围 (Load Range & Mode)
          </div>

          <!-- CC / CW Mode Switch -->
          <div class="flex rounded bg-slate-800 p-0.5 border border-slate-700 text-[10px] font-mono">
            <button
              type="button"
              @click="!isRunning && (config.loadMode = 'CC')"
              :disabled="isRunning"
              :class="[
                'px-2 py-0.5 rounded transition-all',
                config.loadMode === 'CC'
                  ? 'bg-sky-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              ]"
            >
              CC (恒流 A)
            </button>
            <button
              type="button"
              @click="!isRunning && (config.loadMode = 'CW')"
              :disabled="isRunning"
              :class="[
                'px-2 py-0.5 rounded transition-all',
                config.loadMode === 'CW'
                  ? 'bg-sky-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              ]"
            >
              CW (恒功率 W)
            </button>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-2.5">
          <div>
            <label class="block text-[11px] text-slate-400 font-mono mb-1">
              起始负载 (下限 {{ config.loadMode === 'CC' ? 'A' : 'W' }})
            </label>
            <input
              type="number"
              v-model.number="config.loadMin"
              :disabled="isRunning"
              step="0.2"
              min="0"
              class="w-full font-mono text-xs"
            />
          </div>
          <div>
            <label class="block text-[11px] text-slate-400 font-mono mb-1">
              终止负载 (上限 {{ config.loadMode === 'CC' ? 'A' : 'W' }})
            </label>
            <input
              type="number"
              v-model.number="config.loadMax"
              :disabled="isRunning"
              step="0.2"
              min="0"
              class="w-full font-mono text-xs"
            />
          </div>
          <div>
            <label class="block text-[11px] text-slate-400 font-mono mb-1">
              负载步长 (Step {{ config.loadMode === 'CC' ? 'A' : 'W' }})
            </label>
            <input
              type="number"
              v-model.number="config.loadStep"
              :disabled="isRunning"
              step="0.2"
              min="0.05"
              class="w-full font-mono text-xs"
            />
          </div>
        </div>
      </div>

      <!-- Section 3: Timing & Transient Stabilization -->
      <div class="mb-5 grid grid-cols-2 gap-2.5">
        <div>
          <label class="block text-[11px] text-slate-400 font-mono mb-1">采样时序机制</label>
          <div class="text-xs text-emerald-400 font-mono py-1">
            0.5s静默 + 0.3s采样
          </div>
        </div>
      </div>
    </div>

    <!-- Execution Control Buttons -->
    <div class="pt-3 border-t border-slate-800 flex items-center space-x-3">
      <!-- Start / Pause Button -->
      <button
        v-if="!isRunning"
        @click="$emit('start-test')"
        class="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-950/50 flex items-center justify-center gap-2 transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
        <span>▶ 开始全自动矩阵测试</span>
      </button>

      <button
        v-else-if="!isPaused"
        @click="$emit('pause-test')"
        class="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-950/50 flex items-center justify-center gap-2 transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        </svg>
        <span>⏸ 暂停测试</span>
      </button>

      <button
        v-else
        @click="$emit('resume-test')"
        class="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-950/50 flex items-center justify-center gap-2 transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
        <span>▶ 继续测试</span>
      </button>

      <!-- Stop Button -->
      <button
        @click="$emit('stop-test')"
        :disabled="!isRunning"
        class="py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
        :class="isRunning
          ? 'bg-rose-900/60 hover:bg-rose-800/80 text-rose-200 border border-rose-500/40 shadow-lg shadow-rose-950/40'
          : 'bg-slate-800 text-slate-500 border border-slate-700/60 cursor-not-allowed'"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <rect x="5" y="5" width="14" height="14" rx="2" ry="2"></rect>
        </svg>
        <span>⏹ 终止</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { SweepConfig } from '../types/test';

const props = defineProps<{
  config: SweepConfig;
  isRunning: boolean;
  isPaused: boolean;
}>();

defineEmits<{
  (e: 'start-test'): void;
  (e: 'pause-test'): void;
  (e: 'resume-test'): void;
  (e: 'stop-test'): void;
}>();

const totalPoints = computed(() => {
  const vSteps = Math.max(1, Math.floor((props.config.voltageMax - props.config.voltageMin) / props.config.voltageStep) + 1);
  const loadSteps = Math.max(1, Math.floor((props.config.loadMax - props.config.loadMin) / props.config.loadStep) + 1);
  return vSteps * loadSteps;
});

const estimatedDurationText = computed(() => {
  const sec = Math.round(totalPoints.value * (props.config.stepDwellTime || 0.8));
  if (sec < 60) return `${sec}秒`;
  const min = Math.floor(sec / 60);
  const remSec = sec % 60;
  return `${min}分${remSec}秒`;
});
</script>
