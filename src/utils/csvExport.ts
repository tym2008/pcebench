import { TestRecord } from '../types/test';

/**
 * Export test record to CSV file with UTF-8 BOM for Excel compatibility and trigger browser download
 */
export function exportRecordToCSV(record: TestRecord, filename?: string): void {
  const name = filename || `效率测试矩阵_${record.config.loadMode}_${new Date(record.createdAt).toISOString().slice(0, 19).replace(/[:T]/g, '_')}.csv`;

  const lines: string[] = [];

  // Header Metadata
  lines.push(`"电源转换芯片效率测试系统 - 2D 双向矩阵测试数据报告"`);
  lines.push(`"测试任务标题","${record.title}"`);
  lines.push(`"测试时间","${new Date(record.createdAt).toLocaleString()}"`);
  lines.push(`"输入电压范围","${record.config.voltageMin} V ~ ${record.config.voltageMax} V (步长: ${record.config.voltageStep} V)"`);
  lines.push(`"输入限流","${record.config.inputCurrentLimit} A"`);
  lines.push(`"负载扫描范围","${record.config.loadMin} ~ ${record.config.loadMax} ${record.config.loadMode === 'CC' ? 'A' : 'W'} (步长: ${record.config.loadStep}) (模式: ${record.config.loadMode})"`);
  lines.push(`"每点驻留时间","${record.config.stepDwellTime} 秒"`);
  lines.push(`"总测试点数","${record.points.length}"`);
  lines.push(`"最高转换效率","${record.summary?.maxEfficiency?.toFixed(2) ?? '--'} %"`);
  lines.push(`"平均转换效率","${record.summary?.avgEfficiency?.toFixed(2) ?? '--'} %"`);
  lines.push(``);

  // 1. 2D Efficiency Matrix Overview Table
  lines.push(`"=== 2D 转换效率矩阵概览表 (η %) ==="`);
  const vHeaders = record.voltageSteps.map((v) => `"${v}V"`).join(',');
  lines.push(`"负载(${record.config.loadMode === 'CC' ? 'A' : 'W'}) \\ 电压(V)",${vHeaders}`);

  record.loadSteps.forEach((lVal) => {
    const rowValues = record.voltageSteps.map((vVal) => {
      const pt = record.points.find(
        (p) => Math.abs(p.voltageTarget - vVal) < 1e-4 && Math.abs(p.loadTarget - lVal) < 1e-4
      );
      return pt && pt.status === 'completed' ? pt.efficiency.toFixed(2) : `""`;
    });
    lines.push(`"${lVal}",${rowValues.join(',')}`);
  });

  lines.push(``);

  // 2. Detailed Measurement Point Log
  lines.push(`"=== 详细测量采样明细表 ==="`);
  lines.push(`"步号","目标电压(V)","目标负载(${record.config.loadMode === 'CC' ? 'A' : 'W'})","负载模式","实测Vin(V)","实测Iin(A)","实测Pin(W)","实测Vout(V)","实测Iout(A)","实测Pout(W)","转换效率η(%)","状态"`);

  record.points.forEach((p) => {
    lines.push(
      [
        p.stepIndex,
        p.voltageTarget.toFixed(2),
        p.loadTarget.toFixed(2),
        `"${p.loadMode}"`,
        p.vin.toFixed(4),
        p.iin.toFixed(4),
        p.pin.toFixed(4),
        p.vout.toFixed(4),
        p.iout.toFixed(4),
        p.pout.toFixed(4),
        p.efficiency.toFixed(2),
        `"${p.status}"`,
      ].join(',')
    );
  });

  // 3. High-Frequency Raw Sampling Points (Requested by User)
  if (record.rawSamples && record.rawSamples.length > 0) {
    lines.push(``);
    lines.push(`"=== 高频原始采样数据 (Raw Sample Traces) ==="`);
    lines.push(`"采样说明","包含每一个连续采样点；其中'是否计入均值'标明是否排除了电压切换后0.5s内被忽略的数据及步间暂态数据"`);
    lines.push(`"总采样点数","${record.rawSamples.length}"`);
    lines.push(`"相对时间(s)","步骤号(Step)","目标电压(V)","目标负载(${record.config.loadMode === 'CC' ? 'A' : 'W'})","步内时间(s)","是否计入均值(0.5s过滤)","实测Vin(V)","实测Iin(A)","实测Pin(W)","实测Vout(V)","实测Iout(A)","实测Pout(W)","瞬时效率(%)"`);

    record.rawSamples.forEach((r) => {
      lines.push(
        [
          r.relTime.toFixed(4),
          r.stepIndex,
          r.voltageTarget.toFixed(2),
          r.loadTarget.toFixed(2),
          r.stepRelTime.toFixed(4),
          r.isValidForAvg ? `"YES"` : `"NO(0.5s切换/暂态过滤)"`,
          r.vin.toFixed(4),
          r.iin.toFixed(4),
          r.pin.toFixed(4),
          r.vout.toFixed(4),
          r.iout.toFixed(4),
          r.pout.toFixed(4),
          r.efficiency.toFixed(2),
        ].join(',')
      );
    });
  }

  const csvContent = '\uFEFF' + lines.join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', name);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
