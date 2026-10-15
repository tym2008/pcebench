<template>
  <div style="position: relative; width: 100%; height: 100%; display: flex; flex-direction: column; overflow: hidden; background-color: #070b14; user-select: none;">
    <!-- Top HUD Bar: Displays hovered bar metrics or overall summary -->
    <div
      style="height: 44px; background-color: #1a1e24; border-bottom: 1px solid #2d3748; display: flex; align-items: center; justify-content: space-between; padding: 0 14px; gap: 12px; z-index: 10;"
    >
      <div style="display: flex; align-items: center; gap: 8px;">
        <svg class="icon-md" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d2ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
        <span style="font-weight: bold; color: #00d2ff; font-size: 12px;">3D 空间特征柱状图</span>
        <span style="color: #718096; font-size: 11px; font-family: monospace;">| X: Vin | Y: {{ yAxisLabel }} | Z(高度): 效率 η</span>
      </div>

      <!-- Real-time Hover Point Data Banner -->
      <div
        v-if="hoveredPoint"
        style="background-color: #121519; border: 1px solid #00d2ff; padding: 3px 10px; border-radius: 4px; display: flex; align-items: center; gap: 10px; font-family: 'Consolas', monospace; font-size: 11px; animation: fadeIn 0.15s ease-out;"
      >
        <span style="color: #00d2ff; font-weight: bold;">
          选定点 #{{ hoveredPoint.stepIndex }}:
        </span>
        <span>Vin: <b style="color: #ecc94b;">{{ hoveredPoint.vin.toFixed(3) }}V</b></span>
        <span>Iin: <b style="color: #e2e8f0;">{{ hoveredPoint.iin.toFixed(3) }}A</b></span>
        <span>Pin: <b style="color: #e2e8f0;">{{ hoveredPoint.pin.toFixed(3) }}W</b></span>
        <span>Vout: <b style="color: #63b3ed;">{{ hoveredPoint.vout.toFixed(3) }}V</b></span>
        <span>Iout: <b style="color: #e2e8f0;">{{ hoveredPoint.iout.toFixed(3) }}A</b></span>
        <span>Pout: <b style="color: #e2e8f0;">{{ hoveredPoint.pout.toFixed(3) }}W</b></span>
        <span style="background-color: #1c4532; color: #48bb78; font-weight: bold; padding: 1px 6px; border-radius: 3px; border: 1px solid #276749;">
          效率 η: {{ hoveredPoint.efficiency.toFixed(2) }}%
        </span>
      </div>

      <!-- Default Prompt when no point is hovered -->
      <div v-else style="font-size: 11px; color: #718096; display: flex; align-items: center; gap: 6px;">
        <span style="color: #ecc94b;">💡</span>
        <span>移动鼠标悬停在 3D 柱体上可浮起并查看具体参数；左键拖拽旋转视角，滚轮缩放，右键平移。</span>
      </div>

      <!-- Y-Axis Mode Switcher & Camera Reset (Matching Diagram Graph A and Graph B) -->
      <div style="display: flex; align-items: center; gap: 6px;">
        <div style="display: flex; background-color: #121519; padding: 2px; border-radius: 4px; border: 1px solid #2d3748; font-size: 10.5px;">
          <button
            class="btn"
            :style="{
              backgroundColor: yMode === 'current' ? '#2b6cb0' : 'transparent',
              color: yMode === 'current' ? '#ffffff' : '#a0aec0',
              fontWeight: yMode === 'current' ? 'bold' : 'normal',
              border: 'none',
              padding: '2px 6px'
            }"
            @click="setYMode('current')"
          >
            Y: 负载电流 (A)
          </button>
          <button
            class="btn"
            :style="{
              backgroundColor: yMode === 'power' ? '#2b6cb0' : 'transparent',
              color: yMode === 'power' ? '#ffffff' : '#a0aec0',
              fontWeight: yMode === 'power' ? 'bold' : 'normal',
              border: 'none',
              padding: '2px 6px'
            }"
            @click="setYMode('power')"
          >
            Y: 输出功率 (W)
          </button>
        </div>

        <button
          class="btn"
          style="padding: 3px 8px; font-size: 11px;"
          @click="resetCamera"
          title="重置视角"
        >
          重置视角
        </button>
      </div>
    </div>

    <!-- 3D WebGL Canvas Container -->
    <div ref="mountRef" style="flex: 1; width: 100%; height: 100%; position: relative; cursor: grab;">
      <!-- 3D Hover Tooltip overlay positioned dynamically -->
      <div
        v-if="tooltip.visible && hoveredPoint"
        :style="{ left: `${tooltip.x}px`, top: `${tooltip.y}px` }"
        style="pointer-events: none; position: absolute; z-index: 20; transform: translate(-50%, -100%); margin-top: -12px; padding: 8px 10px; background-color: rgba(26, 30, 36, 0.95); border: 1px solid #00d2ff; border-radius: 6px; box-shadow: 0 8px 20px rgba(0,0,0,0.8); font-family: 'Consolas', monospace; font-size: 11px; color: #e2e8f0; white-space: nowrap;"
      >
        <div style="font-weight: bold; color: #00d2ff; border-bottom: 1px solid #2d3748; padding-bottom: 3px; margin-bottom: 4px; display: flex; justify-content: space-between; gap: 14px;">
          <span>采样点 #{{ hoveredPoint.stepIndex }}</span>
          <span style="color: #48bb78;">η = {{ hoveredPoint.efficiency.toFixed(2) }}%</span>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3px 10px; font-size: 10.5px;">
          <div>Vin: <span style="color: #ecc94b;">{{ hoveredPoint.vin.toFixed(2) }}V</span></div>
          <div>Vout: <span style="color: #63b3ed;">{{ hoveredPoint.vout.toFixed(2) }}V</span></div>
          <div>Iin: <span>{{ hoveredPoint.iin.toFixed(3) }}A</span></div>
          <div>Iout: <span>{{ hoveredPoint.iout.toFixed(3) }}A</span></div>
          <div>Pin: <span>{{ hoveredPoint.pin.toFixed(2) }}W</span></div>
          <div>Pout: <span>{{ hoveredPoint.pout.toFixed(2) }}W</span></div>
        </div>
      </div>

      <!-- Color Legend floating at bottom-right -->
      <div style="position: absolute; bottom: 16px; right: 16px; z-index: 10; padding: 8px 12px; background-color: rgba(26, 30, 36, 0.85); border-radius: 6px; border: 1px solid #2d3748; display: flex; flex-direction: column; gap: 4px; pointer-events: auto;">
        <div style="font-size: 10px; font-weight: bold; color: #a0aec0; display: flex; justify-content: space-between;">
          <span>效率色谱 (η)</span>
          <span style="font-family: monospace; color: #00d2ff;">0% ~ 100%</span>
        </div>
        <div style="height: 8px; width: 140px; border-radius: 4px; background: linear-gradient(to right, #f43f5e, #f59e0b, #48bb78, #00d2ff, #8b5cf6);"></div>
        <div style="display: flex; justify-content: space-between; font-size: 9px; font-family: monospace; color: #718096;">
          <span>&lt;70% 低效</span>
          <span>85%</span>
          <span>&gt;95% 高效</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { MatrixPoint } from '../types/test';

const props = defineProps<{
  points: MatrixPoint[];
  voltageSteps: number[];
  loadSteps: number[];
  loadMode: 'CC' | 'CW';
}>();

const mountRef = ref<HTMLDivElement | null>(null);
const hoveredPoint = ref<MatrixPoint | null>(null);
const yMode = ref<'current' | 'power'>('current');

const tooltip = ref({
  visible: false,
  x: 0,
  y: 0,
});

const yAxisLabel = computed(() => {
  return yMode.value === 'current' ? '输出电流 Iout (A)' : '输出功率 Pout (W)';
});

function setYMode(mode: 'current' | 'power') {
  yMode.value = mode;
  buildScene();
}

// Three.js instances
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;
let animationFrameId: number;
let raycaster: THREE.Raycaster;
let mouse: THREE.Vector2;

// Interactive bar meshes
interface BarMeshInfo {
  mesh: THREE.Mesh;
  point: MatrixPoint;
  baseY: number;
  targetElevation: number;
  currentElevation: number;
  targetScaleY: number;
  currentScaleY: number;
  fullHeight: number;
  material: THREE.MeshStandardMaterial;
  origColor: THREE.Color;
}

let barMeshList: BarMeshInfo[] = [];
let hoveredBar: BarMeshInfo | null = null;
let axesGroup: THREE.Group = new THREE.Group();
let barsGroup: THREE.Group = new THREE.Group();

// Efficiency to color gradient calculation
function getEfficiencyColor(eff: number): THREE.Color {
  // Normalized 0.0 ~ 1.0 (clamped between 60% and 98%)
  const minEff = 65;
  const maxEff = 96;
  const t = Math.max(0, Math.min(1, (eff - minEff) / (maxEff - minEff)));

  // Smooth rainbow/turbo gradient:
  // t=0 -> Red/Rose, t=0.35 -> Amber, t=0.65 -> Emerald/Green, t=0.85 -> Cyan, t=1.0 -> Violet
  const color = new THREE.Color();
  if (t < 0.25) {
    color.lerpColors(new THREE.Color(0xf43f5e), new THREE.Color(0xf97316), t / 0.25);
  } else if (t < 0.5) {
    color.lerpColors(new THREE.Color(0xf97316), new THREE.Color(0xeab308), (t - 0.25) / 0.25);
  } else if (t < 0.75) {
    color.lerpColors(new THREE.Color(0xeab308), new THREE.Color(0x10b981), (t - 0.5) / 0.25);
  } else if (t < 0.9) {
    color.lerpColors(new THREE.Color(0x10b981), new THREE.Color(0x06b6d4), (t - 0.75) / 0.15);
  } else {
    color.lerpColors(new THREE.Color(0x06b6d4), new THREE.Color(0x8b5cf6), (t - 0.9) / 0.1);
  }
  return color;
}

// Create 3D text sprite for labels
function createTextSprite(text: string, fontSize: number = 24, textColor: string = '#94a3b8') {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 128;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = 'transparent';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = `bold ${fontSize * 2}px "Fira Code", monospace`;
  ctx.fillStyle = textColor;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false });
  const sprite = new THREE.Sprite(spriteMat);
  sprite.scale.set(4, 1, 1);
  return sprite;
}

function initThree() {
  if (!mountRef.value) return;

  const width = mountRef.value.clientWidth;
  const height = mountRef.value.clientHeight;

  // Scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x070b14);
  scene.fog = new THREE.FogExp2(0x070b14, 0.015);

  // Camera
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(24, 22, 28);

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  mountRef.value.appendChild(renderer.domElement);

  // Controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.06;
  controls.maxPolarAngle = Math.PI / 2 - 0.02; // Don't go below ground
  controls.minDistance = 6;
  controls.maxDistance = 80;
  controls.target.set(0, 4, 0);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
  scene.add(ambientLight);

  const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.2);
  dirLight1.position.set(30, 40, 25);
  dirLight1.castShadow = true;
  dirLight1.shadow.mapSize.width = 1024;
  dirLight1.shadow.mapSize.height = 1024;
  scene.add(dirLight1);

  const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 0.6);
  dirLight2.position.set(-25, 20, -25);
  scene.add(dirLight2);

  const pointLight = new THREE.PointLight(0x10b981, 0.8, 50);
  pointLight.position.set(0, 15, 0);
  scene.add(pointLight);

  // Raycaster & Mouse
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2(-999, -999);

  scene.add(axesGroup);
  scene.add(barsGroup);

  // Event Listeners
  window.addEventListener('resize', onWindowResize);
  mountRef.value.addEventListener('mousemove', onMouseMove);
  mountRef.value.addEventListener('mouseleave', onMouseLeave);

  buildScene();
  animate();
}

function resetCamera() {
  if (!controls || !camera) return;
  camera.position.set(24, 22, 28);
  controls.target.set(0, 4, 0);
  controls.update();
}

function buildScene() {
  if (!scene) return;

  // Clear existing objects
  while (axesGroup.children.length > 0) {
    const obj = axesGroup.children[0];
    axesGroup.remove(obj);
  }
  while (barsGroup.children.length > 0) {
    const obj = barsGroup.children[0];
    barsGroup.remove(obj);
  }
  barMeshList = [];
  hoveredBar = null;
  hoveredPoint.value = null;
  tooltip.value.visible = false;

  const points = props.points;
  if (!points || points.length === 0) return;

  // Extract unique X (Vin) and Y (Load or Power)
  const vList = [...new Set(points.map((p) => p.voltageTarget))].sort((a, b) => a - b);
  const yValues = points.map((p) => (yMode.value === 'current' ? p.iout : p.pout));
  const yList = [...new Set(yValues.map((v) => Math.round(v * 10) / 10))].sort((a, b) => a - b);

  const numX = Math.max(1, vList.length);
  const numY = Math.max(1, yList.length);

  // Chart dimensions in 3D scene space
  const chartWidthX = 18;  // X span
  const chartDepthZ = 18;  // Z span (represented as Y in data)
  const maxHeightY = 10;   // Height corresponds to efficiency 0% ~ 100%

  const spacingX = numX > 1 ? chartWidthX / (numX - 1) : chartWidthX;
  const spacingZ = numY > 1 ? chartDepthZ / (numY - 1) : chartDepthZ;

  const barWidth = Math.min(1.2, (chartWidthX / numX) * 0.65);
  const barDepth = Math.min(1.2, (chartDepthZ / numY) * 0.65);

  // 1. Grid Floor
  const gridHelper = new THREE.GridHelper(Math.max(chartWidthX, chartDepthZ) + 4, Math.max(numX, numY) + 2, 0x0284c7, 0x1e293b);
  gridHelper.position.set(0, 0, 0);
  axesGroup.add(gridHelper);

  // Subtle floor reflective plane
  const floorGeo = new THREE.PlaneGeometry(36, 36);
  const floorMat = new THREE.MeshStandardMaterial({
    color: 0x0b1120,
    roughness: 0.7,
    metalness: 0.1,
  });
  const floorMesh = new THREE.Mesh(floorGeo, floorMat);
  floorMesh.rotation.x = -Math.PI / 2;
  floorMesh.position.y = -0.05;
  floorMesh.receiveShadow = true;
  axesGroup.add(floorMesh);

  // 2. Coordinate Axes Lines & Labels
  const axisMat = new THREE.LineBasicMaterial({ color: 0x38bdf8, linewidth: 2 });

  // X Axis Line (Input Voltage Vin)
  const xGeo = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-chartWidthX / 2 - 1, 0, chartDepthZ / 2 + 1),
    new THREE.Vector3(chartWidthX / 2 + 2, 0, chartDepthZ / 2 + 1),
  ]);
  axesGroup.add(new THREE.Line(xGeo, axisMat));

  const xLabel = createTextSprite('X: 输入电压 Vin (V)', 22, '#38bdf8');
  xLabel.position.set(0, 0.4, chartDepthZ / 2 + 2.8);
  xLabel.scale.set(7, 1.8, 1);
  axesGroup.add(xLabel);

  // X Ticks
  vList.forEach((v, idx) => {
    const posX = -chartWidthX / 2 + idx * spacingX;
    const tickSprite = createTextSprite(`${v}V`, 16, '#94a3b8');
    tickSprite.position.set(posX, 0.2, chartDepthZ / 2 + 1.8);
    tickSprite.scale.set(3, 0.9, 1);
    axesGroup.add(tickSprite);
  });

  // Z Axis in 3D (Y in Data: Output Current/Power)
  const zGeo = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-chartWidthX / 2 - 1, 0, -chartDepthZ / 2 - 1),
    new THREE.Vector3(-chartWidthX / 2 - 1, 0, chartDepthZ / 2 + 2),
  ]);
  axesGroup.add(new THREE.Line(zGeo, axisMat));

  const zLabel = createTextSprite(
    yMode.value === 'current' ? 'Y: 负载电流 Iout (A)' : 'Y: 输出功率 Pout (W)',
    22,
    '#f59e0b'
  );
  zLabel.position.set(-chartWidthX / 2 - 3.2, 0.4, 0);
  zLabel.scale.set(8, 2, 1);
  axesGroup.add(zLabel);

  // Y Ticks
  yList.forEach((val, idx) => {
    const posZ = -chartDepthZ / 2 + idx * spacingZ;
    const tickSprite = createTextSprite(
      yMode.value === 'current' ? `${val}A` : `${val}W`,
      16,
      '#94a3b8'
    );
    tickSprite.position.set(-chartWidthX / 2 - 1.8, 0.2, posZ);
    tickSprite.scale.set(3, 0.9, 1);
    axesGroup.add(tickSprite);
  });

  // Vertical Height Axis (Efficiency η: 0 ~ 100%)
  const yAxisGeo = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-chartWidthX / 2 - 1, 0, chartDepthZ / 2 + 1),
    new THREE.Vector3(-chartWidthX / 2 - 1, maxHeightY + 1.5, chartDepthZ / 2 + 1),
  ]);
  axesGroup.add(new THREE.Line(yAxisGeo, axisMat));

  const vertLabel = createTextSprite('Z: 转换效率 η (%)', 22, '#10b981');
  vertLabel.position.set(-chartWidthX / 2 - 1, maxHeightY + 2.2, chartDepthZ / 2 + 1);
  vertLabel.scale.set(7, 1.8, 1);
  axesGroup.add(vertLabel);

  // Efficiency Height Ticks
  [20, 40, 60, 80, 100].forEach((effVal) => {
    const h = (effVal / 100) * maxHeightY;
    const tickSprite = createTextSprite(`${effVal}%`, 16, '#6ee7b7');
    tickSprite.position.set(-chartWidthX / 2 - 2, h, chartDepthZ / 2 + 1);
    tickSprite.scale.set(2.8, 0.8, 1);
    axesGroup.add(tickSprite);

    // Subtle horizontal reference line
    const refLineGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-chartWidthX / 2 - 0.8, h, chartDepthZ / 2 + 1),
      new THREE.Vector3(-chartWidthX / 2 - 0.2, h, chartDepthZ / 2 + 1),
    ]);
    axesGroup.add(new THREE.Line(refLineGeo, axisMat));
  });

  // 3. Create 3D Bars for Each Measurement Point
  points.forEach((pt) => {
    const vIdx = vList.indexOf(pt.voltageTarget);
    const yVal = Math.round((yMode.value === 'current' ? pt.iout : pt.pout) * 10) / 10;
    let yIdx = yList.indexOf(yVal);
    if (yIdx === -1) yIdx = 0;

    const posX = -chartWidthX / 2 + (vIdx >= 0 ? vIdx : 0) * spacingX;
    const posZ = -chartDepthZ / 2 + yIdx * spacingZ;

    // Height scaled by efficiency (0% - 100% maps to 0.1 ~ maxHeightY)
    const eff = Math.max(1, Math.min(100, pt.efficiency));
    const fullHeight = Math.max(0.2, (eff / 100) * maxHeightY);

    // Bar Geometry: Rounded edges look modern
    const boxGeo = new THREE.BoxGeometry(barWidth, fullHeight, barDepth);
    // Shift geometry origin so bottom of bar is at y = 0
    boxGeo.translate(0, fullHeight / 2, 0);

    const barColor = getEfficiencyColor(eff);
    const barMat = new THREE.MeshStandardMaterial({
      color: barColor,
      roughness: 0.35,
      metalness: 0.25,
      emissive: barColor,
      emissiveIntensity: 0.12,
    });

    const mesh = new THREE.Mesh(boxGeo, barMat);
    mesh.position.set(posX, 0, posZ);
    mesh.castShadow = true;
    mesh.receiveShadow = true;

    // Store custom payload for raycasting and hover animation
    (mesh as any).__barPoint = pt;

    // Wireframe edge highlight
    const edgesGeo = new THREE.EdgesGeometry(boxGeo);
    const edgesMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.25 });
    const wireframe = new THREE.LineSegments(edgesGeo, edgesMat);
    mesh.add(wireframe);

    barsGroup.add(mesh);

    // Animation initial state: start with scale Y = 0 (entrance ripple effect)
    mesh.scale.set(1, 0.01, 1);

    barMeshList.push({
      mesh,
      point: pt,
      baseY: 0,
      targetElevation: 0,
      currentElevation: 0,
      targetScaleY: 1.0,
      currentScaleY: 0.01,
      fullHeight,
      material: barMat,
      origColor: barColor.clone(),
    });
  });
}

function onMouseMove(event: MouseEvent) {
  if (!mountRef.value) return;
  const rect = mountRef.value.getBoundingClientRect();
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

  tooltip.value.x = event.clientX - rect.left;
  tooltip.value.y = event.clientY - rect.top;
}

function onMouseLeave() {
  mouse.x = -999;
  mouse.y = -999;
  tooltip.value.visible = false;
  if (hoveredBar) {
    restoreHoveredBar();
  }
}

function restoreHoveredBar() {
  if (!hoveredBar) return;
  hoveredBar.targetElevation = 0;
  hoveredBar.material.emissive.copy(hoveredBar.origColor);
  hoveredBar.material.emissiveIntensity = 0.12;
  hoveredBar = null;
  hoveredPoint.value = null;
  tooltip.value.visible = false;
}

function updateHover() {
  if (!camera || !scene || barMeshList.length === 0) return;

  raycaster.setFromCamera(mouse, camera);
  const meshes = barMeshList.map((b) => b.mesh);
  const intersects = raycaster.intersectObjects(meshes, false);

  if (intersects.length > 0) {
    const hitMesh = intersects[0].object as THREE.Mesh;
    const barInfo = barMeshList.find((b) => b.mesh === hitMesh);

    if (barInfo && barInfo !== hoveredBar) {
      if (hoveredBar) {
        restoreHoveredBar();
      }

      hoveredBar = barInfo;
      hoveredPoint.value = barInfo.point;
      tooltip.value.visible = true;

      // Elevated upward animation: raise by 1.2 units
      barInfo.targetElevation = 1.2;

      // Highlight with glowing emissive white/cyan
      barInfo.material.emissive.set(0x38bdf8);
      barInfo.material.emissiveIntensity = 0.65;
    }
  } else {
    if (hoveredBar) {
      restoreHoveredBar();
    }
  }
}

function animate() {
  animationFrameId = requestAnimationFrame(animate);

  // Update controls
  if (controls) controls.update();

  // Hover detection
  updateHover();

  // Smooth lerp animations for bar entrance and hover elevation
  barMeshList.forEach((bar) => {
    // 1. Entrance height animation
    bar.currentScaleY += (bar.targetScaleY - bar.currentScaleY) * 0.1;
    bar.mesh.scale.y = bar.currentScaleY;

    // 2. Hover elevation animation (lerp upward on hover, down on leave)
    bar.currentElevation += (bar.targetElevation - bar.currentElevation) * 0.15;
    bar.mesh.position.y = bar.baseY + bar.currentElevation;
  });

  if (renderer && scene && camera) {
    renderer.render(scene, camera);
  }
}

function onWindowResize() {
  if (!mountRef.value || !renderer || !camera) return;
  const width = mountRef.value.clientWidth;
  const height = mountRef.value.clientHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

watch(
  () => props.points,
  () => {
    buildScene();
  },
  { deep: true }
);

onMounted(() => {
  initThree();
});

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId);
  window.removeEventListener('resize', onWindowResize);
  if (renderer && renderer.domElement) {
    renderer.domElement.remove();
    renderer.dispose();
  }
});
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.2s ease-out forwards;
}
</style>
