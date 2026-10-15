<template>
  <div style="width: 100vw; height: 100vh; display: flex; flex-direction: column; overflow: hidden; background-color: #121519; color: #e2e8f0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
    <!-- 1. Top Header & Action Bar -->
    <header style="height: 48px; background-color: #1a1e24; border-bottom: 1px solid #2d3748; display: flex; align-items: center; justify-content: space-between; padding: 0 16px; z-index: 30; gap: 12px;">
      <!-- Title & Return to Console -->
      <div style="display: flex; align-items: center; gap: 12px;">
        <router-link
          to="/"
          class="btn"
          style="padding: 4px 10px; font-weight: bold; background-color: #2b6cb0; color: white; border-color: #3182ce;"
          title="返回测试工作台主界面"
        >
          <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          返回控制台
        </router-link>

        <div>
          <div style="font-weight: bold; font-size: 13px; color: #ffffff; display: flex; align-items: center; gap: 8px;">
            <span>🔧 仪器底层单体测试与硬件调试工作台 (Single Instrument Debugger)</span>
            <span style="font-size: 10px; font-family: monospace; padding: 1px 6px; border-radius: 3px; background-color: #2c5282; color: #90cdf4; border: 1px solid #3182ce;">
              单仪器独立控制
            </span>
          </div>
          <div style="font-size: 10.5px; color: #a0aec0; font-family: 'Consolas', monospace;">
            支持电源独立加压/限流/开关输出，负载四模(CC/CV/CP/CR)单独带载，以及原始 SCPI 串口收发
          </div>
        </div>
      </div>

      <!-- Header Right Actions: Simulation toggle & Emergency stop -->
      <div style="display: flex; align-items: center; gap: 10px;">
        <label style="color: #68d391; font-weight: bold; font-size: 11.5px; display: flex; align-items: center; gap: 5px; cursor: pointer;">
          <input type="checkbox" v-model="isSimulationMode" @change="toggleSimulationMode" />
          🧪 仿真演示驱动
        </label>

        <button
          class="btn btn-danger"
          style="padding: 4px 12px; font-weight: bold; font-size: 11.5px;"
          @click="handleEmergencyStop"
        >
          🛑 一键关闭所有输出
        </button>
      </div>
    </header>

    <!-- 2. Main Two-Column Layout (Left: Power Supply, Right: Electronic Load) -->
    <div style="flex: 1; display: flex; overflow: hidden; position: relative;">
      <!-- ====== LEFT COLUMN: Power Supply (RIGOL DP700) ====== -->
      <div style="flex: 1; border-right: 1px solid #2d3748; display: flex; flex-direction: column; background-color: #15191e; overflow-y: auto; padding: 14px;">
        <div class="group-box" style="margin-top: 0; border-color: #2b6cb0;">
          <div class="group-title" style="color: #63b3ed;">
            <span>⚡ 高精度直流电源单体测试 (RIGOL DP700 系列)</span>
          </div>

          <!-- Port Connection Row -->
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; background: #121519; padding: 6px 10px; border-radius: 4px; border: 1px solid #2d3748;">
            <div style="display: flex; align-items: center; gap: 8px; font-size: 11px;">
              <span style="width: 8px; height: 8px; border-radius: 50%;" :style="{ backgroundColor: serialManager.psu.state.connected ? '#48bb78' : '#e53e3e' }"></span>
              <span style="color: #cbd5e1; font-weight: bold;">电源状态:</span>
              <span style="font-family: monospace; color: #63b3ed;">{{ serialManager.psu.state.portName }}</span>
            </div>

            <div style="display: flex; align-items: center; gap: 6px;">
              <button
                class="btn"
                :style="{ backgroundColor: serialManager.psu.state.connected ? '#742a2a' : '#234e52', color: 'white' }"
                style="padding: 2px 8px; font-size: 11px;"
                @click="togglePsuConnection"
              >
                {{ serialManager.psu.state.connected ? '断开连接' : '连接电源' }}
              </button>
            </div>
          </div>

          <!-- Parameter Controls Grid (Voltage & Current Limit) -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px;">
            <!-- Set Voltage Box -->
            <div style="background: #121519; padding: 8px 10px; border-radius: 4px; border: 1px solid #2d3748;">
              <div style="font-size: 11px; color: #a0aec0; margin-bottom: 4px; display: flex; justify-content: space-between;">
                <span>设定输出电压 (V):</span>
                <span style="color: #ecc94b; font-family: monospace;">0 ~ 60V</span>
              </div>
              <div style="display: flex; gap: 6px;">
                <input
                  type="number"
                  v-model.number="psuSetV"
                  data-field="psuSetV"
                  step="0.5"
                  min="0"
                  max="60"
                  style="flex: 1; font-weight: bold; color: #ecc94b; font-size: 14px;"
                />
                <button class="btn btn-primary" style="padding: 2px 8px; font-size: 11px;" @click="applyPsuVoltage">
                  应用电压
                </button>
              </div>
            </div>

            <!-- Set Current Limit Box -->
            <div style="background: #121519; padding: 8px 10px; border-radius: 4px; border: 1px solid #2d3748;">
              <div style="font-size: 11px; color: #a0aec0; margin-bottom: 4px; display: flex; justify-content: space-between;">
                <span>设定最大限流 (A):</span>
                <span style="color: #48bb78; font-family: monospace;">0 ~ 10A</span>
              </div>
              <div style="display: flex; gap: 6px;">
                <input
                  type="number"
                  v-model.number="psuSetI"
                  data-field="psuSetI"
                  step="0.1"
                  min="0.1"
                  max="10"
                  style="flex: 1; font-weight: bold; color: #48bb78; font-size: 14px;"
                />
                <button class="btn btn-primary" style="padding: 2px 8px; font-size: 11px;" @click="applyPsuCurrentLimit">
                  应用限流
                </button>
              </div>
            </div>
          </div>

          <!-- Output ON / OFF Buttons -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px;">
            <button
              class="btn"
              :style="{
                backgroundColor: isPsuOutputOn ? '#1c4532' : '#22543d',
                borderColor: '#38a169',
                color: '#68d391',
                boxShadow: isPsuOutputOn ? '0 0 10px rgba(72, 187, 120, 0.4)' : 'none'
              }"
              style="padding: 8px; font-weight: bold; font-size: 13px;"
              @click="setPsuOutput(true)"
            >
              ▶ 开始输出 (Output ON)
            </button>
            <button
              class="btn"
              :style="{
                backgroundColor: !isPsuOutputOn ? '#742a2a' : '#9b2c2c',
                borderColor: '#e53e3e',
                color: '#feb2b2'
              }"
              style="padding: 8px; font-weight: bold; font-size: 13px;"
              @click="setPsuOutput(false)"
            >
              ⏹ 停止输出 (Output OFF)
            </button>
          </div>

          <!-- State Indicator Badge -->
          <div style="text-align: center; margin-bottom: 12px; font-size: 12px; font-weight: bold;">
            <span v-if="isPsuOutputOn" style="color: #68d391; background: #1c4532; padding: 3px 12px; border-radius: 12px; border: 1px solid #276749;">
              ● 电源通道输出已开启 (ON)
            </span>
            <span v-else style="color: #fc8181; background: #742a2a; padding: 3px 12px; border-radius: 12px; border: 1px solid #9b2c2c;">
              ○ 电源通道输出已关闭 (OFF)
            </span>
          </div>

          <!-- Real-time Telemetry Dashboard Cards -->
          <div style="margin-bottom: 12px;">
            <div style="font-size: 11px; color: #a0aec0; margin-bottom: 6px; font-weight: bold;">
              📊 电源实测遥测数据 (Telemetry):
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; font-family: 'Consolas', monospace;">
              <div style="background-color: #121519; padding: 6px 8px; border-radius: 4px; border-left: 3px solid #ecc94b;">
                <div style="color: #a0aec0; font-size: 10px;">实测电压 Vin:</div>
                <div style="color: #ecc94b; font-weight: bold; font-size: 16px;">{{ psuTelemetry.vin.toFixed(3) }} <span style="font-size: 10px;">V</span></div>
              </div>

              <div style="background-color: #121519; padding: 6px 8px; border-radius: 4px; border-left: 3px solid #48bb78;">
                <div style="color: #a0aec0; font-size: 10px;">实测电流 Iin:</div>
                <div style="color: #48bb78; font-weight: bold; font-size: 16px;">{{ psuTelemetry.iin.toFixed(3) }} <span style="font-size: 10px;">A</span></div>
              </div>

              <div style="background-color: #121519; padding: 6px 8px; border-radius: 4px; border-left: 3px solid #ed8936;">
                <div style="color: #a0aec0; font-size: 10px;">实测功率 Pin:</div>
                <div style="color: #ed8936; font-weight: bold; font-size: 16px;">{{ psuTelemetry.pin.toFixed(3) }} <span style="font-size: 10px;">W</span></div>
              </div>
            </div>
          </div>

          <!-- Raw SCPI Terminal Row -->
          <div style="background: #121519; padding: 8px 10px; border-radius: 4px; border: 1px solid #2d3748;">
            <div style="font-size: 10.5px; color: #718096; margin-bottom: 4px;">发送电源原始 SCPI 指令 (如 :MEAS:ALL? 或 *IDN?):</div>
            <div style="display: flex; gap: 6px;">
              <input
                type="text"
                v-model="psuScpiCmd"
                placeholder=":APPL CH1,12,2 或 :OUTP ON"
                style="flex: 1; font-family: 'Consolas', monospace; font-size: 11px;"
                @keyup.enter="sendPsuSCPI"
              />
              <button class="btn" style="padding: 2px 10px; font-size: 11px;" @click="sendPsuSCPI">
                发送指令
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- ====== RIGHT COLUMN: Electronic Load (UNI-T UTL8500) ====== -->
      <div style="flex: 1; display: flex; flex-direction: column; background-color: #15191e; overflow-y: auto; padding: 14px;">
        <div class="group-box" style="margin-top: 0; border-color: #c05621;">
          <div class="group-title" style="color: #ed8936;">
            <span>🔋 可编程电子负载单体测试 (UNI-T UTL8500 系列)</span>
          </div>

          <!-- Port Connection Row -->
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; background: #121519; padding: 6px 10px; border-radius: 4px; border: 1px solid #2d3748;">
            <div style="display: flex; align-items: center; gap: 8px; font-size: 11px;">
              <span style="width: 8px; height: 8px; border-radius: 50%;" :style="{ backgroundColor: serialManager.load.state.connected ? '#48bb78' : '#e53e3e' }"></span>
              <span style="color: #cbd5e1; font-weight: bold;">负载状态:</span>
              <span style="font-family: monospace; color: #ed8936;">{{ serialManager.load.state.portName }}</span>
            </div>

            <div style="display: flex; align-items: center; gap: 6px;">
              <button
                class="btn"
                :style="{ backgroundColor: serialManager.load.state.connected ? '#742a2a' : '#234e52', color: 'white' }"
                style="padding: 2px 8px; font-size: 11px;"
                @click="toggleLoadConnection"
              >
                {{ serialManager.load.state.connected ? '断开连接' : '连接负载' }}
              </button>
            </div>
          </div>

          <!-- Mode & Dynamic Parameter Controls -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px;">
            <!-- Mode Box -->
            <div style="background: #121519; padding: 8px 10px; border-radius: 4px; border: 1px solid #2d3748;">
              <div style="font-size: 11px; color: #a0aec0; margin-bottom: 4px;">
                工作模式选择:
              </div>
              <div style="display: flex; gap: 6px;">
                <select v-model="loadMode" data-field="loadMode" style="flex: 1; font-weight: bold; color: #63b3ed;" @change="handleLoadModeChange">
                  <option value="CC">CC (定电流模式)</option>
                  <option value="CV">CV (定电压模式)</option>
                  <option value="CW">CP/CW (定功率模式)</option>
                  <option value="CR">CR (定电阻模式)</option>
                </select>
                <button class="btn btn-primary" style="padding: 2px 8px; font-size: 11px;" @click="applyLoadSettings">
                  应用模式
                </button>
              </div>
            </div>

            <!-- Set Value Box -->
            <div style="background: #121519; padding: 8px 10px; border-radius: 4px; border: 1px solid #2d3748;">
              <div style="font-size: 11px; color: #a0aec0; margin-bottom: 4px; display: flex; justify-content: space-between;">
                <span>设定值 ({{ loadParamUnit }}):</span>
                <span style="color: #ed8936; font-family: monospace;">{{ loadParamLabel }}</span>
              </div>
              <div style="display: flex; gap: 6px;">
                <input
                  type="number"
                  v-model.number="loadParamVal"
                  data-field="loadParamVal"
                  :step="loadParamStep"
                  min="0"
                  style="flex: 1; font-weight: bold; color: #ed8936; font-size: 14px;"
                />
                <button class="btn btn-primary" style="padding: 2px 8px; font-size: 11px;" @click="applyLoadSettings">
                  应用设定
                </button>
              </div>
            </div>
          </div>

          <!-- Special Load Function Buttons: Short Circuit Test & Clear Protection -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px;">
            <button
              class="btn"
              :style="{
                backgroundColor: isLoadShortOn ? '#744210' : '#2d3748',
                borderColor: '#d69e2e',
                color: '#fbd38d'
              }"
              style="padding: 6px; font-size: 11.5px; font-weight: bold;"
              @click="toggleLoadShort"
            >
              ⚡ {{ isLoadShortOn ? '退出短路测试 (Short OFF)' : '短路测试 (Short ON)' }}
            </button>

            <button
              class="btn"
              style="background-color: #2d3748; color: #90cdf4; border-color: #3182ce; padding: 6px; font-size: 11.5px; font-weight: bold;"
              @click="clearLoadProtection"
            >
              🛡️ 清除保护状态 (Clear Prot)
            </button>
          </div>

          <!-- Load Input ON / OFF Buttons -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px;">
            <button
              class="btn"
              :style="{
                backgroundColor: isLoadInputOn ? '#1c4532' : '#22543d',
                borderColor: '#38a169',
                color: '#68d391',
                boxShadow: isLoadInputOn ? '0 0 10px rgba(72, 187, 120, 0.4)' : 'none'
              }"
              style="padding: 8px; font-weight: bold; font-size: 13px;"
              @click="setLoadInput(true)"
            >
              ▶ 开始带载 (Input ON)
            </button>
            <button
              class="btn"
              :style="{
                backgroundColor: !isLoadInputOn ? '#742a2a' : '#9b2c2c',
                borderColor: '#e53e3e',
                color: '#feb2b2'
              }"
              style="padding: 8px; font-weight: bold; font-size: 13px;"
              @click="setLoadInput(false)"
            >
              ⏹ 停止带载 (Input OFF)
            </button>
          </div>

          <!-- State Indicator Badge -->
          <div style="text-align: center; margin-bottom: 12px; font-size: 12px; font-weight: bold;">
            <span v-if="isLoadInputOn" style="color: #68d391; background: #1c4532; padding: 3px 12px; border-radius: 12px; border: 1px solid #276749;">
              ● 电子负载正在拉载 (ON)
            </span>
            <span v-else style="color: #fc8181; background: #742a2a; padding: 3px 12px; border-radius: 12px; border: 1px solid #9b2c2c;">
              ○ 电子负载带载已关闭 (OFF)
            </span>
          </div>

          <!-- Real-time Telemetry Dashboard Cards -->
          <div style="margin-bottom: 12px;">
            <div style="font-size: 11px; color: #a0aec0; margin-bottom: 6px; font-weight: bold;">
              📊 负载实测遥测数据 (Telemetry):
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 8px; font-family: 'Consolas', monospace;">
              <div style="background-color: #121519; padding: 6px 8px; border-radius: 4px; border-left: 3px solid #63b3ed;">
                <div style="color: #a0aec0; font-size: 10px;">实测电压 Vout:</div>
                <div style="color: #63b3ed; font-weight: bold; font-size: 15px;">{{ loadTelemetry.vout.toFixed(3) }} <span style="font-size: 9px;">V</span></div>
              </div>

              <div style="background-color: #121519; padding: 6px 8px; border-radius: 4px; border-left: 3px solid #ed8936;">
                <div style="color: #a0aec0; font-size: 10px;">实测电流 Iout:</div>
                <div style="color: #ed8936; font-weight: bold; font-size: 15px;">{{ loadTelemetry.iout.toFixed(3) }} <span style="font-size: 9px;">A</span></div>
              </div>

              <div style="background-color: #121519; padding: 6px 8px; border-radius: 4px; border-left: 3px solid #f56565;">
                <div style="color: #a0aec0; font-size: 10px;">实测功率 Pout:</div>
                <div style="color: #f56565; font-weight: bold; font-size: 15px;">{{ loadTelemetry.pout.toFixed(3) }} <span style="font-size: 9px;">W</span></div>
              </div>

              <div style="background-color: #121519; padding: 6px 8px; border-radius: 4px; border-left: 3px solid #9f7aea;">
                <div style="color: #a0aec0; font-size: 10px;">等效电阻 R:</div>
                <div style="color: #b794f4; font-weight: bold; font-size: 15px;">{{ loadTelemetry.r.toFixed(2) }} <span style="font-size: 9px;">Ω</span></div>
              </div>
            </div>
          </div>

          <!-- Raw SCPI Terminal Row -->
          <div style="background: #121519; padding: 8px 10px; border-radius: 4px; border: 1px solid #2d3748;">
            <div style="font-size: 10.5px; color: #718096; margin-bottom: 4px;">发送负载原始 SCPI 指令 (如 :MEAS:VOLT? 或 :SOUR:CURR 2.0):</div>
            <div style="display: flex; gap: 6px;">
              <input
                type="text"
                v-model="loadScpiCmd"
                placeholder=":SOUR:FUNC CC 或 :SOUR:INP ON"
                style="flex: 1; font-family: 'Consolas', monospace; font-size: 11px;"
                @keyup.enter="sendLoadSCPI"
              />
              <button class="btn" style="padding: 2px 10px; font-size: 11px;" @click="sendLoadSCPI">
                发送指令
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 3. Bottom SCPI Communication & Interaction Log Terminal -->
    <div style="height: 180px; background-color: #0d1117; border-top: 1px solid #2d3748; display: flex; flex-direction: column;">
      <div style="height: 28px; background-color: #161b22; border-bottom: 1px solid #30363d; display: flex; align-items: center; justify-content: space-between; padding: 0 12px; font-size: 11px; font-weight: bold;">
        <span style="color: #7ee787; display: flex; align-items: center; gap: 6px;">
          <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="4 17 10 11 4 5"></polyline>
            <line x1="12" y1="19" x2="20" y2="19"></line>
          </svg>
          底盘通信终端交互日志 (Serial & SCPI Terminal Log)
        </span>
        <button class="btn" style="padding: 1px 6px; font-size: 10px;" @click="logs = []">
          清空日志
        </button>
      </div>

      <div ref="logContainerRef" style="flex: 1; overflow-y: auto; padding: 8px 12px; font-family: 'Consolas', monospace; font-size: 11px; line-height: 1.5; color: #7ee787;">
        <div v-for="(entry, idx) in logs" :key="idx" :style="{ color: entry.color }">
          <span style="color: #6e7681;">[{{ entry.time }}]</span> {{ entry.text }}
        </div>
        <div v-if="logs.length === 0" style="color: #484f58; font-style: italic;">
          等待指令输入与硬件交互...
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue';
import { WebSerialManager } from '../serial/WebSerialManager';

const serialManager = WebSerialManager.getInstance();

const isSimulationMode = ref(serialManager.psu.isVirtual);

// PSU state
const psuSetV = ref(5.0);
const psuSetI = ref(2.0);
const isPsuOutputOn = ref(false);
const psuScpiCmd = ref('');
const psuTelemetry = reactive({
  vin: 0,
  iin: 0,
  pin: 0,
});

// Load state
const loadMode = ref<'CC' | 'CV' | 'CW' | 'CR'>('CC');
const loadParamVal = ref(1.0);
const isLoadInputOn = ref(false);
const isLoadShortOn = ref(false);
const loadScpiCmd = ref('');
const loadTelemetry = reactive({
  vout: 0,
  iout: 0,
  pout: 0,
  r: 0,
});

// Logs
interface LogEntry {
  time: string;
  text: string;
  color: string;
}
const logs = ref<LogEntry[]>([]);
const logContainerRef = ref<HTMLDivElement | null>(null);

function addLog(text: string, color: string = '#7ee787') {
  const time = new Date().toLocaleTimeString();
  logs.value.push({ time, text, color });
  if (logs.value.length > 300) logs.value.shift();

  setTimeout(() => {
    if (logContainerRef.value) {
      logContainerRef.value.scrollTop = logContainerRef.value.scrollHeight;
    }
  }, 10);
}

// Unit and Step Adaptations for Load Modes
const loadParamUnit = computed(() => {
  switch (loadMode.value) {
    case 'CC': return 'A';
    case 'CV': return 'V';
    case 'CW': return 'W';
    case 'CR': return 'Ω';
  }
});

const loadParamLabel = computed(() => {
  switch (loadMode.value) {
    case 'CC': return '0 ~ 30A (步进 0.1A)';
    case 'CV': return '0 ~ 60V (步进 0.5V)';
    case 'CW': return '0 ~ 150W (步进 1W)';
    case 'CR': return '0.1 ~ 1000Ω (步进 1Ω)';
  }
});

const loadParamStep = computed(() => {
  switch (loadMode.value) {
    case 'CC': return 0.1;
    case 'CV': return 0.5;
    case 'CW': return 1.0;
    case 'CR': return 0.5;
  }
});

function handleLoadModeChange() {
  switch (loadMode.value) {
    case 'CC': loadParamVal.value = 1.0; break;
    case 'CV': loadParamVal.value = 5.0; break;
    case 'CW': loadParamVal.value = 10.0; break;
    case 'CR': loadParamVal.value = 5.0; break;
  }
}

// PSU actions
async function applyPsuVoltage() {
  try {
    await serialManager.setPsuVoltageOnly(psuSetV.value);
    addLog(`[PSU] 设置电压指令成功 (:APPLy CH1,${psuSetV.value.toFixed(3)},${psuSetI.value.toFixed(3)}) -> ${psuSetV.value.toFixed(3)} V`, '#ecc94b');
  } catch (err: any) {
    addLog(`[PSU 错误] 设置电压失败: ${err?.message || err}`, '#f85149');
  }
}

async function applyPsuCurrentLimit() {
  try {
    await serialManager.setPsuCurrentLimitOnly(psuSetI.value);
    addLog(`[PSU] 设置限流指令成功 (:APPLy CH1,${psuSetV.value.toFixed(3)},${psuSetI.value.toFixed(3)}) -> ${psuSetI.value.toFixed(3)} A`, '#48bb78');
  } catch (err: any) {
    addLog(`[PSU 错误] 设置限流失败: ${err?.message || err}`, '#f85149');
  }
}

async function setPsuOutput(on: boolean) {
  try {
    await serialManager.setPsuOutput(on, psuSetV.value, psuSetI.value);
    isPsuOutputOn.value = on;
    addLog(`[PSU] 电源输出开关指令已生效 -> ${on ? '开启 (ON)' : '关闭 (OFF)'}`, on ? '#3fb950' : '#f85149');
  } catch (err: any) {
    addLog(`[PSU 错误] 输出切换失败: ${err?.message || err}`, '#f85149');
  }
}

async function sendPsuSCPI() {
  const cmd = psuScpiCmd.value.trim();
  if (!cmd) return;
  addLog(`[PSU TX] >> ${cmd}`, '#58a6ff');
  try {
    const resp = await serialManager.sendPsuRawSCPI(cmd);
    addLog(`[PSU RX] << ${resp}`, '#7ee787');
  } catch (err: any) {
    addLog(`[PSU ERR] << ${err?.message || err}`, '#f85149');
  }
  psuScpiCmd.value = '';
}

async function togglePsuConnection() {
  if (serialManager.psu.state.connected) {
    await serialManager.psu.disconnect();
    isPsuOutputOn.value = false;
    addLog('[PSU] 电源连接已断开', '#a0aec0');
  } else {
    try {
      if (isSimulationMode.value) {
        serialManager.psu.connectVirtual();
        addLog('[PSU] 虚拟仿真电源驱动已连接', '#3fb950');
      } else {
        await serialManager.psu.connectPhysical(9600);
        addLog('[PSU] 物理电源串口连接成功', '#3fb950');
        const psuStat = await serialManager.queryPsuStatus();
        isPsuOutputOn.value = psuStat.outputOn;
        if (psuStat.setVoltage > 0) psuSetV.value = psuStat.setVoltage;
        if (psuStat.setCurrentLimit > 0) psuSetI.value = psuStat.setCurrentLimit;
      }
    } catch (e: any) {
      addLog(`[PSU 错误] 连接失败: ${e?.message || e}`, '#f85149');
    }
  }
}

// Load actions
async function applyLoadSettings() {
  try {
    await serialManager.setLoadModeAndValue(loadMode.value, loadParamVal.value);
    addLog(`[LOAD] 应用设定成功: 模式=${loadMode.value}, 目标值=${loadParamVal.value} ${loadParamUnit.value}`, '#ed8936');
  } catch (err: any) {
    addLog(`[LOAD 错误] 应用负载设定失败: ${err?.message || err}`, '#f85149');
  }
}

async function setLoadInput(on: boolean) {
  try {
    await serialManager.setLoadModeAndValue(loadMode.value, loadParamVal.value);
    await serialManager.setLoadInputState(on);
    isLoadInputOn.value = on;
    addLog(`[LOAD] 负载带载开关已生效 -> ${on ? '带载中 (ON)' : '停止带载 (OFF)'}`, on ? '#3fb950' : '#f85149');
  } catch (err: any) {
    addLog(`[LOAD 错误] 带载开关失败: ${err?.message || err}`, '#f85149');
  }
}

async function toggleLoadShort() {
  isLoadShortOn.value = !isLoadShortOn.value;
  try {
    await serialManager.setLoadShortState(isLoadShortOn.value);
    addLog(`[LOAD] 短路测试状态切换 -> ${isLoadShortOn.value ? '短路开启 (ON)' : '短路关闭 (OFF)'}`, '#e3b341');
  } catch (e: any) {
    addLog(`[LOAD 错误] 短路测试指令失败: ${e?.message || e}`, '#f85149');
  }
}

async function clearLoadProtection() {
  try {
    await serialManager.clearLoadProtectionState();
    addLog('[LOAD] 保护状态已复位 (:INP 0)', '#58a6ff');
  } catch (e: any) {
    addLog(`[LOAD 错误] 清除保护失败: ${e?.message || e}`, '#f85149');
  }
}

async function sendLoadSCPI() {
  const cmd = loadScpiCmd.value.trim();
  if (!cmd) return;
  addLog(`[LOAD TX] >> ${cmd}`, '#f0883e');
  try {
    const resp = await serialManager.sendLoadRawSCPI(cmd);
    addLog(`[LOAD RX] << ${resp}`, '#7ee787');
  } catch (err: any) {
    addLog(`[LOAD ERR] << ${err?.message || err}`, '#f85149');
  }
  loadScpiCmd.value = '';
}

async function toggleLoadConnection() {
  if (serialManager.load.state.connected) {
    await serialManager.load.disconnect();
    isLoadInputOn.value = false;
    addLog('[LOAD] 电子负载连接已断开', '#a0aec0');
  } else {
    try {
      if (isSimulationMode.value) {
        serialManager.load.connectVirtual();
        addLog('[LOAD] 虚拟仿真电子负载驱动已连接', '#3fb950');
      } else {
        await serialManager.load.connectPhysical(9600);
        addLog('[LOAD] 物理电子负载串口连接成功', '#3fb950');
        const loadStat = await serialManager.queryLoadStatus();
        isLoadInputOn.value = loadStat.inputOn;
        loadMode.value = loadStat.mode;
        if (loadStat.targetVal > 0) loadParamVal.value = loadStat.targetVal;
      }
    } catch (e: any) {
      addLog(`[LOAD 错误] 连接失败: ${e?.message || e}`, '#f85149');
    }
  }
}

// Global actions
function toggleSimulationMode() {
  if (isSimulationMode.value) {
    serialManager.autoConnectVirtual();
    addLog('🧪 已切换至虚拟仿真演示模式', '#3fb950');
  } else {
    serialManager.emergencyStopAll();
    serialManager.psu.disconnect();
    serialManager.load.disconnect();
    addLog('🔌 已切换至物理真实串口模式，请点击连接打开串口', '#58a6ff');
  }
}

async function handleEmergencyStop() {
  await serialManager.emergencyStopAll();
  isPsuOutputOn.value = false;
  isLoadInputOn.value = false;
  addLog('🛑 紧急停止已触发: 电源输出已关闭，负载已停止带载', '#f85149');
}

// Telemetry & Hardware State Polling Loop
let pollTimer: number | null = null;
let isPolling = false;
let singleViewTick = 0;

async function pollTelemetry() {
  if (isPolling) return;
  isPolling = true;
  try {
    const meas = await serialManager.measureAsync();
    psuTelemetry.vin = meas.vin;
    psuTelemetry.iin = meas.iin;
    psuTelemetry.pin = meas.pin;

    loadTelemetry.vout = meas.vout;
    loadTelemetry.iout = meas.iout;
    loadTelemetry.pout = meas.pout;
    loadTelemetry.r = meas.iout > 0.005 ? meas.vout / meas.iout : 0;

    // Gently refresh hardware states (~1.4s interval)
    singleViewTick++;
    if (singleViewTick % 4 === 0) {
      if (serialManager.psu.state.connected) {
        const psuStat = await serialManager.queryPsuStatus();
        isPsuOutputOn.value = psuStat.outputOn;
        const activeEl = document.activeElement;
        if (activeEl?.getAttribute('data-field') !== 'psuSetV' && psuStat.setVoltage > 0) {
          psuSetV.value = psuStat.setVoltage;
        }
        if (activeEl?.getAttribute('data-field') !== 'psuSetI' && psuStat.setCurrentLimit > 0) {
          psuSetI.value = psuStat.setCurrentLimit;
        }
      }

      if (serialManager.load.state.connected) {
        const loadStat = await serialManager.queryLoadStatus();
        isLoadInputOn.value = loadStat.inputOn;
        isLoadShortOn.value = loadStat.isShort;
        const activeEl = document.activeElement;
        if (activeEl?.getAttribute('data-field') !== 'loadMode') {
          loadMode.value = loadStat.mode;
        }
        if (activeEl?.getAttribute('data-field') !== 'loadParamVal' && loadStat.targetVal > 0) {
          loadParamVal.value = loadStat.targetVal;
        }
      }
    }
  } catch (e) {
    // Suppress polling glitches
  } finally {
    isPolling = false;
  }
}

function handleBeforeUnload() {
  serialManager.emergencyStopAll().catch(() => {});
}

onMounted(() => {
  addLog('单仪器测试工作台已启动就绪。可独立调试电源电压/限流/开关与电子负载四模拉载。', '#58a6ff');
  pollTimer = window.setInterval(pollTelemetry, 350);
  window.addEventListener('beforeunload', handleBeforeUnload);
});

onUnmounted(() => {
  if (pollTimer) clearInterval(pollTimer);
  window.removeEventListener('beforeunload', handleBeforeUnload);
});
</script>
