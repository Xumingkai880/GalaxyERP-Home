<template>
  <section class="pain section" id="pain">
    <div class="container">
      <h2 class="section-title anim">做 POD 跨境，<br>你是不是也遇到了这些？</h2>
      <div class="pain-carousel-wrap anim">
        <el-carousel
          :interval="4000"
          arrow="hover"
          indicator-position="outside"
          class="pain-carousel"
        >
          <el-carousel-item v-for="item in slides" :key="item.id">
            <div class="pain-slide" :style="{ '--accent': item.color, '--accent-light': item.colorLight, '--accent-bg': item.colorBg }">
              <!-- SVG 插图区 16:9 -->
              <div class="pain-slide-visual">
                <svg viewBox="0 0 960 540" preserveAspectRatio="xMidYMid meet" v-html="item.svg"></svg>
              </div>
              <!-- 文字区（底部安全区） -->
              <div class="pain-slide-text">
                <h3>{{ item.title }}</h3>
                <p>{{ item.desc }}</p>
                <div class="pain-slide-dot" :style="{ background: item.color }"></div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </section>
</template>

<script setup>
const slides = [
  {
    id: 1,
    title: '多平台订单混乱',
    desc: 'Shopee、TikTok、Temu……每个平台登录一遍，订单分散处理效率极低',
    color: '#4F6DFF',
    colorLight: '#7B8CFF',
    colorBg: 'rgba(79,109,255,.06)',
    svg: `<!-- 多平台图标堆叠 + 混乱箭头 -->
      <rect width="960" height="540" fill="transparent"/>
      <!-- 背景网格 -->
      <g opacity=".06">
        <line x1="0" y1="90" x2="960" y2="90" stroke="#4F6DFF" stroke-width="1"/>
        <line x1="0" y1="180" x2="960" y2="180" stroke="#4F6DFF" stroke-width="1"/>
        <line x1="0" y1="270" x2="960" y2="270" stroke="#4F6DFF" stroke-width="1"/>
        <line x1="0" y1="360" x2="960" y2="360" stroke="#4F6DFF" stroke-width="1"/>
        <line x1="0" y1="450" x2="960" y2="450" stroke="#4F6DFF" stroke-width="1"/>
        <line x1="160" y1="0" x2="160" y2="540" stroke="#4F6DFF" stroke-width="1"/>
        <line x1="320" y1="0" x2="320" y2="540" stroke="#4F6DFF" stroke-width="1"/>
        <line x1="480" y1="0" x2="480" y2="540" stroke="#4F6DFF" stroke-width="1"/>
        <line x1="640" y1="0" x2="640" y2="540" stroke="#4F6DFF" stroke-width="1"/>
        <line x1="800" y1="0" x2="800" y2="540" stroke="#4F6DFF" stroke-width="1"/>
      </g>
      <!-- 左侧平台列 -->
      <g transform="translate(280,160)">
        <rect x="0" y="0" width="100" height="44" rx="8" fill="#EE4D2D" opacity=".9"/>
        <text x="50" y="28" text-anchor="middle" fill="white" font-size="12" font-weight="700" font-family="sans-serif">Shopee</text>
      </g>
      <g transform="translate(280,224)">
        <rect x="0" y="0" width="100" height="44" rx="8" fill="#010101" opacity=".9"/>
        <text x="50" y="28" text-anchor="middle" fill="white" font-size="12" font-weight="700" font-family="sans-serif">TikTok</text>
      </g>
      <g transform="translate(280,288)">
        <rect x="0" y="0" width="100" height="44" rx="8" fill="#FF6B35" opacity=".9"/>
        <text x="50" y="28" text-anchor="middle" fill="white" font-size="12" font-weight="700" font-family="sans-serif">Temu</text>
      </g>
      <!-- 混乱箭头（右侧上下交错） -->
      <g stroke="#4F6DFF" stroke-width="2.5" fill="none" opacity=".5" stroke-linecap="round">
        <path d="M390 182 Q460 182 470 210 Q480 240 560 240"/>
        <polyline points="555,234 565,240 555,246" fill="#4F6DFF" stroke="none"/>
        <path d="M390 246 Q470 246 480 270 Q490 300 560 300"/>
        <polyline points="555,294 565,300 555,306" fill="#4F6DFF" stroke="none"/>
        <path d="M390 310 Q440 310 450 340 Q460 370 560 370"/>
        <polyline points="555,364 565,370 555,376" fill="#4F6DFF" stroke="none"/>
      </g>
      <!-- 右下集中点（混乱箭头汇聚） -->
      <g transform="translate(570,205)">
        <circle cx="0" cy="0" r="8" fill="#4F6DFF" opacity=".15"/>
        <circle cx="0" cy="0" r="5" fill="#4F6DFF" opacity=".3"/>
      </g>
      <!-- 右上角问号 -->
      <text x="680" y="180" text-anchor="middle" font-size="64" font-weight="300" fill="#4F6DFF" opacity=".15">?</text>
      <text x="720" y="300" text-anchor="middle" font-size="48" font-weight="300" fill="#4F6DFF" opacity=".1">?</text>
      <text x="640" y="400" text-anchor="middle" font-size="36" font-weight="300" fill="#4F6DFF" opacity=".08">?</text>`,
  },
  {
    id: 2,
    title: '生产进度不可见',
    desc: '生产进度不透明，客户催单难回应，工厂做了多少、什么时候能发货全靠猜',
    color: '#F59E0B',
    colorLight: '#F7B84E',
    colorBg: 'rgba(245,158,11,.06)',
    svg: `<!-- 进度条模糊 + 问号 -->
      <rect width="960" height="540" fill="transparent"/>
      <!-- 背景虚点 -->
      <g fill="#F59E0B" opacity=".06">
        <circle cx="120" cy="100" r="3"/><circle cx="240" cy="150" r="3"/><circle cx="360" cy="80" r="3"/>
        <circle cx="500" cy="130" r="3"/><circle cx="640" cy="90" r="3"/><circle cx="780" cy="140" r="3"/>
        <circle cx="160" cy="380" r="3"/><circle cx="300" cy="420" r="3"/><circle cx="460" cy="390" r="3"/>
        <circle cx="600" cy="430" r="3"/><circle cx="750" cy="370" r="3"/>
      </g>
      <!-- 三根模糊进度条 -->
      <g>
        <!-- 进度条1 - 60% 模糊 -->
        <rect x="200" y="160" width="560" height="14" rx="7" fill="rgba(245,158,11,.1)"/>
        <rect x="200" y="160" width="336" height="14" rx="7" fill="rgba(245,158,11,.25)"/>
        <!-- 进度条1 右侧模糊渐变 -->
        <rect x="480" y="160" width="56" height="14" rx="7" fill="url(#grad1)"/>
        <!-- 进度条2 - 40% -->
        <rect x="200" y="210" width="560" height="14" rx="7" fill="rgba(245,158,11,.1)"/>
        <rect x="200" y="210" width="224" height="14" rx="7" fill="rgba(245,158,11,.25)"/>
        <rect x="380" y="210" width="56" height="14" rx="7" fill="url(#grad1)"/>
        <!-- 进度条3 - 大问号替代 -->
        <rect x="200" y="260" width="560" height="14" rx="7" fill="rgba(245,158,11,.1)"/>
        <rect x="200" y="260" width="100" height="14" rx="7" fill="rgba(245,158,11,.25)"/>
        <rect x="256" y="260" width="56" height="14" rx="7" fill="url(#grad1)"/>
        <text x="580" y="272" text-anchor="middle" font-size="40" font-weight="700" fill="#F59E0B" opacity=".3">?</text>
      </g>
      <!-- 渐变定义 -->
      <defs>
        <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#F59E0B" stop-opacity=".25"/>
          <stop offset="100%" stop-color="#F59E0B" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <!-- 左侧工厂图标 -->
      <g transform="translate(120,155)" opacity=".2" fill="none" stroke="#F59E0B" stroke-width="2">
        <path d="M30 100 L30 60 L60 30 L90 60 L90 100" stroke-linejoin="round"/>
        <rect x="35" y="65" width="50" height="35" rx="2"/>
        <line x1="50" y1="65" x2="50" y2="100"/>
        <line x1="70" y1="65" x2="70" y2="100"/>
        <rect x="45" y="40" width="12" height="20" rx="2"/>
        <rect x="63" y="40" width="12" height="20" rx="2"/>
        <path d="M10 100 L110 100" stroke-width="3"/>
        <rect x="35" y="75" width="15" height="12" fill="#F59E0B" opacity=".5" rx="1"/>
        <rect x="53" y="75" width="15" height="12" fill="#F59E0B" opacity=".5" rx="1"/>
      </g>
      <!-- 右侧问号大图标 -->
      <text x="750" y="210" text-anchor="middle" font-size="90" font-weight="300" fill="#F59E0B" opacity=".15">?</text>
      <!-- 虚线连接进度条 -->
      <g stroke="#F59E0B" stroke-width="1.5" stroke-dasharray="6,4" opacity=".2">
        <line x1="760" y1="167" x2="830" y2="260"/>
        <line x1="760" y1="217" x2="830" y2="260"/>
        <line x1="760" y1="267" x2="830" y2="260"/>
      </g>`,
  },
  {
    id: 3,
    title: '库存数据脱节',
    desc: '爆款断货错过黄金期，滞销品堆积占用资金，销量和库存永远对不上',
    color: '#10B981',
    colorLight: '#2ED8A3',
    colorBg: 'rgba(16,185,129,.06)',
    svg: `<!-- 销量向上 + 库存向下 对比 -->
      <rect width="960" height="540" fill="transparent"/>
      <!-- 背景装饰圆 -->
      <circle cx="680" cy="100" r="180" fill="rgba(16,185,129,.03)"/>
      <circle cx="680" cy="100" r="120" fill="rgba(16,185,129,.04)"/>
      <circle cx="280" cy="420" r="160" fill="rgba(239,68,68,.03)"/>
      <circle cx="280" cy="420" r="110" fill="rgba(239,68,68,.04)"/>
      <!-- 左侧：销量趋势（绿色向上） -->
      <g transform="translate(120,80)">
        <text x="0" y="0" font-size="14" font-weight="600" fill="#10B981" font-family="sans-serif">销量趋势</text>
        <!-- 坐标轴 -->
        <line x1="0" y1="40" x2="0" y2="320" stroke="#10B981" stroke-width="1" opacity=".2"/>
        <line x1="0" y1="320" x2="320" y2="320" stroke="#10B981" stroke-width="1" opacity=".2"/>
        <!-- 向上的绿色面积 -->
        <path d="M0 320 L0 280 Q40 260 80 240 Q120 200 160 170 Q200 140 240 100 Q280 60 320 40 L320 320 Z" fill="rgba(16,185,129,.15)"/>
        <path d="M0 280 Q40 260 80 240 Q120 200 160 170 Q200 140 240 100 Q280 60 320 40" fill="none" stroke="#10B981" stroke-width="3" stroke-linecap="round"/>
        <!-- 箭头 -->
        <polygon points="310,45 320,35 305,35" fill="#10B981"/>
        <!-- 柱形 -->
        <rect x="60" y="240" width="16" height="80" rx="3" fill="#10B981" opacity=".3"/>
        <rect x="100" y="200" width="16" height="120" rx="3" fill="#10B981" opacity=".4"/>
        <rect x="140" y="160" width="16" height="160" rx="3" fill="#10B981" opacity=".5"/>
        <rect x="220" y="120" width="16" height="200" rx="3" fill="#10B981" opacity=".6"/>
        <rect x="260" y="80" width="16" height="240" rx="3" fill="#10B981" opacity=".7"/>
      </g>
      <!-- 右侧：库存趋势（红色向下） -->
      <g transform="translate(520,80)">
        <text x="0" y="0" font-size="14" font-weight="600" fill="#EF4444" font-family="sans-serif">库存趋势</text>
        <line x1="0" y1="40" x2="0" y2="320" stroke="#EF4444" stroke-width="1" opacity=".2"/>
        <line x1="0" y1="320" x2="320" y2="320" stroke="#EF4444" stroke-width="1" opacity=".2"/>
        <path d="M0 40 L0 70 Q40 90 80 130 Q120 180 160 220 Q200 260 240 290 Q280 310 320 320 L320 320 Z" fill="rgba(239,68,68,.15)"/>
        <path d="M0 70 Q40 90 80 130 Q120 180 160 220 Q200 260 240 290 Q280 310 320 320" fill="none" stroke="#EF4444" stroke-width="3" stroke-linecap="round"/>
        <polygon points="310,315 320,325 305,325" fill="#EF4444"/>
        <rect x="60" y="220" width="16" height="100" rx="3" fill="#EF4444" opacity=".3"/>
        <rect x="100" y="240" width="16" height="80" rx="3" fill="#EF4444" opacity=".4"/>
        <rect x="140" y="260" width="16" height="60" rx="3" fill="#EF4444" opacity=".5"/>
        <rect x="220" y="290" width="16" height="30" rx="3" fill="#EF4444" opacity=".6"/>
        <rect x="260" y="300" width="16" height="20" rx="3" fill="#EF4444" opacity=".7"/>
      </g>
      <!-- 中间冲突符号 -->
      <g transform="translate(480,240)">
        <circle cx="0" cy="0" r="24" fill="rgba(239,68,68,.1)" stroke="#EF4444" stroke-width="2" opacity=".5"/>
        <line x1="-10" y1="-10" x2="10" y2="10" stroke="#EF4444" stroke-width="2.5" opacity=".5" stroke-linecap="round"/>
        <line x1="10" y1="-10" x2="-10" y2="10" stroke="#EF4444" stroke-width="2.5" opacity=".5" stroke-linecap="round"/>
      </g>`,
  },
  {
    id: 4,
    title: '全链路信息断裂',
    desc: '设计、打样、生产、质检、发货各环节各自为战，信息黑洞到处都是',
    color: '#8B5CF6',
    colorLight: '#B9A0FF',
    colorBg: 'rgba(139,92,246,.06)',
    svg: `<!-- 断开的链条 / 虚线箭头 -->
      <rect width="960" height="540" fill="transparent"/>
      <!-- 环形连接节点 -->
      <g>
        <!-- 节点1 -->
        <g transform="translate(100,270)">
          <circle cx="0" cy="0" r="32" fill="rgba(139,92,246,.1)" stroke="#8B5CF6" stroke-width="2.5"/>
          <text x="0" y="5" text-anchor="middle" font-size="11" font-weight="700" fill="#8B5CF6" font-family="sans-serif">设计</text>
        </g>
        <!-- 节点2 -->
        <g transform="translate(260,270)">
          <circle cx="0" cy="0" r="32" fill="rgba(139,92,246,.1)" stroke="#8B5CF6" stroke-width="2.5"/>
          <text x="0" y="5" text-anchor="middle" font-size="11" font-weight="700" fill="#8B5CF6" font-family="sans-serif">打样</text>
        </g>
        <!-- 断开处 -->
        <g transform="translate(380,270)">
          <circle cx="0" cy="0" r="16" fill="rgba(239,68,68,.1)" stroke="#EF4444" stroke-width="1.5" stroke-dasharray="4,3"/>
          <text x="0" y="3" text-anchor="middle" font-size="14" fill="#EF4444" opacity=".6">!</text>
        </g>
        <!-- 节点3 -->
        <g transform="translate(460,270)">
          <circle cx="0" cy="0" r="32" fill="rgba(139,92,246,.1)" stroke="#8B5CF6" stroke-width="2.5"/>
          <text x="0" y="5" text-anchor="middle" font-size="11" font-weight="700" fill="#8B5CF6" font-family="sans-serif">生产</text>
        </g>
        <!-- 断开处 -->
        <g transform="translate(580,270)">
          <circle cx="0" cy="0" r="16" fill="rgba(239,68,68,.1)" stroke="#EF4444" stroke-width="1.5" stroke-dasharray="4,3"/>
          <text x="0" y="3" text-anchor="middle" font-size="14" fill="#EF4444" opacity=".6">!</text>
        </g>
        <!-- 节点4 -->
        <g transform="translate(660,270)">
          <circle cx="0" cy="0" r="32" fill="rgba(139,92,246,.1)" stroke="#8B5CF6" stroke-width="2.5"/>
          <text x="0" y="5" text-anchor="middle" font-size="11" font-weight="700" fill="#8B5CF6" font-family="sans-serif">质检</text>
        </g>
        <!-- 断开处 -->
        <g transform="translate(780,270)">
          <circle cx="0" cy="0" r="16" fill="rgba(239,68,68,.1)" stroke="#EF4444" stroke-width="1.5" stroke-dasharray="4,3"/>
          <text x="0" y="3" text-anchor="middle" font-size="14" fill="#EF4444" opacity=".6">!</text>
        </g>
        <!-- 节点5 -->
        <g transform="translate(860,270)">
          <circle cx="0" cy="0" r="32" fill="rgba(139,92,246,.1)" stroke="#8B5CF6" stroke-width="2.5"/>
          <text x="0" y="5" text-anchor="middle" font-size="11" font-weight="700" fill="#8B5CF6" font-family="sans-serif">发货</text>
        </g>
      </g>
      <!-- 连接线（实线+虚线+断裂） -->
      <g stroke="#8B5CF6" stroke-width="2" opacity=".4" fill="none">
        <line x1="132" y1="270" x2="228" y2="270"/>
        <line x1="292" y1="270" x2="354" y2="270" stroke-dasharray="8,4"/>
        <line x1="410" y1="270" x2="428" y2="270"/>
        <line x1="492" y1="270" x2="554" y2="270" stroke-dasharray="8,4"/>
        <line x1="610" y1="270" x2="628" y2="270"/>
        <line x1="692" y1="270" x2="754" y2="270" stroke-dasharray="8,4"/>
        <line x1="810" y1="270" x2="828" y2="270"/>
      </g>
      <!-- 环形断链 SVG（上方装饰） -->
      <g transform="translate(480,110)" fill="none" stroke="#8B5CF6" stroke-width="2.5" opacity=".15">
        <path d="M-60 0 Q-60 -40 0 -40 Q60 -40 60 0"/>
        <path d="M60 0 Q60 30 30 50" stroke-dasharray="6,3"/>
      </g>
      <!-- 信息黑洞 -->
      <g opacity=".08">
        <circle cx="380" cy="140" r="30" fill="#8B5CF6"/>
        <circle cx="580" cy="400" r="24" fill="#8B5CF6"/>
        <circle cx="760" cy="150" r="20" fill="#8B5CF6"/>
      </g>`,
  },
]
</script>

