/**
 * Standard SCPI & Manufacturer Command Formatter for:
 * 1. RIGOL DP700 Series Power Supply (DP711 / DP712)
 *    - Manual: DP700 Programming Guide
 *    - Commands: :APPLy, :OUTPut, :VOLTage, :CURRent, :MEASure:ALL?
 * 2. UNI-T UTL8500+ Series Programmable Electronic Load
 *    - Manual: UTL8500+ Programming Manual
 *    - Commands: :MODE (CURR|VOLT|POW|RES), :INP (1|0), :CURR, :VOLT, :POW, :RES, :INP:SHOR (1|0)
 *
 * CRITICAL: The two devices have completely distinct command sets!
 * NEVER mix or cross-send commands between PSU and Load!
 */

export class DP700Protocol {
  /**
   * Set voltage and current limit simultaneously:
   * Manual p. 2-2: :APPLy CH1,<voltage>,<current>
   * Example: :APPLy CH1,5.000,1.000\n
   */
  public static setVoltageAndLimit(voltage: number, limitCurrent: number): string {
    return `:APPLy CH1,${voltage.toFixed(3)},${limitCurrent.toFixed(3)}\n`;
  }

  /**
   * Set voltage alone:
   * Manual p. 2-25: [:SOURce[<n>]]:VOLTage[:LEVel][:IMMediate][:AMPLitude] <voltage>
   * Example: :VOLTage 12.000\n
   */
  public static setVoltage(voltage: number): string {
    return `:VOLTage ${voltage.toFixed(3)}\n`;
  }

  /**
   * Set current limit alone:
   * Manual p. 2-22: [:SOURce[<n>]]:CURRent[:LEVel][:IMMediate][:AMPLitude] <current>
   * Example: :CURRent 2.000\n
   */
  public static setCurrentLimit(limitCurrent: number): string {
    return `:CURRent ${limitCurrent.toFixed(3)}\n`;
  }

  /**
   * Set output state:
   * Manual p. 2-21: :OUTPut[:STATe] [<channel>,]<state>
   * Example: :OUTPut CH1,ON\n or :OUTPut CH1,OFF\n
   */
  public static setOutput(on: boolean): string {
    return `:OUTPut CH1,${on ? 'ON' : 'OFF'}\n`;
  }

  /**
   * Query output state:
   * Manual p. 2-21: :OUTPut[:STATe]? [<channel>]
   * Returns: ON or OFF
   */
  public static getOutput(): string {
    return `:OUTPut? CH1\n`;
  }

  /**
   * Query set voltage and current limit together:
   * Manual p. 2-2: :APPLy? [<channel>]
   * Returns: "<voltage>,<current>" (e.g. "5.00,1.00")
   */
  public static getApply(): string {
    return `:APPLy? CH1\n`;
  }

  /**
   * Query set voltage alone:
   * Manual p. 2-25: :VOLTage?
   * NOTE: In DP700 manual, :VOLTage? does NOT accept channel argument. Do NOT append CH1!
   */
  public static getVoltage(): string {
    return `:VOLTage?\n`;
  }

  /**
   * Query set current limit alone:
   * Manual p. 2-22: :CURRent?
   * NOTE: In DP700 manual, :CURRent? does NOT accept channel argument. Do NOT append CH1!
   */
  public static getCurrentLimit(): string {
    return `:CURRent?\n`;
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
