<template>
  <div style="flex: 1; display: flex; flex-direction: column; background-color: #171b22; border: 1px solid #2d3748; border-radius: 6px; overflow: hidden; user-select: none;">
    <!-- Tier 1: Waveform Header with Title, Channel Toggles & Clear -->
    <div style="height: 32px; background-color: #1a1e24; border-bottom: 1px solid #2d3748; display: flex; align-items: center; justify-content: space-between; padding: 0 10px; gap: 8px;">
      <span style="font-weight: bold; color: #e2e8f0; font-size: 12px; display: flex; align-items: center; gap: 6px; white-space: nowrap;">
        <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="#00d2ff" stroke-width="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
        实时参数时域波形 (双纵坐标轴)
      </span>

      <!-- Channel Checkbox Toggles -->
      <div style="display: flex; align-items: center; gap: 12px; font-size: 11px; font-weight: bold; white-space: nowrap;">
        <label style="color: #00d2ff; display: flex; align-items: center; gap: 4px; cursor: pointer;" title="左纵轴: 电源输入电压">
          <input type="checkbox" v-model="visibleChannels.vin" />
          Vin (电源电压)
        </label>
        <label style="color: #ffd166; display: flex; align-items: center; gap: 4px; cursor: pointer;" title="左纵轴: 芯片输出电压">
          <input type="checkbox" v-model="visibleChannels.vout" />
          Vout (负载电压)
        </label>
        <label style="color: #06d6a0; display: flex; align-items: center; gap: 4px; cursor: pointer;" title="右纵轴: 电源输入电流">
          <input type="checkbox" v-model="visibleChannels.iin" />
          Iin (电源电流)
        </label>
        <label style="color: #ef476f; display: flex; align-items: center; gap: 4px; cursor: pointer;" title="右纵轴: 芯片负载电流">
          <input type="checkbox" v-model="visibleChannels.iout" />
          Iout (负载电流)
        </label>
      </div>

      <!-- Clear Button -->
      <button
        class="btn"
        style="padding: 2px 8px; font-size: 10.5px; background-color: #2d3748; color: #a0aec0; border: 1px solid #4a5568;"
        @click="clear"
        title="清空当前波形缓存"
      >
        清空波形
      </button>
    </div>

    <!-- Tier 2: Dual Y-Axes Independent Range Controls -->
    <div style="height: 30px; background-color: #15191e; border-bottom: 1px solid #2d3748; display: flex; align-items: center; justify-content: space-between; padding: 0 10px; font-size: 11px; gap: 12px; overflow-x: auto;">
      <!-- Left Axis: Voltage Range Controls -->
      <div style="display: flex; align-items: center; gap: 6px; white-space: nowrap;">
        <span style="color: #00d2ff; font-weight: bold; display: flex; align-items: center; gap: 3px;">
          ⚡ 左纵轴 (电压):
        </span>
        <label style="display: flex; align-items: center; gap: 3px; color: #cbd5e1; cursor: pointer;" title="自动根据数据峰值伸缩">
          <input type="checkbox" v-model="vAxis.auto" />
          <span>自适应</span>
        </label>

        <div style="display: flex; align-items: center; gap: 3px; background: #0f172a; padding: 1px 6px; border-radius: 3px; border: 1px solid #1e3a8a;">
          <span style="color: #64748b; font-size: 10px;">Min:</span>
          <input
            type="number"
            v-model.number="vAxis.min"
            :disabled="vAxis.auto"
            @change="vAxis.auto = false"
            style="width: 38px; padding: 1px 2px; background: #1e293b; border: 1px solid #334155; color: #38bdf8; font-family: 'Consolas', monospace; font-size: 10.5px; border-radius: 2px; text-align: center;"
            title="电压范围下限"
            step="1"
          />
          <span style="color: #64748b; font-size: 10px;">~ Max:</span>
          <input
            type="number"
            v-model.number="vAxis.max"
            :disabled="vAxis.auto"
            @change="vAxis.auto = false"
            style="width: 44px; padding: 1px 2px; background: #1e293b; border: 1px solid #334155; color: #38bdf8; font-family: 'Consolas', monospace; font-size: 10.5px; border-radius: 2px; text-align: center;"
            title="电压范围上限"
            step="1"
          />
          <span style="color: #38bdf8; font-weight: bold; font-size: 10.5px;">V</span>
        </div>

        <!-- Quick Voltage Presets -->
        <div style="display: flex; align-items: center; gap: 2px;">
          <span style="color: #64748b; font-size: 10px;">预设:</span>
          <button
            v-for="preset in [15, 30, 60]"
            :key="preset"
            class="btn"
            style="padding: 1px 5px; font-size: 10px; background: #1e293b; color: #94a3b8; border: 1px solid #334155;"
            @click="applyVoltagePreset(preset)"
            :title="`锁定 0 ~ ${preset}V 范围`"
          >
            {{ preset }}V
          </button>
        </div>
      </div>

      <!-- Right Axis: Current Range Controls -->
      <div style="display: flex; align-items: center; gap: 6px; white-space: nowrap;">
        <span style="color: #06d6a0; font-weight: bold; display: flex; align-items: center; gap: 3px;">
          🔋 右纵轴 (电流):
        </span>
        <label style="display: flex; align-items: center; gap: 3px; color: #cbd5e1; cursor: pointer;" title="自动根据数据峰值伸缩">
          <input type="checkbox" v-model="iAxis.auto" />
          <span>自适应</span>
        </label>

        <div style="display: flex; align-items: center; gap: 3px; background: #0f172a; padding: 1px 6px; border-radius: 3px; border: 1px solid #065f46;">
          <span style="color: #64748b; font-size: 10px;">Min:</span>
          <input
            type="number"
            v-model.number="iAxis.min"
            :disabled="iAxis.auto"
            @change="iAxis.auto = false"
            style="width: 38px; padding: 1px 2px; background: #1e293b; border: 1px solid #334155; color: #34d399; font-family: 'Consolas', monospace; font-size: 10.5px; border-radius: 2px; text-align: center;"
            title="电流范围下限"
            step="0.5"
          />
          <span style="color: #64748b; font-size: 10px;">~ Max:</span>
          <input
            type="number"
            v-model.number="iAxis.max"
            :disabled="iAxis.auto"
            @change="iAxis.auto = false"
            style="width: 44px; padding: 1px 2px; background: #1e293b; border: 1px solid #334155; color: #34d399; font-family: 'Consolas', monospace; font-size: 10.5px; border-radius: 2px; text-align: center;"
            title="电流范围上限"
            step="0.5"
          />
          <span style="color: #34d399; font-weight: bold; font-size: 10.5px;">A</span>
        </div>

        <!-- Quick Current Presets -->
        <div style="display: flex; align-items: center; gap: 2px;">
          <span style="color: #64748b; font-size: 10px;">预设:</span>
          <button
            v-for="preset in [2, 5, 10]"
            :key="preset"
            class="btn"
            style="padding: 1px 5px; font-size: 10px; background: #1e293b; color: #94a3b8; border: 1px solid #334155;"
            @click="applyCurrentPreset(preset)"
            :title="`锁定 0 ~ ${preset}A 范围`"
          >
            {{ preset }}A
          </button>
        </div>
      </div>
    </div>

    <!-- Canvas Container with Interactive Hover & Mouse Wheel Support -->
    <div
      ref="containerRef"
      style="flex: 1; width: 100%; position: relative; background-color: #121519; cursor: crosshair; overflow: hidden;"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
      @wheel="handleWheel"
      @dblclick="handleDblClick"
    >
      <canvas ref="canvasRef" style="width: 100%; height: 100%; display: block;"></canvas>

      <!-- Hover Cursor Probe Tooltip -->
      <div
        v-if="hoverSample"
        :style="{ left: `${hoverX}px`, top: `${hoverY}px` }"
        style="position: absolute; transform: translate(-50%, -100%); margin-top: -10px; pointer-events: none; z-index: 20; background-color: rgba(22, 27, 34, 0.95); border: 1px solid #38bdf8; border-radius: 4px; padding: 5px 8px; font-family: 'Consolas', monospace; font-size: 10.5px; color: #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.7); white-space: nowrap;"
      >
        <div style="font-weight: bold; border-bottom: 1px solid #2d3748; padding-bottom: 2px; margin-bottom: 3px; display: flex; justify-content: space-between; gap: 10px;">
          <span style="color: #94a3b8;">采样点 #{{ hoverSample.idx }}</span>
          <span style="color: #ecc94b;">{{ hoverSample.relTime }}</span>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2px 10px;">
          <div><span style="color: #00d2ff; font-weight: bold;">Vin:</span> {{ hoverSample.vin.toFixed(3) }}V</div>
          <div><span style="color: #06d6a0; font-weight: bold;">Iin:</span> {{ hoverSample.iin.toFixed(3) }}A</div>
          <div><span style="color: #ffd166; font-weight: bold;">Vout:</span> {{ hoverSample.vout.toFixed(3) }}V</div>
          <div><span style="color: #ef476f; font-weight: bold;">Iout:</span> {{ hoverSample.iout.toFixed(3) }}A</div>
        </div>
      </div>
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

// Channel visibility controls
const visibleChannels = reactive({
  vin: true,
  vout: true,
  iin: true,
  iout: true,
});

// Left axis (Voltage) settings
const vAxis = reactive({
  auto: true,
  min: 0,
  max: 20,
});

// Right axis (Current) settings
const iAxis = reactive({
  auto: true,
  min: 0,
  max: 5,
});

// Quick presets handlers
function applyVoltagePreset(maxV: number) {
  vAxis.auto = false;
  vAxis.min = 0;
  vAxis.max = maxV;
}

function applyCurrentPreset(maxI: number) {
  iAxis.auto = false;
  iAxis.min = 0;
  iAxis.max = maxI;
}

const maxPoints = 300;
const buffer: WaveformPoint[] = [];
let animId: number = 0;

// Hover probe state
const hoverSample = ref<{
  idx: number;
  relTime: string;
  vin: number;
  vout: number;
  iin: number;
  iout: number;
} | null>(null);
const hoverX = ref(0);
const hoverY = ref(0);

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

  const width = containerRef.value.clientWidth;
  const height = containerRef.value.clientHeight;
  if (width === 0 || height === 0) return;

  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);

  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  ctx.scale(dpr, dpr);

  // Background
  ctx.fillStyle = '#121519';
  ctx.fillRect(0, 0, width, height);

  // Coordinates Margins
  const paddingLeft = 52;   // Voltage labels on the left
  const paddingRight = 52;  // Current labels on the right
  const paddingTop = 22;    // Space for axis top titles
  const paddingBottom = 22; // Space for X-axis time labels

  const plotW = width - paddingLeft - paddingRight;
  const plotH = height - paddingTop - paddingBottom;

  if (plotW <= 10 || plotH <= 10) return;

  // 1. Calculate Active Range for Left Axis (Voltage)
  let activeVMin = vAxis.min;
  let activeVMax = vAxis.max;

  if (vAxis.auto) {
    let maxV = 10;
    let minV = 0;
    if (buffer.length > 0) {
      let foundMax = 0;
      let foundMin = 0;
      buffer.forEach((pt) => {
        if (visibleChannels.vin) {
          if (pt.vin > foundMax) foundMax = pt.vin;
          if (pt.vin < foundMin) foundMin = pt.vin;
        }
        if (visibleChannels.vout) {
          if (pt.vout > foundMax) foundMax = pt.vout;
          if (pt.vout < foundMin) foundMin = pt.vout;
        }
      });
      if (foundMax > 0) {
        const rawMax = foundMax * 1.15;
        if (rawMax <= 15) maxV = Math.max(5, Math.ceil(rawMax));
        else if (rawMax <= 30) maxV = Math.ceil(rawMax / 5) * 5;
        else if (rawMax <= 100) maxV = Math.ceil(rawMax / 10) * 10;
        else maxV = Math.ceil(rawMax / 20) * 20;
      }
    }
    activeVMin = minV;
    activeVMax = maxV;
    // Reflect active range in inputs
    vAxis.min = activeVMin;
    vAxis.max = activeVMax;
  }
  // Ensure valid range
  if (activeVMax <= activeVMin) activeVMax = activeVMin + 1;
  const vSpan = activeVMax - activeVMin;

  // 2. Calculate Active Range for Right Axis (Current)
  let activeIMin = iAxis.min;
  let activeIMax = iAxis.max;

  if (iAxis.auto) {
    let maxI = 3.0;
    let minI = 0;
    if (buffer.length > 0) {
      let foundMax = 0;
      let foundMin = 0;
      buffer.forEach((pt) => {
        if (visibleChannels.iin) {
          if (pt.iin > foundMax) foundMax = pt.iin;
          if (pt.iin < foundMin) foundMin = pt.iin;
        }
        if (visibleChannels.iout) {
          if (pt.iout > foundMax) foundMax = pt.iout;
          if (pt.iout < foundMin) foundMin = pt.iout;
        }
      });
      if (foundMax > 0) {
        const rawMax = foundMax * 1.2;
        if (rawMax <= 2) maxI = Math.max(0.5, Math.ceil(rawMax * 10) / 10);
        else if (rawMax <= 10) maxI = Math.ceil(rawMax);
        else maxI = Math.ceil(rawMax / 2) * 2;
      }
    }
    activeIMin = minI;
    activeIMax = maxI;
    // Reflect active range in inputs
    iAxis.min = activeIMin;
    iAxis.max = activeIMax;
  }
  // Ensure valid range
  if (activeIMax <= activeIMin) activeIMax = activeIMin + 0.1;
  const iSpan = activeIMax - activeIMin;

  // 3. Draw Interior Grid Lines
  const gridRows = 5;
  const gridCols = 8;

  ctx.strokeStyle = '#1e293b';
  ctx.lineWidth = 1;
  ctx.setLineDash([3, 3]);

  // Horizontal Grid
  for (let i = 0; i <= gridRows; i++) {
    const y = paddingTop + (plotH / gridRows) * i;
    ctx.beginPath();
    ctx.moveTo(paddingLeft, y);
    ctx.lineTo(paddingLeft + plotW, y);
    ctx.stroke();
  }

  // Vertical Grid
  for (let i = 0; i <= gridCols; i++) {
    const x = paddingLeft + (plotW / gridCols) * i;
    ctx.beginPath();
    ctx.moveTo(x, paddingTop);
    ctx.lineTo(x, paddingTop + plotH);
    ctx.stroke();
  }
  ctx.setLineDash([]);

  // 4. Plot Area Outline
  ctx.strokeStyle = '#334155';
  ctx.lineWidth = 1;
  ctx.strokeRect(paddingLeft, paddingTop, plotW, plotH);

  // 5. Draw Left Axis (Voltage) Ticks and Labels
  ctx.font = '10px "Consolas", monospace';
  ctx.textAlign = 'right';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#38bdf8';

  for (let i = 0; i <= gridRows; i++) {
    const y = paddingTop + (plotH / gridRows) * i;
    const vVal = activeVMax - (vSpan / gridRows) * i;
    const vText = vSpan >= 10 ? `${vVal.toFixed(1)}V` : `${vVal.toFixed(2)}V`;
    ctx.fillText(vText, paddingLeft - 6, y);

    // Left Tick mark
    ctx.strokeStyle = '#0284c7';
    ctx.beginPath();
    ctx.moveTo(paddingLeft - 4, y);
    ctx.lineTo(paddingLeft, y);
    ctx.stroke();
  }

  // Left Axis Title at Top
  ctx.textAlign = 'left';
  ctx.font = 'bold 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  ctx.fillStyle = '#00d2ff';
  ctx.fillText('⚡ 电压 (V)', paddingLeft - 34, paddingTop - 8);

  // 6. Draw Right Axis (Current) Ticks and Labels
  ctx.font = '10px "Consolas", monospace';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#34d399';

  for (let i = 0; i <= gridRows; i++) {
    const y = paddingTop + (plotH / gridRows) * i;
    const iVal = activeIMax - (iSpan / gridRows) * i;
    const iText = iSpan >= 5 ? `${iVal.toFixed(2)}A` : `${iVal.toFixed(3)}A`;
    ctx.fillText(iText, paddingLeft + plotW + 6, y);

    // Right Tick mark
    ctx.strokeStyle = '#059669';
    ctx.beginPath();
    ctx.moveTo(paddingLeft + plotW, y);
    ctx.lineTo(paddingLeft + plotW + 4, y);
    ctx.stroke();
  }

  // Right Axis Title at Top
  ctx.textAlign = 'right';
  ctx.font = 'bold 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  ctx.fillStyle = '#06d6a0';
  ctx.fillText('🔋 电流 (A)', paddingLeft + plotW + 34, paddingTop - 8);

  // 7. Draw Bottom X-Axis (Time / Rolling Sample Index)
  ctx.font = '10px "Consolas", monospace';
  ctx.fillStyle = '#64748b';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';

  if (buffer.length > 1) {
    const t0 = buffer[0].t;
    const tEnd = buffer[buffer.length - 1].t;
    const totalSec = Math.max(0.1, (tEnd - t0) / 1000);

    for (let i = 0; i <= gridCols; i += 2) {
      const x = paddingLeft + (plotW / gridCols) * i;
      const secAgo = totalSec * (1 - i / gridCols);
      const label = i === gridCols ? '0.0s' : `-${secAgo.toFixed(1)}s`;
      ctx.fillText(label, x, paddingTop + plotH + 5);
    }
  } else {
    ctx.fillText('时间轴 (Time)', paddingLeft + plotW / 2, paddingTop + plotH + 5);
  }

  // 8. If empty buffer, show prompt
  if (buffer.length < 2) {
    ctx.fillStyle = '#475569';
    ctx.font = '12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('⚡ 仪器待机中，开始测试后将实时连续绘制高频电压与电流波形...', paddingLeft + plotW / 2, paddingTop + plotH / 2);
    return;
  }

  // 9. Draw Waveform Curves (Clipped strictly within plot rectangle)
  ctx.save();
  ctx.beginPath();
  ctx.rect(paddingLeft, paddingTop, plotW, plotH);
  ctx.clip();

  // Draw Voltage Channels (Vin, Vout) against Left Axis
  function drawVoltageChannel(key: 'vin' | 'vout', color: string) {
    if (!ctx) return;
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.8;
    ctx.beginPath();

    const n = buffer.length;
    for (let i = 0; i < n; i++) {
      const x = paddingLeft + (i / (maxPoints - 1)) * plotW;
      const val = buffer[i][key];
      const y = paddingTop + plotH - ((val - activeVMin) / vSpan) * plotH;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  // Draw Current Channels (Iin, Iout) against Right Axis
  function drawCurrentChannel(key: 'iin' | 'iout', color: string) {
    if (!ctx) return;
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.8;
    ctx.beginPath();

    const n = buffer.length;
    for (let i = 0; i < n; i++) {
      const x = paddingLeft + (i / (maxPoints - 1)) * plotW;
      const val = buffer[i][key];
      const y = paddingTop + plotH - ((val - activeIMin) / iSpan) * plotH;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  if (visibleChannels.vin) drawVoltageChannel('vin', '#00d2ff');
  if (visibleChannels.vout) drawVoltageChannel('vout', '#ffd166');
  if (visibleChannels.iin) drawCurrentChannel('iin', '#06d6a0');
  if (visibleChannels.iout) drawCurrentChannel('iout', '#ef476f');

  // 10. Draw Hover Cursor Hairline & Probe Marker
  if (hoverSample.value && hoverX.value >= paddingLeft && hoverX.value <= paddingLeft + plotW) {
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 2]);
    ctx.beginPath();
    ctx.moveTo(hoverX.value, paddingTop);
    ctx.lineTo(hoverX.value, paddingTop + plotH);
    ctx.stroke();
    ctx.setLineDash([]);

    // Highlight current sample point with dot on each visible curve
    const s = hoverSample.value;
    if (visibleChannels.vin) {
      const vy = paddingTop + plotH - ((s.vin - activeVMin) / vSpan) * plotH;
      ctx.fillStyle = '#00d2ff';
      ctx.beginPath();
      ctx.arc(hoverX.value, vy, 3.5, 0, Math.PI * 2);
      ctx.fill();
    }
    if (visibleChannels.vout) {
      const vy = paddingTop + plotH - ((s.vout - activeVMin) / vSpan) * plotH;
      ctx.fillStyle = '#ffd166';
      ctx.beginPath();
      ctx.arc(hoverX.value, vy, 3.5, 0, Math.PI * 2);
      ctx.fill();
    }
    if (visibleChannels.iin) {
      const iy = paddingTop + plotH - ((s.iin - activeIMin) / iSpan) * plotH;
      ctx.fillStyle = '#06d6a0';
      ctx.beginPath();
      ctx.arc(hoverX.value, iy, 3.5, 0, Math.PI * 2);
      ctx.fill();
    }
    if (visibleChannels.iout) {
      const iy = paddingTop + plotH - ((s.iout - activeIMin) / iSpan) * plotH;
      ctx.fillStyle = '#ef476f';
      ctx.beginPath();
      ctx.arc(hoverX.value, iy, 3.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  ctx.restore();
}

function handleMouseMove(e: MouseEvent) {
  if (!containerRef.value) return;
  const rect = containerRef.value.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const paddingLeft = 52;
  const paddingRight = 52;
  const plotW = rect.width - paddingLeft - paddingRight;

  if (x >= paddingLeft && x <= paddingLeft + plotW && buffer.length > 1) {
    const ratio = (x - paddingLeft) / plotW;
    const idx = Math.min(buffer.length - 1, Math.max(0, Math.round(ratio * (maxPoints - 1))));
    const s = buffer[idx];

    if (s) {
      const t0 = buffer[0].t;
      const tEnd = buffer[buffer.length - 1].t;
      const totalSec = (tEnd - t0) / 1000;
      const pointSec = (s.t - t0) / 1000;
      const relAgo = totalSec - pointSec;

      hoverSample.value = {
        idx: idx + 1,
        relTime: relAgo > 0.05 ? `-${relAgo.toFixed(2)}s` : '最新点',
        vin: s.vin,
        vout: s.vout,
        iin: s.iin,
        iout: s.iout,
      };
      hoverX.value = x;
      hoverY.value = y;
      return;
    }
  }
  hoverSample.value = null;
}

function handleMouseLeave() {
  hoverSample.value = null;
}

// Wheel zoom: roll over left axis zooms Voltage; roll over right axis zooms Current
function handleWheel(event: WheelEvent) {
  if (!containerRef.value) return;
  const rect = containerRef.value.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const width = rect.width;
  const paddingLeft = 52;
  const paddingRight = 52;

  const delta = event.deltaY < 0 ? -1 : 1; // -1 = zoom in, 1 = zoom out

  // Left axis zone: Voltage
  if (mouseX <= paddingLeft + 35) {
    event.preventDefault();
    vAxis.auto = false;
    const span = Math.max(1, vAxis.max - vAxis.min);
    const step = span > 20 ? 5 : (span > 5 ? 2 : 1);
    vAxis.max = Math.max(vAxis.min + 1, Math.round((vAxis.max + delta * step) * 10) / 10);
  }
  // Right axis zone: Current
  else if (mouseX >= width - paddingRight - 35) {
    event.preventDefault();
    iAxis.auto = false;
    const span = Math.max(0.2, iAxis.max - iAxis.min);
    const step = span > 5 ? 1 : (span > 1 ? 0.5 : 0.2);
    iAxis.max = Math.max(iAxis.min + 0.2, Math.round((iAxis.max + delta * step) * 10) / 10);
  }
}

// Double click: left axis resets Voltage to Auto; right axis resets Current to Auto
function handleDblClick(event: MouseEvent) {
  if (!containerRef.value) return;
  const rect = containerRef.value.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const width = rect.width;
  const paddingLeft = 52;
  const paddingRight = 52;

  if (mouseX <= paddingLeft + 35) {
    vAxis.auto = true;
  } else if (mouseX >= width - paddingRight - 35) {
    iAxis.auto = true;
  }
}

function clear() {
  buffer.length = 0;
  hoverSample.value = null;
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
  clear,
});
</script>

<style scoped>
/* Clean custom scrollbar for horizontal toolbar if on compact screens */
::-webkit-scrollbar {
  height: 4px;
}
::-webkit-scrollbar-track {
  background: #15191e;
}
::-webkit-scrollbar-thumb {
  background: #334155;
  border-radius: 2px;
}
</style>
