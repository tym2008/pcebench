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

export class DeviceDriver {
  public type: DeviceType;
  public isVirtual: boolean = true;
  private port: SerialPort | null = null;
  private reader: ReadableStreamDefaultReader<string> | null = null;
  private writer: WritableStreamDefaultWriter<string> | null = null;
  private encoder: TextEncoderStream | null = null;
  private decoder: TextDecoderStream | null = null;
  private readBuffer: string = '';

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
    try {
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
      this.state.connected = false;
      this.state.portName = '未连接';
      if (this.type === 'PSU') {
        this.virtualPsu.setConnected(false);
      } else {
        this.virtualLoad.setConnected(false);
      }
    }
  }

  public async write(cmd: string): Promise<void> {
    if (this.isVirtual) {
      // Handled internally in virtual measurement loops
      return;
    }
    if (!this.writer) throw new Error('Port writer not initialized');
    await this.writer.write(cmd);
  }

  private async startContinuousRead() {
    if (!this.reader) return;
    try {
      while (true) {
        const { value, done } = await this.reader.read();
        if (done) break;
        if (value) {
          this.readBuffer += value;
        }
      }
    } catch (err) {
      console.warn('Read stream terminated:', err);
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

  private constructor() {
    // Cross-link virtual devices
    this.psu.virtualPsu.linkLoad(this.load.virtualLoad);
    this.load.virtualLoad.linkSupply(this.psu.virtualPsu);
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

  public async setPsuOutput(on: boolean, voltage: number, limitCurrent: number) {
    if (this.psu.isVirtual) {
      this.psu.virtualPsu.setOutput(on);
      this.psu.virtualPsu.setVoltage(voltage);
      this.psu.virtualPsu.setCurrentLimit(limitCurrent);
    } else {
      await this.psu.write(DP700Protocol.setVoltageAndLimit(voltage, limitCurrent));
      await this.psu.write(DP700Protocol.setOutput(on));
    }
  }

  public async setLoadInput(on: boolean, mode: 'CC' | 'CW', targetVal: number) {
    if (this.load.isVirtual) {
      this.load.virtualLoad.setInput(on);
      this.load.virtualLoad.setMode(mode);
      if (mode === 'CC') {
        this.load.virtualLoad.setCurrent(targetVal);
      } else {
        this.load.virtualLoad.setPower(targetVal);
      }
    } else {
      await this.load.write(UTL8500Protocol.setMode(mode));
      if (mode === 'CC') {
        await this.load.write(UTL8500Protocol.setCurrent(targetVal));
      } else {
        await this.load.write(UTL8500Protocol.setPower(targetVal));
      }
      await this.load.write(UTL8500Protocol.setInput(on));
    }
  }

  public measure(): {
    vin: number;
    iin: number;
    pin: number;
    vout: number;
    iout: number;
    pout: number;
    efficiency: number;
  } {
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

  public async emergencyStopAll() {
    try {
      await this.setPsuOutput(false, 0, 0);
      await this.setLoadInput(false, 'CC', 0);
    } catch (e) {
      console.warn('Emergency stop error:', e);
    }
  }
}
