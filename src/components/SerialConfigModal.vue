<template>
  <div v-if="isOpen" class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal-card" style="max-width: 520px;">
      <!-- Title -->
      <div class="modal-header">
        <div style="display: flex; align-items: center; gap: 8px;">
          <svg class="icon-md" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#63b3ed" stroke-width="2">
            <path d="M4 11a9 9 0 0 1 9 9"></path>
            <path d="M4 4a16 16 0 0 1 16 16"></path>
            <circle cx="5" cy="19" r="1"></circle>
          </svg>
          <span style="font-weight: bold; color: #ffffff; font-size: 13px;">仪器串口硬件连接 (Web Serial)</span>
        </div>
        <button class="btn" style="padding: 2px 6px;" @click="$emit('close')">✕</button>
      </div>

      <!-- Modal Body -->
      <div class="modal-body" style="display: flex; flex-direction: column; gap: 10px; padding: 14px;">
        <!-- Virtual Mode Callout -->
        <div style="background-color: #171b22; border: 1px solid #3182ce; border-radius: 6px; padding: 10px 12px; display: flex; align-items: center; justify-content: space-between;">
          <div>
            <div style="font-weight: bold; color: #63b3ed; font-size: 12px; display: flex; align-items: center; gap: 6px;">
              <span style="width: 7px; height: 7px; background-color: #00d2ff; border-radius: 50%;"></span>
              内置仿真演示驱动 (Virtual Simulation)
            </div>
            <div style="font-size: 11px; color: #a0aec0; margin-top: 2px;">
              无需接入物理仪器即可直接体验 2D 扫描与 3D 动画图谱
            </div>
          </div>
          <button class="btn btn-primary" style="font-weight: bold;" @click="$emit('connect-virtual')">
            启用仿真
          </button>
        </div>

        <!-- PSU Config Block -->
        <div style="background-color: #171b22; border: 1px solid #2d3748; border-radius: 6px; padding: 10px 12px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
            <span style="font-weight: bold; color: #ecc94b; font-size: 12px; display: flex; align-items: center; gap: 6px;">
              <span style="width: 7px; height: 7px; border-radius: 50%;" :style="{ backgroundColor: psuConnected ? '#48bb78' : '#e53e3e' }"></span>
              直流电源 (RIGOL DP700)
            </span>
            <span style="font-size: 11px; font-family: monospace; color: #a0aec0;">{{ psuPortName }}</span>
          </div>

          <div style="display: flex; align-items: center; gap: 6px;">
            <select v-model.number="psuBaud" :disabled="psuConnected" style="flex: 1;">
              <option :value="9600">9600 bps (标准)</option>
              <option :value="19200">19200 bps</option>
              <option :value="38400">38400 bps</option>
              <option :value="115200">115200 bps</option>
            </select>

            <button
              v-if="!psuConnected"
              class="btn btn-primary"
              style="padding: 4px 12px;"
              @click="$emit('connect-physical-psu', psuBaud)"
            >
              选择 COM 端口
            </button>
            <button
              v-else
              class="btn btn-danger"
              style="padding: 4px 12px;"
              @click="$emit('disconnect-psu')"
            >
              断开
            </button>
          </div>
        </div>

        <!-- Load Config Block -->
        <div style="background-color: #171b22; border: 1px solid #2d3748; border-radius: 6px; padding: 10px 12px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
            <span style="font-weight: bold; color: #63b3ed; font-size: 12px; display: flex; align-items: center; gap: 6px;">
              <span style="width: 7px; height: 7px; border-radius: 50%;" :style="{ backgroundColor: loadConnected ? '#48bb78' : '#e53e3e' }"></span>
              可编程电子负载 (UNI-T UTL8500)
            </span>
            <span style="font-size: 11px; font-family: monospace; color: #a0aec0;">{{ loadPortName }}</span>
          </div>

          <div style="display: flex; align-items: center; gap: 6px;">
            <select v-model.number="loadBaud" :disabled="loadConnected" style="flex: 1;">
              <option :value="9600">9600 bps (标准)</option>
              <option :value="19200">19200 bps</option>
              <option :value="38400">38400 bps</option>
              <option :value="115200">115200 bps</option>
            </select>

            <button
              v-if="!loadConnected"
              class="btn btn-primary"
              style="padding: 4px 12px;"
              @click="$emit('connect-physical-load', loadBaud)"
            >
              选择 COM 端口
            </button>
            <button
              v-else
              class="btn btn-danger"
              style="padding: 4px 12px;"
              @click="$emit('disconnect-load')"
            >
              断开
            </button>
          </div>
        </div>

        <!-- Warning if Web Serial not supported -->
        <div v-if="!webSerialSupported" style="padding: 8px 10px; background-color: #744210; border-radius: 4px; color: #fbd38d; font-size: 11px;">
          ⚠️ 当前浏览器未检测到 Web Serial API（推荐 Chrome 或 Edge 浏览器）。您可直接使用上方<b>【启用仿真】</b>无障碍测试。
        </div>
      </div>

      <div class="modal-footer">
        <button class="btn" @click="$emit('close')">确定</button>
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
