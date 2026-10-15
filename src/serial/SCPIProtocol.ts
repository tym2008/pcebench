/**
 * Standard SCPI & Manufacturer Command Formatter for:
 * 1. RIGOL DP700 Series Power Supply (DP711 / DP712)
 *    - Manual: DP700 Programming Guide
 *    - Setting: STRICTLY use :APPLy only (:APPLy CH1,<voltage>,<current>)
 *    - Measurement: STRICTLY use :MEASure:ALL? only (:MEASure:ALL? CH1)
 *    - Query Settings: STRICTLY use :APPLy? only (:APPLy? CH1)
 *    - Output: :OUTPut CH1,ON / :OUTPut CH1,OFF / :OUTPut? CH1
 * 2. UNI-T UTL8500+ Series Programmable Electronic Load
 *    - Manual: UTL8500+ Programming Manual
 *    - Commands: :MODE (CURR|VOLT|POW|RES), :INP (1|0), :CURR, :VOLT, :POW, :RES, :INP:SHOR (1|0)
 */

export class DP700Protocol {
  /**
   * Set voltage and current limit simultaneously using :APPLy:
   * Manual p. 2-2: :APPLy CH1,<voltage>,<current>
   * Example: :APPLy CH1,5.000,1.000\n
   */
  public static apply(voltage: number, limitCurrent: number): string {
    return `:APPLy CH1,${voltage.toFixed(3)},${limitCurrent.toFixed(3)}\n`;
  }

  // Alias for backward compatibility: strictly outputs :APPLy
  public static setVoltageAndLimit(voltage: number, limitCurrent: number): string {
    return DP700Protocol.apply(voltage, limitCurrent);
  }

  /**
   * Query set voltage and current limit together using :APPLy?:
   * Manual p. 2-2: :APPLy? CH1
   * Returns: "<voltage>,<current>" (e.g. "5.00,1.00")
   */
  public static getApply(): string {
    return `:APPLy? CH1\n`;
  }

  /**
   * Set output state:
   * Manual p. 2-21: :OUTPut CH1,ON or :OUTPut CH1,OFF
   */
  public static setOutput(on: boolean): string {
    return `:OUTPut CH1,${on ? 'ON' : 'OFF'}\n`;
  }

  /**
   * Query output state:
   * Manual p. 2-21: :OUTPut? CH1
   * Returns: ON or OFF
   */
  public static getOutput(): string {
    return `:OUTPut? CH1\n`;
  }

  /**
   * Query measured parameters (V, I, P) in a single query:
   * Manual p. 2-9: :MEASure:ALL[:DC]? [<channel>]
   * Returns: "<voltage>,<current>,<power>" (e.g. "12.000,0.500,6.000")
   */
  public static measureAll(): string {
    return `:MEASure:ALL? CH1\n`;
  }
}

export class UTL8500Protocol {
  /**
   * Set working mode:
   * Manual p. 7-8: [SOURce:]MODE <function>
   * Valid arguments: CURRENT (CURR), VOLTage (VOLT), POWer (POW), RESistance (RES)
   * Note: UTL8500 rejects CC, CV, CP, CR! Must use CURR, VOLT, POW, RES.
   */
  public static setMode(mode: 'CC' | 'CW' | 'CV' | 'CR'): string {
    let m = 'CURR';
    if (mode === 'CC') m = 'CURR';
    else if (mode === 'CV') m = 'VOLT';
    else if (mode === 'CW') m = 'POW';
    else if (mode === 'CR') m = 'RES';
    return `:MODE ${m}\n`;
  }

  /**
   * Query working mode:
   * Manual p. 8: MODE?
   * Returns: CURR, VOLT, POW, RES
   */
  public static getMode(): string {
    return `:MODE?\n`;
  }

  /**
   * Set CC current:
   * Manual p. 11: [SOURce:]CURRent <val>
   */
  public static setCurrent(current: number): string {
    return `:CURR ${current.toFixed(3)}\n`;
  }

  public static getCurrent(): string {
    return `:CURR?\n`;
  }

  /**
   * Set CP power:
   * Manual p. 12: [SOURce:]POWer <val>
   */
  public static setPower(power: number): string {
    return `:POW ${power.toFixed(3)}\n`;
  }

  public static getPower(): string {
    return `:POW?\n`;
  }

  /**
   * Set CV voltage:
   * Manual p. 11: [SOURce:]VOLTage <val>
   */
  public static setVoltage(voltage: number): string {
    return `:VOLT ${voltage.toFixed(3)}\n`;
  }

  public static getVoltage(): string {
    return `:VOLT?\n`;
  }

  /**
   * Set CR resistance:
   * Manual p. 12: [SOURce:]RESistance <val>
   */
  public static setResistance(res: number): string {
    return `:RES ${res.toFixed(3)}\n`;
  }

  public static getResistance(): string {
    return `:RES?\n`;
  }

  /**
   * Set input ON/OFF:
   * Manual p. 7: [SOURce:]INPut[:STATe] <bool>
   * Parameters: 0|1 or OFF|ON
   */
  public static setInput(on: boolean): string {
    return `:INP ${on ? '1' : '0'}\n`;
  }

  public static getInput(): string {
    return `:INP?\n`;
  }

  /**
   * Set short-circuit ON/OFF:
   * Manual p. 7: [SOURce:]INPut:SHORt[:STATe] <bool>
   */
  public static setShort(on: boolean): string {
    return `:INP:SHOR ${on ? '1' : '0'}\n`;
  }

  public static getShort(): string {
    return `:INP:SHOR?\n`;
  }

  /**
   * Clear protection / reset load:
   * Turning input off clears protection trip on UTL8500
   */
  public static clearProtection(): string {
    return `:INP 0\n`;
  }

  /**
   * Measurement queries:
   * Manual p. 16-17:
   * :MEAS:VOLT?
   * :MEAS:CURR?
   * :MEAS:POW?
   */
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
