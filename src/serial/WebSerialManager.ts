import { VirtualPowerSupply, VirtualElectronicLoad } from './VirtualDevices';
import { DP700Protocol, UTL8500Protocol } from './SCPIProtocol';
import { DeviceConnectionState, DeviceType } from '../types/test';

// Web Serial types declaration
declare global {
  interface Navigator {
    serial?: {
      requestPort(options?: { filters?: Array<{ usbVendorId?: number; usbProductId?: number }> }): Promise<SerialPort>;
      getPorts(): Promise<SerialPort[]>;
    };
  }

  interface SerialPort {
    open(options: { baudRate: number; dataBits?: number; stopBits?: number; parity?: 'none' | 'even' | 'odd' }): Promise<void>;
    close(): Promise<void>;
    readable: ReadableStream<Uint8Array> | null;
    writable: WritableStream<Uint8Array> | null;
    getInfo(): { usbVendorId?: number; usbProductId?: number };
  }
}

export type DeviceLostHandler = (deviceType: DeviceType, deviceName: string, reason: string) => void;

export interface PsuStatus {
  outputOn: boolean;
  setVoltage: number;
  setCurrentLimit: number;
}

export interface LoadStatus {
  inputOn: boolean;
  mode: 'CC' | 'CW' | 'CV' | 'CR';
  targetVal: number;
  isShort: boolean;
}

export interface SystemTelemetry {
  vin: number;
  iin: number;
  pin: number;
  vout: number;
  iout: number;
  pout: number;
  efficiency: number;
}

export class DeviceDriver {
  public type: DeviceType;
  public isVirtual: boolean = true;
  private port: SerialPort | null = null;
  private reader: ReadableStreamDefaultReader<string> | null = null;
  private writer: WritableStreamDefaultWriter<string> | null = null;
  private encoder: TextEncoderStream | null = null;
  private decoder: TextDecoderStream | null = null;
  private readBuffer: string = '';
  private isDisconnecting: boolean = false;
  private onLostCallback: DeviceLostHandler | null = null;
  private disconnectListener: ((event: any) => void) | null = null;

  // Mutex queue to serialize physical serial communication
  private commandQueue: Promise<any> = Promise.resolve();

  // Virtual counterpart
  public virtualPsu: VirtualPowerSupply = new VirtualPowerSupply();
  public virtualLoad: VirtualElectronicLoad = new VirtualElectronicLoad();

  public state: DeviceConnectionState = {
    connected: false,
    portName: '未连接',
    isVirtual: true,
    model: '',
    baudRate: 9600,
  };

  constructor(type: DeviceType) {
    this.type = type;
    this.state.model = type === 'PSU' ? 'RIGOL DP700' : 'UNI-T UTL8500';
  }

  public setOnDeviceLost(callback: DeviceLostHandler) {
    this.onLostCallback = callback;
  }

  public handleDeviceLost(reason: string) {
    if (!this.state.connected || this.isDisconnecting) return;
    this.state.connected = false;
    this.state.portName = '已丢失 (断开连接)';
    console.error(`[WebSerial 串口丢失] 设备: ${this.type} (${this.state.model}), 原因: ${reason}`);
    if (this.onLostCallback) {
      this.onLostCallback(this.type, this.state.model, reason);
    }
  }

  public checkAlive(): { alive: boolean; reason?: string } {
    if (!this.state.connected) {
      return { alive: false, reason: '设备连接已断开' };
    }
    if (this.isVirtual) {
      const vAlive = this.type === 'PSU' ? this.virtualPsu.isConnected() : this.virtualLoad.isConnected();
      if (!vAlive) {
        return { alive: false, reason: '虚拟仿真设备已离线' };
      }
    }
    return { alive: true };
  }

  public isWebSerialSupported(): boolean {
    return typeof navigator !== 'undefined' && 'serial' in navigator;
  }

  /**
   * Connect using browser Web Serial API
   */
  public async connectPhysical(baudRate: number = 9600): Promise<boolean> {
    if (!this.isWebSerialSupported()) {
      throw new Error('当前浏览器不支持 Web Serial API，请使用 Chrome / Edge 浏览器，或使用内置仿真模式。');
    }

    try {
      this.port = await navigator.serial!.requestPort();
      await this.port.open({ baudRate });

      this.isDisconnecting = false;

      // Listen for physical device unplug via Web Serial API
      if ('serial' in navigator && (navigator.serial as any).addEventListener) {
        this.disconnectListener = (event: any) => {
          if (event.target === this.port) {
            this.handleDeviceLost('物理 USB 串口硬件已被拔出或连接中断');
          }
        };
        (navigator.serial as any).addEventListener('disconnect', this.disconnectListener);
      }

      this.encoder = new TextEncoderStream();
      (this.encoder.readable as any).pipeTo(this.port.writable as any);
      this.writer = this.encoder.writable.getWriter();

      this.decoder = new TextDecoderStream();
      (this.port.readable as any).pipeTo(this.decoder.writable as any);
      this.reader = this.decoder.readable.getReader();

      this.isVirtual = false;
      this.state.connected = true;
      this.state.isVirtual = false;
      this.state.portName = `COM (USB-Serial ${baudRate}bps)`;
      this.state.baudRate = baudRate;

      this.startContinuousRead();
      return true;
    } catch (err: any) {
      console.error(`Failed to connect physical ${this.type}:`, err);
      this.disconnect();
      throw err;
    }
  }

  /**
   * Connect to built-in simulation driver
   */
  public connectVirtual(): void {
    this.isVirtual = true;
    this.isDisconnecting = false;
    this.state.connected = true;
    this.state.isVirtual = true;
    this.state.portName = this.type === 'PSU' ? 'VIRTUAL_DP700 (仿真驱动)' : 'VIRTUAL_UTL8500 (仿真驱动)';
    if (this.type === 'PSU') {
      this.virtualPsu.setConnected(true);
    } else {
      this.virtualLoad.setConnected(true);
    }
  }

  public async disconnect(): Promise<void> {
    this.isDisconnecting = true;
    try {
      if (this.disconnectListener && 'serial' in navigator && (navigator.serial as any).removeEventListener) {
        (navigator.serial as any).removeEventListener('disconnect', this.disconnectListener);
        this.disconnectListener = null;
      }
      if (this.reader) {
        await this.reader.cancel().catch(() => {});
        this.reader = null;
      }
      if (this.writer) {
        await this.writer.close().catch(() => {});
        this.writer = null;
      }
      if (this.port) {
        await this.port.close().catch(() => {});
        this.port = null;
      }
    } catch (e) {
      console.warn('Disconnect error:', e);
    } finally {
      this.isDisconnecting = false;
      this.state.connected = false;
      this.state.portName = '未连接';
      if (this.type === 'PSU') {
        this.virtualPsu.setConnected(false);
      } else {
        this.virtualLoad.setConnected(false);
      }
    }
  }

  /**
   * Serialized physical command write
   */
  public async write(cmd: string): Promise<void> {
    if (this.isVirtual) {
      return;
    }
    if (!this.writer || !this.state.connected) {
      this.handleDeviceLost('串口未连接或已丢失写入句柄');
      throw new Error('串口未连接或写入句柄丢失');
    }

    return new Promise<void>((resolve, reject) => {
      this.commandQueue = this.commandQueue.then(async () => {
        try {
          const formatted = cmd.endsWith('\n') ? cmd : cmd + '\n';
          await this.writer!.write(formatted);
          // Safety guard time between physical serial transmissions
          await new Promise(r => setTimeout(r, 15));
          resolve();
        } catch (err: any) {
          this.handleDeviceLost(`向串口发送指令失败 (设备可能已断开): ${err?.message || err}`);
          reject(err);
        }
      });
    });
  }

  /**
   * Serialized physical SCPI Query-Response
   */
  public async query(cmd: string, timeoutMs: number = 300): Promise<string> {
    if (this.isVirtual) {
      return this.handleVirtualQuery(cmd);
    }

    if (!this.state.connected || !this.writer) {
      throw new Error(`[${this.type}] 串口未连接，无法执行查询指令`);
    }

    return new Promise<string>((resolve, reject) => {
      this.commandQueue = this.commandQueue.then(async () => {
        try {
          const res = await this.executePhysicalQuery(cmd, timeoutMs);
          resolve(res);
        } catch (err) {
          reject(err);
        }
      });
    });
  }

  private async executePhysicalQuery(cmd: string, timeoutMs: number): Promise<string> {
    if (!this.writer || !this.state.connected) {
      throw new Error('串口未连接或已丢失写入句柄');
    }

    const formattedCmd = cmd.trim().endsWith('\n') ? cmd.trim() + '\n' : cmd.trim() + '\n';
    this.readBuffer = '';

    try {
      await this.writer.write(formattedCmd);
    } catch (err: any) {
      this.handleDeviceLost(`向串口发送指令失败: ${err?.message || err}`);
      throw err;
    }

    const startTime = performance.now();
    const cleanCmd = cmd.trim().toUpperCase();

    while (performance.now() - startTime < timeoutMs) {
      const nlMatch = this.readBuffer.search(/[\r\n]/);
      if (nlMatch !== -1) {
        const rawLine = this.readBuffer.slice(0, nlMatch).trim();
        let nextIdx = nlMatch;
        while (nextIdx < this.readBuffer.length && (this.readBuffer[nextIdx] === '\r' || this.readBuffer[nextIdx] === '\n')) {
          nextIdx++;
        }
        this.readBuffer = this.readBuffer.slice(nextIdx);

        if (!rawLine) continue;
        const upperLine = rawLine.toUpperCase();
        if (upperLine === cleanCmd || upperLine === cleanCmd.replace(/^:/, '')) {
          continue;
        }
        // Small guard pause after receiving response to ensure instrument UART is clear
        await new Promise(r => setTimeout(r, 15));
        return rawLine;
      }
      await new Promise(r => setTimeout(r, 8));
    }

    const fallback = this.readBuffer.trim();
    this.readBuffer = '';
    return fallback;
  }

  private handleVirtualQuery(cmd: string): string {
    const c = cmd.trim().toUpperCase();
    if (this.type === 'PSU') {
      if (c.includes('*IDN?')) {
        return 'RIGOL TECHNOLOGIES,DP711,DP7A234500001,00.01.02';
      }
      if (c.includes(':MEAS:ALL') || c.includes(':MEASURE:ALL') || c.includes(':MEAS')) {
        const m = this.virtualPsu.measure();
        return `${m.vin.toFixed(3)},${m.iin.toFixed(3)},${m.pin.toFixed(3)}`;
      }
      if (c.includes(':APPL?')) {
        return `${this.virtualPsu.getTargetVoltage().toFixed(3)},${this.virtualPsu.getCurrentLimit().toFixed(3)}`;
      }
      if (c.includes(':OUTP?') || c.includes(':OUTPUT?')) {
        return this.virtualPsu.isOutputOn() ? 'ON' : 'OFF';
      }
      if (c.includes(':VOLT?') || c.includes(':VOLTAGE?')) {
        return this.virtualPsu.getTargetVoltage().toFixed(3);
      }
      if (c.includes(':CURR?') || c.includes(':CURRENT?')) {
        return this.virtualPsu.getCurrentLimit().toFixed(3);
      }
      return 'OK';
    } else {
      if (c.includes('*IDN?')) {
        return 'UNI-T,UTL8511,UTL8500A10098,V1.04';
      }
      if (c.includes(':MEAS:VOLT?')) {
        return this.virtualLoad.measure().vout.toFixed(3);
      }
      if (c.includes(':MEAS:CURR?')) {
        return this.virtualLoad.measure().iout.toFixed(3);
      }
      if (c.includes(':MEAS:POW?')) {
        return this.virtualLoad.measure().pout.toFixed(3);
      }
      if (c.includes(':MEAS:RES?')) {
        const m = this.virtualLoad.measure();
        const r = m.iout > 0.001 ? m.vout / m.iout : 9999;
        return r.toFixed(3);
      }
      if (c.includes(':INP:SHOR?')) {
        return this.virtualLoad.isShortOn() ? '1' : '0';
      }
      if (c.includes(':INP?') || c.includes(':INPUT?')) {
        return this.virtualLoad.isInputOn() ? '1' : '0';
      }
      if (c.includes(':MODE?') || c.includes(':FUNC?')) {
        const mode = this.virtualLoad.getMode();
        return mode === 'CC' ? 'CURR' : (mode === 'CV' ? 'VOLT' : (mode === 'CW' ? 'POW' : 'RES'));
      }
      if (c.includes(':CURR?')) {
        return this.virtualLoad.getTargetCurrent().toFixed(3);
      }
      if (c.includes(':VOLT?')) {
        return this.virtualLoad.getTargetVoltage().toFixed(3);
      }
      if (c.includes(':POW?')) {
        return this.virtualLoad.getTargetPower().toFixed(3);
      }
      if (c.includes(':RES?')) {
        return this.virtualLoad.getTargetResistance().toFixed(3);
      }
      return 'OK';
    }
  }

  private async startContinuousRead() {
    if (!this.reader) return;
    try {
      while (true) {
        const { value, done } = await this.reader.read();
        if (done) {
          if (this.state.connected && !this.isDisconnecting) {
            this.handleDeviceLost('串口数据读取流意外终止 (物理设备可能已断开)');
          }
          break;
        }
        if (value) {
          this.readBuffer += value;
        }
      }
    } catch (err: any) {
      if (this.state.connected && !this.isDisconnecting) {
        this.handleDeviceLost(`串口数据流读取异常: ${err?.message || err}`);
      }
    }
  }
}

/**
 * Singleton Hardware Coordinator
 */
export class WebSerialManager {
  private static instance: WebSerialManager;

  public psu: DeviceDriver = new DeviceDriver('PSU');
  public load: DeviceDriver = new DeviceDriver('LOAD');
  private onDeviceLostListener: DeviceLostHandler | null = null;

  // Cached telemetry and statuses for rapid/synchronous queries
  private cachedTelemetry: SystemTelemetry = {
    vin: 0,
    iin: 0,
    pin: 0,
    vout: 0,
    iout: 0,
    pout: 0,
    efficiency: 0,
  };

  public lastPsuStatus: PsuStatus = { outputOn: false, setVoltage: 0, setCurrentLimit: 0 };
  public lastLoadStatus: LoadStatus = { inputOn: false, mode: 'CC', targetVal: 0, isShort: false };

  private constructor() {
    // Cross-link virtual devices
    this.psu.virtualPsu.linkLoad(this.load.virtualLoad);
    this.load.virtualLoad.linkSupply(this.psu.virtualPsu);

    // Forward device lost events
    this.psu.setOnDeviceLost((type, name, reason) => {
      if (this.onDeviceLostListener) this.onDeviceLostListener(type, name, reason);
    });
    this.load.setOnDeviceLost((type, name, reason) => {
      if (this.onDeviceLostListener) this.onDeviceLostListener(type, name, reason);
    });
  }

  public setOnDeviceLost(callback: DeviceLostHandler) {
    this.onDeviceLostListener = callback;
  }

  public checkHealth(): { ok: boolean; failedDevice?: DeviceType; name?: string; reason?: string } {
    const psuCheck = this.psu.checkAlive();
    if (!psuCheck.alive) {
      this.psu.handleDeviceLost(psuCheck.reason || '电源健康检查失败');
      return { ok: false, failedDevice: 'PSU', name: this.psu.state.model, reason: psuCheck.reason };
    }
    const loadCheck = this.load.checkAlive();
    if (!loadCheck.alive) {
      this.load.handleDeviceLost(loadCheck.reason || '负载健康检查失败');
      return { ok: false, failedDevice: 'LOAD', name: this.load.state.model, reason: loadCheck.reason };
    }
    return { ok: true };
  }

  public static getInstance(): WebSerialManager {
    if (!WebSerialManager.instance) {
      WebSerialManager.instance = new WebSerialManager();
    }
    return WebSerialManager.instance;
  }

  public isBothConnected(): boolean {
    return this.psu.state.connected && this.load.state.connected;
  }

  public autoConnectVirtual() {
    if (!this.psu.state.connected) this.psu.connectVirtual();
    if (!this.load.state.connected) this.load.connectVirtual();
  }

  /**
   * Set PSU output state, voltage setpoint and current limit
   */
  public async setPsuOutput(on: boolean, voltage: number, limitCurrent: number) {
    if (this.psu.isVirtual) {
      this.psu.virtualPsu.setOutput(on);
      this.psu.virtualPsu.setVoltage(voltage);
      this.psu.virtualPsu.setCurrentLimit(limitCurrent);
    } else {
      await this.psu.write(DP700Protocol.setVoltageAndLimit(voltage, limitCurrent));
      await this.psu.write(DP700Protocol.setOutput(on));
    }
    this.lastPsuStatus.outputOn = on;
    this.lastPsuStatus.setVoltage = voltage;
    this.lastPsuStatus.setCurrentLimit = limitCurrent;
  }

  /**
   * Set Load input state, mode (CURR/VOLT/POW/RES) and target setpoint
   */
  public async setLoadInput(on: boolean, mode: 'CC' | 'CW' | 'CV' | 'CR', targetVal: number) {
    if (this.load.isVirtual) {
      this.load.virtualLoad.setInput(on);
      this.load.virtualLoad.setMode(mode);
      if (mode === 'CC') {
        this.load.virtualLoad.setCurrent(targetVal);
      } else if (mode === 'CW') {
        this.load.virtualLoad.setPower(targetVal);
      } else if (mode === 'CV') {
        this.load.virtualLoad.setVoltage(targetVal);
      } else if (mode === 'CR') {
        this.load.virtualLoad.setResistance(targetVal);
      }
    } else {
      await this.load.write(UTL8500Protocol.setMode(mode));
      if (mode === 'CC') {
        await this.load.write(UTL8500Protocol.setCurrent(targetVal));
      } else if (mode === 'CW') {
        await this.load.write(UTL8500Protocol.setPower(targetVal));
      } else if (mode === 'CV') {
        await this.load.write(UTL8500Protocol.setVoltage(targetVal));
      } else if (mode === 'CR') {
        await this.load.write(UTL8500Protocol.setResistance(targetVal));
      }
      await this.load.write(UTL8500Protocol.setInput(on));
    }
    this.lastLoadStatus.inputOn = on;
    this.lastLoadStatus.mode = mode;
    this.lastLoadStatus.targetVal = targetVal;
  }

  /**
   * Measure RIGOL DP700 parameters using standard :MEASure:ALL? CH1 query
   * Returns { vin, iin, pin }
   */
  public async measurePsu(): Promise<{ vin: number; iin: number; pin: number }> {
    if (this.psu.isVirtual) {
      return this.psu.virtualPsu.measure();
    }
    if (!this.psu.state.connected) {
      return { vin: 0, iin: 0, pin: 0 };
    }
    try {
      const resp = await this.psu.query(DP700Protocol.measureAll(), 300);
      const parts = resp.split(',').map(s => parseFloat(s.trim()));
      if (parts.length >= 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
        const vin = Math.max(0, parts[0]);
        const iin = Math.max(0, parts[1]);
        const pin = parts.length >= 3 && !isNaN(parts[2]) ? Math.max(0, parts[2]) : Math.round(vin * iin * 1000) / 1000;
        return { vin, iin, pin };
      }
    } catch (e) {
      console.warn('[PSU measureAll error]:', e);
    }
    return { vin: 0, iin: 0, pin: 0 };
  }

  /**
   * Measure UNI-T UTL8500 parameters using standard :MEAS:VOLT? and :MEAS:CURR? queries
   * Returns { vout, iout, pout }
   */
  public async measureLoad(supplyVin?: number): Promise<{ vout: number; iout: number; pout: number }> {
    if (this.load.isVirtual) {
      return this.load.virtualLoad.measure(supplyVin);
    }
    if (!this.load.state.connected) {
      return { vout: 0, iout: 0, pout: 0 };
    }
    try {
      const vStr = await this.load.query(UTL8500Protocol.measureVolt(), 250);
      const iStr = await this.load.query(UTL8500Protocol.measureCurr(), 250);
      const vout = Math.max(0, parseFloat(vStr) || 0);
      const iout = Math.max(0, parseFloat(iStr) || 0);
      const pout = Math.round(vout * iout * 1000) / 1000;
      return { vout, iout, pout };
    } catch (e) {
      console.warn('[LOAD measure error]:', e);
    }
    return { vout: 0, iout: 0, pout: 0 };
  }

  /**
   * Asynchronous telemetry sampling for both instruments
   */
  public async measureAsync(): Promise<SystemTelemetry> {
    const psuMeas = await this.measurePsu();
    const loadMeas = await this.measureLoad(psuMeas.vin);

    const eff = psuMeas.pin > 0.01 ? (loadMeas.pout / psuMeas.pin) * 100 : 0;

    const result: SystemTelemetry = {
      vin: psuMeas.vin,
      iin: psuMeas.iin,
      pin: psuMeas.pin,
      vout: loadMeas.vout,
      iout: loadMeas.iout,
      pout: loadMeas.pout,
      efficiency: Math.min(100, Math.max(0, Math.round(eff * 100) / 100)),
    };
    this.cachedTelemetry = result;
    return result;
  }

  /**
   * Synchronous telemetry readout (uses virtual simulation or latest cached physical telemetry)
   */
  public measure(): SystemTelemetry {
    if (this.psu.isVirtual && this.load.isVirtual) {
      const psuMeas = this.psu.virtualPsu.measure();
      const loadMeas = this.load.virtualLoad.measure(psuMeas.vin);
      const eff = psuMeas.pin > 0.01 ? (loadMeas.pout / psuMeas.pin) * 100 : 0;
      return {
        vin: psuMeas.vin,
        iin: psuMeas.iin,
        pin: psuMeas.pin,
        vout: loadMeas.vout,
        iout: loadMeas.iout,
        pout: loadMeas.pout,
        efficiency: Math.min(100, Math.max(0, Math.round(eff * 100) / 100)),
      };
    }
    return this.cachedTelemetry;
  }

  /**
   * Query Power Supply State (Output ON/OFF, Voltage setpoint, Current limit)
   * Uses RIGOL DP700 standard commands: :OUTPut? CH1 and :APPLy? CH1
   */
  public async queryPsuStatus(): Promise<PsuStatus> {
    if (this.psu.isVirtual) {
      const s: PsuStatus = {
        outputOn: this.psu.virtualPsu.isOutputOn(),
        setVoltage: this.psu.virtualPsu.getTargetVoltage(),
        setCurrentLimit: this.psu.virtualPsu.getCurrentLimit(),
      };
      this.lastPsuStatus = s;
      return s;
    }
    if (!this.psu.state.connected) {
      return this.lastPsuStatus;
    }
    try {
      // 1. Query output switch state (:OUTPut? CH1)
      const outpResp = await this.psu.query(DP700Protocol.getOutput(), 300);
      const outputOn = outpResp.toUpperCase().includes('ON') || outpResp.trim() === '1';

      // 2. Query setpoint values using :APPLy? CH1 (single command returns "<volt>,<curr>")
      let setVoltage = this.lastPsuStatus.setVoltage;
      let setCurrentLimit = this.lastPsuStatus.setCurrentLimit;
      const applResp = await this.psu.query(DP700Protocol.getApply(), 300);
      if (applResp && applResp.includes(',')) {
        const parts = applResp.split(',').map(s => parseFloat(s.trim()));
        if (!isNaN(parts[0])) setVoltage = parts[0];
        if (parts.length >= 2 && !isNaN(parts[1])) setCurrentLimit = parts[1];
      } else {
        // Fallback: :VOLTage? and :CURRent? WITHOUT channel argument
        const vStr = await this.psu.query(DP700Protocol.getVoltage(), 300);
        const iStr = await this.psu.query(DP700Protocol.getCurrentLimit(), 300);
        const v = parseFloat(vStr);
        const i = parseFloat(iStr);
        if (!isNaN(v)) setVoltage = v;
        if (!isNaN(i)) setCurrentLimit = i;
      }

      const s: PsuStatus = { outputOn, setVoltage, setCurrentLimit };
      this.lastPsuStatus = s;
      return s;
    } catch (e) {
      console.warn('[queryPsuStatus error]:', e);
      return this.lastPsuStatus;
    }
  }

  /**
   * Query Electronic Load State (Input ON/OFF, Mode, Target setpoint, Short status)
   * Uses UNI-T UTL8500 standard commands: :INP?, :MODE?, and parameter queries
   */
  public async queryLoadStatus(): Promise<LoadStatus> {
    if (this.load.isVirtual) {
      const m = this.load.virtualLoad.getMode();
      let val = 0;
      if (m === 'CC') val = this.load.virtualLoad.getTargetCurrent();
      else if (m === 'CW') val = this.load.virtualLoad.getTargetPower();
      else if (m === 'CV') val = this.load.virtualLoad.getTargetVoltage();
      else if (m === 'CR') val = this.load.virtualLoad.getTargetResistance();
      const s: LoadStatus = {
        inputOn: this.load.virtualLoad.isInputOn(),
        mode: m,
        targetVal: val,
        isShort: this.load.virtualLoad.isShortOn(),
      };
      this.lastLoadStatus = s;
      return s;
    }
    if (!this.load.state.connected) {
      return this.lastLoadStatus;
    }
    try {
      const inpResp = await this.load.query(UTL8500Protocol.getInput(), 250);
      const modeResp = await this.load.query(UTL8500Protocol.getMode(), 250);

      const inputOn = inpResp.includes('1') || inpResp.toUpperCase().includes('ON');

      let mode: 'CC' | 'CW' | 'CV' | 'CR' = this.lastLoadStatus.mode;
      const upperMode = modeResp.toUpperCase().trim();
      if (upperMode.includes('CURR')) mode = 'CC';
      else if (upperMode.includes('VOLT')) mode = 'CV';
      else if (upperMode.includes('POW')) mode = 'CW';
      else if (upperMode.includes('RES')) mode = 'CR';

      let valCmd = UTL8500Protocol.getCurrent();
      if (mode === 'CV') valCmd = UTL8500Protocol.getVoltage();
      else if (mode === 'CW') valCmd = UTL8500Protocol.getPower();
      else if (mode === 'CR') valCmd = UTL8500Protocol.getResistance();

      const valResp = await this.load.query(valCmd, 250);
      const val = parseFloat(valResp);
      const targetVal = !isNaN(val) ? val : this.lastLoadStatus.targetVal;

      const s: LoadStatus = { inputOn, mode, targetVal, isShort: false };
      this.lastLoadStatus = s;
      return s;
    } catch (e) {
      console.warn('[queryLoadStatus error]:', e);
      return this.lastLoadStatus;
    }
  }

  public async setPsuVoltageOnly(voltage: number) {
    if (this.psu.isVirtual) {
      this.psu.virtualPsu.setVoltage(voltage);
    } else {
      await this.psu.write(DP700Protocol.setVoltage(voltage));
    }
    this.lastPsuStatus.setVoltage = voltage;
  }

  public async setPsuCurrentLimitOnly(limitCurrent: number) {
    if (this.psu.isVirtual) {
      this.psu.virtualPsu.setCurrentLimit(limitCurrent);
    } else {
      await this.psu.write(DP700Protocol.setCurrentLimit(limitCurrent));
    }
    this.lastPsuStatus.setCurrentLimit = limitCurrent;
  }

  public async setPsuOutputState(on: boolean) {
    if (this.psu.isVirtual) {
      this.psu.virtualPsu.setOutput(on);
    } else {
      await this.psu.write(DP700Protocol.setOutput(on));
    }
    this.lastPsuStatus.outputOn = on;
  }

  public async setLoadModeAndValue(mode: 'CC' | 'CW' | 'CV' | 'CR', targetVal: number) {
    if (this.load.isVirtual) {
      this.load.virtualLoad.setMode(mode);
      if (mode === 'CC') this.load.virtualLoad.setCurrent(targetVal);
      else if (mode === 'CW') this.load.virtualLoad.setPower(targetVal);
      else if (mode === 'CV') this.load.virtualLoad.setVoltage(targetVal);
      else if (mode === 'CR') this.load.virtualLoad.setResistance(targetVal);
    } else {
      await this.load.write(UTL8500Protocol.setMode(mode));
      if (mode === 'CC') await this.load.write(UTL8500Protocol.setCurrent(targetVal));
      else if (mode === 'CW') await this.load.write(UTL8500Protocol.setPower(targetVal));
      else if (mode === 'CV') await this.load.write(UTL8500Protocol.setVoltage(targetVal));
      else if (mode === 'CR') await this.load.write(UTL8500Protocol.setResistance(targetVal));
    }
    this.lastLoadStatus.mode = mode;
    this.lastLoadStatus.targetVal = targetVal;
  }

  public async setLoadInputState(on: boolean) {
    if (this.load.isVirtual) {
      this.load.virtualLoad.setInput(on);
    } else {
      await this.load.write(UTL8500Protocol.setInput(on));
    }
    this.lastLoadStatus.inputOn = on;
  }

  public async setLoadShortState(on: boolean) {
    if (this.load.isVirtual) {
      this.load.virtualLoad.setShort(on);
    } else {
      await this.load.write(UTL8500Protocol.setShort(on));
    }
    this.lastLoadStatus.isShort = on;
  }

  public async clearLoadProtectionState() {
    if (!this.load.isVirtual) {
      await this.load.write(UTL8500Protocol.clearProtection());
    }
  }

  public async sendPsuRawSCPI(cmd: string): Promise<string> {
    const cleanCmd = cmd.trim();
    if (!cleanCmd) return '';
    if (cleanCmd.includes('?')) {
      return await this.psu.query(cleanCmd);
    } else {
      await this.psu.write(cleanCmd + '\n');
      return '已发送指令至电源串口';
    }
  }

  public async sendLoadRawSCPI(cmd: string): Promise<string> {
    const cleanCmd = cmd.trim();
    if (!cleanCmd) return '';
    if (cleanCmd.includes('?')) {
      return await this.load.query(cleanCmd);
    } else {
      await this.load.write(cleanCmd + '\n');
      return '已发送指令至负载串口';
    }
  }

  public async emergencyStopAll() {
    try {
      await this.setPsuOutput(false, 0, 0);
      await this.setLoadInput(false, 'CC', 0);
    } catch (e) {
      console.warn('Emergency stop error:', e);
    }
  }
}
