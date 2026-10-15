# 电源转换芯片效率测试系统 (Vue 3 + Web Serial + Three.js 3D Edition)

> 基于 **Vue 3 + TypeScript + Three.js + Web Serial API + IndexedDB** 构建的纯静态工业级电源转换芯片效率全自动矩阵扫描与 3D 空间图谱分析系统。  
> **100% 静态构建**，支持开箱即用直接部署至 **Cloudflare Pages**、**Vercel**、**Netlify** 或任意静态托管服务。

---

## 🌟 核心特性与架构设计

### 1. 2D 双向全自动矩阵效率扫描 (Dual-Parameter Matrix Sweep)
- **输入电压扫描范围 (Vin)**：
  - 起始电压 (下限 $V_{min}$)、终止电压 (上限 $V_{max}$)、扫描步长 ($Step_V$)、输入安全限流 ($I_{limit}$)。
- **负载扫描范围 (Load)**：
  - 起始负载、终止负载、步长。
  - **模式自由切换**：支持 **CC (恒流 A)** 与 **CW (恒功率 W)** 两种扫描模式。
- **高频稳态采样与瞬态过滤**：
  - 自动抑制各步换档初始与结束的瞬态噪声，确保稳态均值高精度。
- **自动化执行生命周期**：
  - 嵌套双循环全自动执行，支持中途 **暂停 (Pause)**、**继续 (Resume)** 与 **急停安全卸载 (Emergency Stop)**。

### 2. 浏览器原生串口通信 (Web Serial API) & 内置仿真驱动
- **免安装驱动与后端**：
  - 在 Chrome / Edge 浏览器中直接调用 `navigator.serial`，原生访问硬件 COM 口。
  - 支持设置波特率 (9600 / 19200 / 38400 / 115200)。
- **高保真内置仿真驱动 (Virtual Mode)**：
  - 内置 `VIRTUAL_DP700` (直流电源) 与 `VIRTUAL_UTL8500` (可编程负载) 仿真驱动。
  - 即使在 Safari、Firefox 或未插入物理仪器的机器上，也能一键体验全自动扫描与 3D 动画。

### 3. 本地 IndexedDB 智能持久化 (保存最近 5 条测试)
- 测试结束后，完整矩阵数据与配置自动持久化到浏览器的 **IndexedDB** 数据库中。
- 系统自动执行 LRU 滚动修剪，**始终保留最近 5 条测试数据**。
- 提供侧边抽屉历史列表，支持随时回顾历史数据、一键重新打开 3D 可视化、独立下载历史 CSV。

### 4. 测试完成新窗口独立 3D 空间图谱展现 (Dedicated 3D Result Window)
- **URL 独立驱动**：
  - 测试完成后，控制台仍旧保持完整的 2D 效率表格与仪器状态；
  - 自动调用 `window.open('#/result/' + id, '_blank')` 打开一个全新的独立可视化窗口。
- **Three.js 交互式 3D 柱状图**：
  - **三维坐标系**：
    - $X$ 轴：输入电压 $V_{in}$ (V)
    - $Y$ 轴：输出电流 $I_{out}$ (A) 或 输出功率 $P_{out}$ (W) —— 支持在页面右上角一键切换模式 A 与模式 B！
    - $Z$ 轴 (高度)：转换效率 $\eta = (P_{out} / P_{in}) \times 100\%$
  - **平滑入场生长动画**：进入时柱体从地平面按物理效率比例平滑升起。
  - **鼠标悬停浮动动画 (Hover Elevation)**：
    - 鼠标移动至任意柱体时，**该柱体自动向上平滑浮起 (Elevation)** 并触发发光高亮与线框聚焦。
    - **顶部数据一览栏** 同步实时显示此点的完整精细数据：  
      `Vin | Iin | Pin | Vout | Iout | Pout | 转换效率 η`
    - 柱体上方同时浮现 3D 跟随 Tooltip 卡片。
  - **自由视点控制 (OrbitControls)**：
    - 鼠标左键拖拽旋转视角、滚轮无级缩放、右键平移、一键复位初始视角。

### 5. 浏览器原生文件导出 (CSV Download)
- 点击【导出 CSV】，浏览器直接生成标准 CSV 文件并触发下载。
- 内置 **UTF-8 BOM** 头，在 Windows Excel 中直接双击打开绝不乱码。
- 报告中同时包含 **2D 转换效率矩阵概览表** 与 **全部采样点明细表**。

---

## 📁 项目目录结构

```
vue/
├── dist/                      # 编译生成的静态部署文件 (纯 HTML/JS/CSS)
├── public/                    # 静态资产
├── src/
│   ├── assets/
│   ├── components/            # UI 组件库
│   │   ├── DashboardMetrics.vue    # 实时仪器遥测仪表盘
│   │   ├── HeaderNav.vue           # 顶部导航与硬件状态指示
│   │   ├── HistoryDrawer.vue       # IndexedDB 5条历史记录抽屉
│   │   ├── MatrixTable.vue         # 2D 双向效率矩阵表 & 步进明细表
│   │   ├── SerialConfigModal.vue   # Web Serial 串口配置对话框
│   │   ├── SweepConfigCard.vue     # 2D 扫描参数设定与启停控制卡片
│   │   └── ThreeBarChart.vue       # Three.js 交互式 3D 柱状图核心组件
│   ├── router/
│   │   └── index.ts                # Hash 模式路由 (/ 与 /result/:id)
│   ├── serial/                     # 串口与仿真驱动
│   │   ├── SCPIProtocol.ts         # DP700 / UTL8500 SCPI 指令集
│   │   ├── VirtualDevices.ts       # 高保真仪器电路数学仿真模型
│   │   └── WebSerialManager.ts     # 浏览器 Web Serial API 调度器
│   ├── storage/
│   │   └── indexedDB.ts            # IndexedDB 存储与最近5条自动修剪
│   ├── types/
│   │   └── test.ts                 # 接口定义 (MatrixPoint, TestRecord 等)
│   ├── utils/
│   │   └── csvExport.ts            # 兼容 Excel 的 CSV 导出引擎
│   ├── views/
│   │   ├── ConsoleView.vue         # 控制台工作台主页面
│   │   └── Result3DView.vue        # 独立新窗口 3D 效率展示页面
│   ├── App.vue
│   ├── main.ts
│   └── style.css                   # 暗色工业流光玻璃拟态主题
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🚀 本地开发与调试

### 1. 安装依赖
```bash
cd vue
npm install
```

### 2. 启动本地开发服务
```bash
npm run dev
```
启动后在浏览器打开 `http://localhost:5173` 即可。

### 3. 构建生产环境静态资产
```bash
npm run build
```
执行后将在 `vue/dist/` 目录下生成打包完成的纯静态文件。

---

## ☁️ 部署到 Cloudflare Pages

本项目是纯前端静态单页应用（SPA），配合 Hash 路由，天生适配各类无服务器静态托管。

### 方式 A：通过 Cloudflare Pages 控制台 Git 关联 (推荐)
1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)，进入 **Workers & Pages** -> **Create application** -> **Pages**。
2. 关联您的 GitHub / GitLab 仓库。
3. 在构建设置 (Build settings) 中配置：
   - **Framework preset (框架预设)**: `Vite` (或 None)
   - **Build command (构建命令)**: `npm run build`
   - **Build output directory (输出目录)**: `dist`
   - **Root directory (根目录)**: `vue` (若仓库根目录就是 vue，则留空)
4. 点击 **Save and Deploy**，数秒内即可完成全球 CDN 部署！

### 方式 B：通过 Wrangler 命令行直接上传
在本地执行：
```bash
cd vue
npm run build
npx wrangler pages deploy dist --project-name power-chip-tester
```

### 方式 C：控制台直接拖拽部署 (Direct Upload)
1. 在本地运行 `npm run build`。
2. 在 Cloudflare Pages 中选择 **Upload assets**。
3. 直接将 `vue/dist` 文件夹拖拽上传即可上线！

---

## 🖥️ 浏览器兼容性说明

| 功能特性 | Chrome / Edge (Chromium) | Firefox | Safari / iOS |
|---|---|---|---|
| **3D 柱状图与动画 (Three.js)** | ✅ 完全支持 | ✅ 完全支持 | ✅ 完全支持 |
| **IndexedDB 最近5条存储** | ✅ 完全支持 | ✅ 完全支持 | ✅ 完全支持 |
| **独立新窗口数据联动** | ✅ 完全支持 | ✅ 完全支持 | ✅ 完全支持 |
| **CSV 报告直接下载** | ✅ 完全支持 | ✅ 完全支持 | ✅ 完全支持 |
| **内置仿真测试驱动 (Virtual)** | ✅ 完全支持 | ✅ 完全支持 | ✅ 完全支持 |
| **物理硬件 COM 访问 (Web Serial)** | ✅ 完全支持 (推荐) | 需通过仿真驱动 | 需通过仿真驱动 |

> **提示**：如需直连物理 DP700 / UTL8500 硬件设备，请使用 **Google Chrome** 或 **Microsoft Edge** 浏览器，并在弹出的浏览器硬件权限框中允许串口访问。若使用无串口设备环境，点击 **【一键启用仿真驱动】** 即可体验完整功能。
