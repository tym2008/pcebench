/**
 * Standard SCPI & Manufacturer Command Formatter for RIGOL DP700 and UNI-T UTL8500+
 * Strictly conforms to:
 * - RIGOL DP700 Series Programming Guide (:MEASure:ALL? CH1, :OUTPut? CH1, etc.)
 * - UNI-T UTL8500+ Programming Manual (:MODE CURR/VOLT/POW/RES, :INP 1/0, :INP:SHOR 1/0, etc.)
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

  /**
   * RIGOL DP700 composite measurement query: returns "<voltage>,<current>,<power>\n"
   * e.g. "12.000,0.500,6.000" in a single query round trip.
   */
  public static measureAll(channel: string = 'CH1'): string {
    return `:MEASure:ALL? ${channel}\n`;
  }

  public static getOutput(channel: string = 'CH1'): string {
    return `:OUTPut? ${channel}\n`;
  }

  public static getVoltage(channel: string = 'CH1'): string {
    return `:VOLTage? ${channel}\n`;
  }

  public static getCurrentLimit(channel: string = 'CH1'): string {
    return `:CURRent? ${channel}\n`;
  }
}

export class UTL8500Protocol {
  /**
   * According to UTL8500+ manual Page 7-8:
   * Modes are: CURRENT (CURR), VOLTage (VOLT), POWer (POW), RESistance (RES).
   * CC -> CURR
   * CV -> VOLT
   * CW / CP -> POW
   * CR -> RES
   */
  public static setMode(mode: 'CC' | 'CW' | 'CV' | 'CR'): string {
    let m = 'CURR';
    if (mode === 'CC') m = 'CURR';
    else if (mode === 'CV') m = 'VOLT';
    else if (mode === 'CW') m = 'POW';
    else if (mode === 'CR') m = 'RES';
    return `:MODE ${m}\n`;
  }

  public static getMode(): string {
    return `:MODE?\n`;
  }

  public static setCurrent(current: number): string {
    return `:CURR ${current.toFixed(3)}\n`;
  }

  public static getCurrent(): string {
    return `:CURR?\n`;
  }

  public static setPower(power: number): string {
    return `:POW ${power.toFixed(3)}\n`;
  }

  public static getPower(): string {
    return `:POW?\n`;
  }

  public static setVoltage(voltage: number): string {
    return `:VOLT ${voltage.toFixed(3)}\n`;
  }

  public static getVoltage(): string {
    return `:VOLT?\n`;
  }

  public static setResistance(res: number): string {
    return `:RES ${res.toFixed(3)}\n`;
  }

  public static getResistance(): string {
    return `:RES?\n`;
  }

  /**
   * According to UTL8500+ manual Page 7:
   * [SOURce:]INPut[:STATe] <bool> where <bool> is 0|1 or OFF|ON
   */
  public static setInput(on: boolean): string {
    return `:INP ${on ? '1' : '0'}\n`;
  }

  public static getInput(): string {
    return `:INP?\n`;
  }

  /**
   * According to UTL8500+ manual Page 7:
   * [SOURce:]INPut:SHORt[:STATe] <bool>
   */
  public static setShort(on: boolean): string {
    return `:INP:SHOR ${on ? '1' : '0'}\n`;
  }

  public static getShort(): string {
    return `:INP:SHOR?\n`;
  }

  public static clearProtection(): string {
    return `*CLS;:PROT:CLE\n`;
  }

  /**
   * According to UTL8500+ manual Page 17:
   * MEASure:REAL? reads real-time measurement dataset
   */
  public static measureReal(): string {
    return `:MEAS:REAL?\n`;
  }

  public static measureVolt(): string {
    return `:MEAS:VOLT?\n`;
  }

  public static measureCurr(): string {
    return `:MEAS:CURR?\n`;
  }

  public static measurePow(): string {
    return `:MEAS:POW?\n`;
  }

  public static measureRes(): string {
    return `:MEAS:RES?\n`;
  }
}
