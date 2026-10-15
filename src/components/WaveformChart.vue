<template>
  <div style="flex: 1; display: flex; flex-direction: column; background-color: #171b22; border: 1px solid #2d3748; border-radius: 6px; overflow: hidden;">
    <!-- Waveform Header with Channel Toggles (Matching Python charts_widget.py) -->
    <div style="height: 32px; background-color: #1a1e24; border-bottom: 1px solid #2d3748; display: flex; align-items: center; justify-content: space-between; padding: 0 10px;">
      <span style="font-weight: bold; color: #e2e8f0; font-size: 12px; display: flex; align-items: center; gap: 6px;">
        <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="#00d2ff" stroke-width="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
        实时参数时域波形 (Real-time Waveforms)
      </span>

      <!-- Channel Checkbox Toggles -->
      <div style="display: flex; align-items: center; gap: 14px; font-size: 11px; font-weight: bold;">
        <label style="color: #00d2ff; display: flex; align-items: center; gap: 4px; cursor: pointer;">
          <input type="checkbox" v-model="visibleChannels.vin" />
          Vin (电源电压)
        </label>
        <label style="color: #ffd166; display: flex; align-items: center; gap: 4px; cursor: pointer;">
          <input type="checkbox" v-model="visibleChannels.vout" />
          Vout (负载电压)
        </label>
        <label style="color: #06d6a0; display: flex; align-items: center; gap: 4px; cursor: pointer;">
          <input type="checkbox" v-model="visibleChannels.iin" />
          Iin (电源电流)
        </label>
        <label style="color: #ef476f; display: flex; align-items: center; gap: 4px; cursor: pointer;">
          <input type="checkbox" v-model="visibleChannels.iout" />
          Iout (负载电流)
        </label>
      </div>
    </div>

    <!-- Canvas Container -->
    <div ref="containerRef" style="flex: 1; width: 100%; position: relative; background-color: #121519;">
      <canvas ref="canvasRef" style="width: 100%; height: 100%; display: block;"></canvas>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted, watch } from 'vue';

export interface WaveformPoint {
  t: number;
  vin: number;
  vout: number;
  iin: number;
  iout: number;
}

const props = defineProps<{
  latestSample?: WaveformPoint;
}>();

const containerRef = ref<HTMLDivElement | null>(null);
const canvasRef = ref<HTMLCanvasElement | null>(null);

const visibleChannels = reactive({
  vin: true,
  vout: true,
  iin: true,
  iout: true,
});

const maxPoints = 300;
const buffer: WaveformPoint[] = [];
let animId: number = 0;

function addSample(sample: WaveformPoint) {
  buffer.push(sample);
  if (buffer.length > maxPoints) {
    buffer.shift();
  }
}

watch(
  () => props.latestSample,
  (val) => {
    if (val) {
      addSample(val);
    }
  }
);

function render() {
  const canvas = canvasRef.value;
  if (!canvas || !containerRef.value) return;

  const width = (canvas.width = containerRef.value.clientWidth);
  const height = (canvas.height = containerRef.value.clientHeight);
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Background
  ctx.fillStyle = '#121519';
  ctx.fillRect(0, 0, width, height);

  const paddingLeft = 45;
  const paddingRight = 15;
  const paddingTop = 15;
  const paddingBottom = 25;

  const plotW = width - paddingLeft - paddingRight;
  const plotH = height - paddingTop - paddingBottom;

  if (plotW <= 10 || plotH <= 10) return;

  // Draw Grid Lines
  ctx.strokeStyle = '#1e2530';
  ctx.lineWidth = 1;
  ctx.setLineDash([3, 3]);

  // Horizontal Grid
  const gridRows = 5;
  for (let i = 0; i <= gridRows; i++) {
    const y = paddingTop + (plotH / gridRows) * i;
    ctx.beginPath();
    ctx.moveTo(paddingLeft, y);
    ctx.lineTo(paddingLeft + plotW, y);
    ctx.stroke();
  }

  // Vertical Grid
  const gridCols = 8;
  for (let i = 0; i <= gridCols; i++) {
    const x = paddingLeft + (plotW / gridCols) * i;
    ctx.beginPath();
    ctx.moveTo(x, paddingTop);
    ctx.lineTo(x, paddingTop + plotH);
    ctx.stroke();
  }
  ctx.setLineDash([]);

  // Plot Border
  ctx.strokeStyle = '#2d3748';
  ctx.strokeRect(paddingLeft, paddingTop, plotW, plotH);

  // Dynamic Y-axis scale based on buffer (min 0 ~ max 15V)
  let maxV = 15.0;
  let maxI = 4.0;
  buffer.forEach((pt) => {
    if (pt.vin > maxV) maxV = pt.vin + 2;
    if (pt.vout > maxV) maxV = pt.vout + 2;
    if (pt.iin > maxI) maxI = pt.iin + 1;
    if (pt.iout > maxI) maxI = pt.iout + 1;
  });

  // Draw Y-axis labels
  ctx.fillStyle = '#718096';
  ctx.font = '10px Consolas, monospace';
  ctx.textAlign = 'right';
  ctx.textBaseline = 'middle';
  for (let i = 0; i <= gridRows; i++) {
    const y = paddingTop + (plotH / gridRows) * i;
    const vVal = maxV - (maxV / gridRows) * i;
    ctx.fillText(`${vVal.toFixed(1)}V`, paddingLeft - 6, y);
  }

  if (buffer.length < 2) {
    ctx.fillStyle = '#4a5568';
    ctx.textAlign = 'center';
    ctx.fillText('等待采样数据流...', paddingLeft + plotW / 2, paddingTop + plotH / 2);
    return;
  }

  // Draw Curves
  const renderCtx = ctx;
  function drawChannel(key: 'vin' | 'vout' | 'iin' | 'iout', color: string, maxScale: number) {
    if (!renderCtx) return;
    renderCtx.strokeStyle = color;
    renderCtx.lineWidth = 1.6;
    renderCtx.beginPath();

    const n = buffer.length;
    for (let i = 0; i < n; i++) {
      const x = paddingLeft + (i / (maxPoints - 1)) * plotW;
      const val = (buffer[i] as any)[key] || 0;
      const y = paddingTop + plotH - (Math.max(0, val) / maxScale) * plotH;
      if (i === 0) renderCtx.moveTo(x, y);
      else renderCtx.lineTo(x, y);
    }
    renderCtx.stroke();
  }

  if (visibleChannels.vin) drawChannel('vin', '#00d2ff', maxV);
  if (visibleChannels.vout) drawChannel('vout', '#ffd166', maxV);
  if (visibleChannels.iin) drawChannel('iin', '#06d6a0', maxI * (maxV / maxI));
  if (visibleChannels.iout) drawChannel('iout', '#ef476f', maxI * (maxV / maxI));
}

function loop() {
  render();
  animId = requestAnimationFrame(loop);
}

onMounted(() => {
  loop();
});

onUnmounted(() => {
  cancelAnimationFrame(animId);
});

defineExpose({
  clear() {
    buffer.length = 0;
  },
});
</script>
