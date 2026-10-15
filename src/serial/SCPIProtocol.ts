/**
 * Standard SCPI & Manufacturer Command Formatter for DP700 and UTL8500
 */

export class DP700Protocol {
  public static setVoltageAndLimit(voltage: number, limitCurrent: number): string {
    return `:APPL CH1,${voltage.toFixed(3)},${limitCurrent.toFixed(3)}\n`;
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
  public static setMode(mode: 'CC' | 'CW'): string {
    return `:SOUR:FUNC ${mode}\n`;
  }

  public static setCurrent(current: number): string {
    return `:SOUR:CURR ${current.toFixed(3)}\n`;
  }

  public static setPower(power: number): string {
    return `:SOUR:POW ${power.toFixed(3)}\n`;
  }

  public static setInput(on: boolean): string {
    return `:SOUR:INP ${on ? 'ON' : 'OFF'}\n`;
  }

  public static measureAll(): string[] {
    return [
      `:MEAS:VOLT?\n`,
      `:MEAS:CURR?\n`,
      `:MEAS:POW?\n`
    ];
  }
}
