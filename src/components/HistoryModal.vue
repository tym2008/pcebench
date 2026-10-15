<template>
  <div v-if="isOpen" class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal-card" style="max-width: 680px;">
      <div class="modal-header">
        <span style="display: flex; align-items: center; gap: 8px; color: #63b3ed;">
          <svg class="icon-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          历史测试数据查看 (IndexedDB 最近 5 条)
        </span>
        <button class="btn" style="padding: 2px 6px;" @click="$emit('close')">✕</button>
      </div>

      <div class="modal-body" style="padding: 12px; gap: 8px; display: flex; flex-direction: column;">
        <div v-if="records.length === 0" style="padding: 30px; text-align: center; color: #718096;">
          暂无历史测试数据，执行测试后系统将自动保存最近 5 条测试记录至本地 IndexedDB。
        </div>

        <div
          v-for="rec in records"
          :key="rec.id"
          style="background-color: #171b22; border: 1px solid #2d3748; border-radius: 6px; padding: 10px 12px; display: flex; align-items: center; justify-content: space-between; gap: 10px; transition: border-color 0.15s;"
          @mouseenter="($event.currentTarget as HTMLElement).style.borderColor = '#4a5568'"
          @mouseleave="($event.currentTarget as HTMLElement).style.borderColor = '#2d3748'"
        >
          <div style="flex: 1; display: flex; flex-direction: column; gap: 4px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-weight: bold; color: #e2e8f0; font-size: 12.5px;">{{ rec.title }}</span>
              <span style="font-size: 10.5px; color: #a0aec0; font-family: monospace;">
                {{ new Date(rec.createdAt).toLocaleString() }}
              </span>
            </div>

            <div style="font-size: 11px; color: #a0aec0; font-family: 'Consolas', monospace; display: flex; gap: 14px;">
              <span>电压: <b style="color: #ecc94b;">{{ rec.config.voltageMin }}V ~ {{ rec.config.voltageMax }}V</b></span>
              <span>负载: <b style="color: #63b3ed;">{{ rec.config.loadMin }} ~ {{ rec.config.loadMax }} ({{ rec.config.loadMode }})</b></span>
              <span>点数: <b style="color: #e2e8f0;">{{ rec.points.length }}</b></span>
              <span>最高效率: <b style="color: #48bb78;">{{ rec.summary?.maxEfficiency?.toFixed(2) ?? '--' }}%</b></span>
            </div>
          </div>

          <div style="display: flex; align-items: center; gap: 6px;">
            <button
              class="btn btn-primary"
              style="padding: 5px 12px; font-weight: bold;"
              @click="$emit('open-result', rec.id)"
              title="在新窗口打开该条测试记录的 2D 矩阵表和 3D 柱状图"
            >
              <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              进入数据查看
            </button>

            <button
              class="btn"
              style="padding: 5px 8px;"
              @click="$emit('export-csv', rec)"
              title="导出此条记录为 CSV 文件"
            >
              <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </button>

            <button
              class="btn btn-danger"
              style="padding: 5px 8px;"
              @click="$emit('delete-record', rec.id)"
              title="删除此记录"
            >
              <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button class="btn" @click="$emit('close')">关闭</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TestRecord } from '../types/test';

defineProps<{
  isOpen: boolean;
  records: TestRecord[];
}>();

defineEmits<{
  (e: 'close'): void;
  (e: 'open-result', id: string): void;
  (e: 'export-csv', record: TestRecord): void;
  (e: 'delete-record', id: string): void;
}>();
</script>
