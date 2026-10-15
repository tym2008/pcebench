/**
 * High-fidelity Virtual Instrument Drivers for DP700 (PSU) and UTL8500 (Load)
 * Allows realistic full-matrix testing directly in browser without physical COM hardware.
 */

export class VirtualPowerSupply {
  private connected = true;
  private outputOn = false;
  private targetVoltage = 5.0;
  private currentVoltage = 5.0;
  private currentLimit = 3.0;
  private linkedLoad: VirtualElectronicLoad | null = null;

  public linkLoad(load: VirtualElectronicLoad) {
    this.linkedLoad = load;
  }

  public isConnected(): boolean {
    return this.connected;
  }

  public setConnected(state: boolean) {
    this.connected = state;
  }

  public setOutput(state: boolean) {
    this.outputOn = state;
  }

  public isOutputOn(): boolean {
    return this.outputOn;
  }

  public setVoltage(v: number) {
    this.targetVoltage = Math.max(0, v);
    this.currentVoltage = this.targetVoltage;
  }

  public setCurrentLimit(i: number) {
    this.currentLimit = Math.max(0.1, i);
  }

  public measure(): { vin: number; iin: number; pin: number } {
    if (!this.connected || !this.outputOn) {
      return { vin: 0, iin: 0, pin: 0 };
    }

    // Small measurement noise
    const vNoise = (Math.random() - 0.5) * 0.008;
    const vin = Math.max(0, this.currentVoltage + vNoise);

    let iin = 0.02; // Quiescent standby current
    if (this.linkedLoad && this.linkedLoad.isInputOn() && vin > 1.0) {
      const loadMeas = this.linkedLoad.measure(vin);
      const pOut = loadMeas.pout;

      // Realistic buck-boost chip efficiency model:
      // Peak efficiency around 9V input and 1.5A - 2.5A load (~93.5%), drops slightly at low/high ends
      const vDiff = Math.abs(vin - 8.8);
      const baseEff = 0.938 - 0.006 * vDiff;
      const noiseEff = (Math.random() - 0.5) * 0.004;
      const eff = Math.min(0.965, Math.max(0.72, baseEff + noiseEff));

      const pIn = pOut > 0.01 ? pOut / eff : vin * 0.02;
      iin = Math.min(this.currentLimit, pIn / vin + (Math.random() - 0.5) * 0.003);
    }

    const pin = vin * iin;
    return {
      vin: Math.round(vin * 1000) / 1000,
      iin: Math.round(iin * 1000) / 1000,
      pin: Math.round(pin * 1000) / 1000,
    };
  }
}

export class VirtualElectronicLoad {
  private connected = true;
  private inputOn = false;
  private mode: 'CC' | 'CW' = 'CC';
  private targetCurrent = 1.0; // In CC mode (A)
  private targetPower = 10.0;  // In CW mode (W)
  private linkedSupply: VirtualPowerSupply | null = null;

  public linkSupply(supply: VirtualPowerSupply) {
    this.linkedSupply = supply;
  }

  public isConnected(): boolean {
    return this.connected;
  }

  public setConnected(state: boolean) {
    this.connected = state;
  }

  public setInput(state: boolean) {
    this.inputOn = state;
  }

  public isInputOn(): boolean {
    return this.inputOn;
  }

  public setMode(m: 'CC' | 'CW') {
    this.mode = m;
  }

  public setCurrent(current: number) {
    this.targetCurrent = Math.max(0, current);
  }

  public setPower(power: number) {
    this.targetPower = Math.max(0, power);
  }

  public measure(supplyVin?: number): { vout: number; iout: number; pout: number } {
    if (!this.connected || !this.inputOn) {
      return { vout: 0, iout: 0, pout: 0 };
    }

    const vin = supplyVin ?? 10.0;
    if (vin < 1.0) {
      return { vout: 0, iout: 0, pout: 0 };
    }

    // Regulated output voltage (e.g., target 5.0V step-down or 12.0V step-up with slight load regulation droop)
    const nominalVout = 5.0; 
    let iout = 0;
    let pout = 0;

    if (this.mode === 'CC') {
      iout = this.targetCurrent + (Math.random() - 0.5) * 0.004;
      // Load regulation droop (0.015V per Amp)
      const vout = nominalVout - iout * 0.015 + (Math.random() - 0.5) * 0.003;
      pout = vout * iout;
      return {
        vout: Math.max(0, Math.round(vout * 1000) / 1000),
        iout: Math.max(0, Math.round(iout * 1000) / 1000),
        pout: Math.max(0, Math.round(pout * 1000) / 1000),
      };
    } else {
      // CW mode
      pout = this.targetPower + (Math.random() - 0.5) * 0.01;
      const vout = nominalVout - (pout / nominalVout) * 0.015 + (Math.random() - 0.5) * 0.003;
      iout = pout / vout;
      return {
        vout: Math.max(0, Math.round(vout * 1000) / 1000),
        iout: Math.max(0, Math.round(iout * 1000) / 1000),
        pout: Math.max(0, Math.round(pout * 1000) / 1000),
      };
    }
  }
}
