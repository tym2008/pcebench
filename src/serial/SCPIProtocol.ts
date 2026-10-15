/**
 * Standard SCPI & Manufacturer Command Formatter for DP700 and UTL8500
 */

export class DP700Protocol {
  public static setVoltageAndLimit(voltage: number, limitCurrent: number): string {
    return `:APPL CH1,${voltage.toFixed(3)},${limitCurrent.toFixed(3)}\n`;
  }

  public static setVoltage(voltage: number): string {
    return `:VOLT ${voltage.toFixed(3)}\n`;
  }

  public static setCurrentLimit(limitCurrent: number): string {
    return `:CURR ${limitCurrent.toFixed(3)}\n`;
  }

  public static setOutput(on: boolean): string {
    return `:OUTP CH1,${on ? 'ON' : 'OFF'}\n`;
  }

  public static measureAll(): string[] {
    return [
      `:MEAS:VOLT? CH1\n`,
      `:MEAS:CURR? CH1\n`,
      `:MEAS:POWE? CH1\n`
    ];
  }
}

export class UTL8500Protocol {
  public static setMode(mode: 'CC' | 'CW' | 'CV' | 'CR'): string {
    const scpiMode = mode === 'CW' ? 'CP' : mode;
    return `:SOUR:FUNC ${scpiMode}\n`;
  }

  public static setCurrent(current: number): string {
    return `:SOUR:CURR ${current.toFixed(3)}\n`;
  }

  public static setPower(power: number): string {
    return `:SOUR:POW ${power.toFixed(3)}\n`;
  }

  public static setVoltage(voltage: number): string {
    return `:SOUR:VOLT ${voltage.toFixed(3)}\n`;
  }

  public static setResistance(res: number): string {
    return `:SOUR:RES ${res.toFixed(3)}\n`;
  }

  public static setInput(on: boolean): string {
    return `:SOUR:INP ${on ? 'ON' : 'OFF'}\n`;
  }

  public static setShort(on: boolean): string {
    return `:SOUR:SHOR ${on ? 'ON' : 'OFF'}\n`;
  }

  public static clearProtection(): string {
    return `:PROT:CLE\n`;
  }

  public static measureAll(): string[] {
    return [
      `:MEAS:VOLT?\n`,
      `:MEAS:CURR?\n`,
      `:MEAS:POW?\n`
    ];
  }
}
