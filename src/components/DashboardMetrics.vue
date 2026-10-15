<template>
  <div class="glass-panel p-5">
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center space-x-2">
        <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
        <h2 class="text-xs font-bold tracking-wider text-slate-300 uppercase">实时仪器遥测仪表盘</h2>
      </div>

      <!-- Test Progress Indicator -->
      <div class="flex items-center space-x-3 text-xs font-mono">
        <span class="text-slate-400">步进进度:</span>
        <span class="text-cyan-400 font-bold">{{ metrics.currentStep }} / {{ metrics.totalSteps }} 点</span>
        <div class="w-32 bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-700">
          <div
            class="bg-gradient-to-r from-cyan-500 to-emerald-400 h-2 rounded-full transition-all duration-300"
            :style="{ width: `${metrics.progressPercent}%` }"
          ></div>
        </div>
        <span class="text-emerald-400 font-semibold">{{ metrics.progressPercent.toFixed(1) }}%</span>
      </div>
    </div>

    <!-- 7 Key Telemetry Cards Grid -->
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
      <!-- 1. Input Voltage Vin -->
      <div class="glass-card p-3 border-l-4 border-amber-400 flex flex-col justify-between">
        <div class="flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <span>输入电压 (Vin)</span>
          <span class="text-amber-400/80">目标: {{ metrics.activeTargetV.toFixed(2) }}V</span>
        </div>
        <div class="mt-2 text-2xl font-bold font-mono text-amber-400">
          {{ metrics.vin.toFixed(3) }}
          <span class="text-xs font-normal text-slate-400">V</span>
        </div>
      </div>

      <!-- 2. Input Current Iin -->
      <div class="glass-card p-3 border-l-4 border-amber-500/70 flex flex-col justify-between">
        <div class="text-[11px] text-slate-400 font-mono">输入电流 (Iin)</div>
        <div class="mt-2 text-2xl font-bold font-mono text-slate-200">
          {{ metrics.iin.toFixed(3) }}
          <span class="text-xs font-normal text-slate-400">A</span>
        </div>
      </div>

      <!-- 3. Input Power Pin -->
      <div class="glass-card p-3 border-l-4 border-amber-600/70 flex flex-col justify-between">
        <div class="text-[11px] text-slate-400 font-mono">输入功率 (Pin)</div>
        <div class="mt-2 text-2xl font-bold font-mono text-slate-200">
          {{ metrics.pin.toFixed(3) }}
          <span class="text-xs font-normal text-slate-400">W</span>
        </div>
      </div>

      <!-- 4. Output Voltage Vout -->
      <div class="glass-card p-3 border-l-4 border-sky-400 flex flex-col justify-between">
        <div class="text-[11px] text-slate-400 font-mono">输出电压 (Vout)</div>
        <div class="mt-2 text-2xl font-bold font-mono text-sky-400">
          {{ metrics.vout.toFixed(3) }}
          <span class="text-xs font-normal text-slate-400">V</span>
        </div>
      </div>

      <!-- 5. Output Current Iout -->
      <div class="glass-card p-3 border-l-4 border-sky-500/70 flex flex-col justify-between">
        <div class="flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <span>输出电流 (Iout)</span>
          <span class="text-sky-400/80">目标: {{ metrics.activeTargetLoad.toFixed(2) }}</span>
        </div>
        <div class="mt-2 text-2xl font-bold font-mono text-slate-200">
          {{ metrics.iout.toFixed(3) }}
          <span class="text-xs font-normal text-slate-400">A</span>
        </div>
      </div>

      <!-- 6. Output Power Pout -->
      <div class="glass-card p-3 border-l-4 border-sky-600/70 flex flex-col justify-between">
        <div class="text-[11px] text-slate-400 font-mono">输出功率 (Pout)</div>
        <div class="mt-2 text-2xl font-bold font-mono text-slate-200">
          {{ metrics.pout.toFixed(3) }}
          <span class="text-xs font-normal text-slate-400">W</span>
        </div>
      </div>

      <!-- 7. Efficiency η -->
      <div
        class="glass-card p-3 border-l-4 flex flex-col justify-between transition-all"
        :class="getEfficiencyBorderColor(metrics.efficiency)"
      >
        <div class="text-[11px] font-mono text-slate-300 font-semibold flex items-center justify-between">
          <span>转换效率 (η)</span>
          <span class="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400">Pout/Pin</span>
        </div>
        <div class="mt-2 text-2xl font-bold font-mono" :class="getEfficiencyTextColor(metrics.efficiency)">
          {{ metrics.efficiency.toFixed(2) }}
          <span class="text-xs font-normal text-slate-400">%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DashboardMetrics } from '../types/test';

defineProps<{
  metrics: DashboardMetrics;
}>();

function getEfficiencyBorderColor(eff: number) {
  if (eff >= 92) return 'border-emerald-400 bg-emerald-950/20 shadow-lg shadow-emerald-950/40';
  if (eff >= 85) return 'border-cyan-400 bg-cyan-950/20';
  if (eff >= 75) return 'border-amber-400 bg-amber-950/20';
  return 'border-rose-500 bg-rose-950/20';
}

function getEfficiencyTextColor(eff: number) {
  if (eff >= 92) return 'text-emerald-400';
  if (eff >= 85) return 'text-cyan-400';
  if (eff >= 75) return 'text-amber-400';
  return 'text-rose-400';
}
</script>
