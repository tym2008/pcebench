export type LoadScanMode = 'CC' | 'CW'; // Constant Current (A) or Constant Watt/Power (W)

export interface SweepConfig {
  // Voltage Scan Range & Step
  voltageMin: number;       // Lower bound (V), e.g. 5.0
  voltageMax: number;       // Upper bound (V), e.g. 12.0
  voltageStep: number;      // Scan step (V), e.g. 1.0
  inputCurrentLimit: number;// Input Current Limit (A), e.g. 3.0

  // Load Scan Range & Step
  loadMin: number;          // Lower bound (A in CC, W in CW), e.g. 0.5A or 5W
  loadMax: number;          // Upper bound (A in CC, W in CW), e.g. 3.0A or 30W
  loadStep: number;         // Scan step (A or W), e.g. 0.5A or 5W
  loadMode: LoadScanMode;   // 'CC' or 'CW'

  // Measurement Timing
  stepDwellTime: number;    // Dwell time per point (seconds), e.g. 1.0
  sampleRateHz: number;     // Sampling rate (Hz), default 8
}

export interface RawSample {
  timestamp: number;        // Epoch timestamp (ms)
  relTime: number;          // Relative time from test start (seconds)
  stepIndex: number;        // Step index #
  voltageTarget: number;    // Target Vin (V)
  loadTarget: number;       // Target load (A or W)
  stepRelTime: number;      // Relative time within step (seconds)
  isValidForAvg: boolean;   // True if within [0.1s, step_duration - 0.1s]
  vin: number;              // Measured Vin (V)
  iin: number;              // Measured Iin (A)
  pin: number;              // Measured Pin (W)
  vout: number;             // Measured Vout (V)
  iout: number;             // Measured Iout (A)
  pout: number;             // Measured Pout (W)
  efficiency: number;       // Instantaneous efficiency (%)
}

export interface MatrixPoint {
  stepIndex: number;
  voltageTarget: number;    // Target Vin (V)
  loadTarget: number;       // Target Iout (A) or Pout (W)
  loadMode: LoadScanMode;

  // Actual measured values
  vin: number;              // Measured Vin (V)
  iin: number;              // Measured Iin (A)
  pin: number;              // Measured Pin = Vin * Iin (W)
  vout: number;             // Measured Vout (V)
  iout: number;             // Measured Iout (A)
  pout: number;             // Measured Pout = Vout * Iout (W)
  efficiency: number;       // Efficiency η = (Pout / Pin) * 100 (%)

  status: 'pending' | 'running' | 'completed' | 'failed';
  timestamp: number;
}

export interface TestSummary {
  totalPoints: number;
  completedPoints: number;
  maxEfficiency: number;
  minEfficiency: number;
  avgEfficiency: number;
  optimalPoint?: MatrixPoint;
  durationSeconds: number;
}

export interface TestRecord {
  id: string;               // e.g. "test_1729000000000"
  title: string;            // e.g. "DC-DC 芯片双向矩阵效率扫描 - 2026-10-15 11:30"
  createdAt: string;        // ISO string
  config: SweepConfig;
  voltageSteps: number[];   // Array of voltage steps [5, 6, 7...]
  loadSteps: number[];      // Array of load steps [0.5, 1.0, 1.5...]
  points: MatrixPoint[];    // Flattened array of all matrix cells
  rawSamples?: RawSample[]; // High-frequency raw sampling points trace
  summary: TestSummary;
}

export interface DashboardMetrics {
  vin: number;
  iin: number;
  pin: number;
  vout: number;
  iout: number;
  pout: number;
  efficiency: number;
  activeTargetV: number;
  activeTargetLoad: number;
  progressPercent: number;
  currentStep: number;
  totalSteps: number;
}

export type DeviceType = 'PSU' | 'LOAD';

export interface DeviceConnectionState {
  connected: boolean;
  portName: string;
  isVirtual: boolean;
  model: string;
  baudRate: number;
}
