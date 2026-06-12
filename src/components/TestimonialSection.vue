<template>
  <section class="testimonial-section section" id="testimonials">
    <div class="container">
      <h2 class="section-title anim">客户怎么说</h2>
      <div class="testimonial-thread anim">
        <div class="testimonial-comment" v-for="(t, i) in comments" :key="i">
          <div class="testimonial-bar" :class="'bar-' + (i % 3)"></div>
          <div class="testimonial-body">
            <div class="testimonial-quote">
              <svg class="testimonial-quote-svg" viewBox="0 0 24 24" fill="none">
                <path d="M10 11H6V7h4V4h3v7l-2 9h-3l2-9zM18 11h-4V7h4V4h3v7l-2 9h-3l2-9z" :fill="t.color"/>
              </svg>
              <p>{{ t.quote }}</p>
            </div>
            <div class="testimonial-author">
              <div class="testimonial-avatar" :style="{ background: t.grad }">{{ t.initials }}</div>
              <div class="testimonial-meta">
                <div class="testimonial-name">{{ t.name }}</div>
                <div class="testimonial-role">{{ t.role }}</div>
              </div>
              <div class="testimonial-interact">
                <svg viewBox="0 0 18 18" fill="none" class="interact-icon">
                  <path d="M13 2H5C3.9 2 3 2.9 3 4v8c0 1.1.9 2 2 2h2v3l4-3h2c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="currentColor"/>
                </svg>
                <span>回复</span>
                <svg viewBox="0 0 18 18" fill="none" class="interact-icon">
                  <path d="M16.4 8.5L9.4 1.5 8 2.9 13.1 8H1v2h12.1l-5.1 5.1 1.4 1.4 7-7c.4-.4.4-1 0-1.4v-.6z" fill="currentColor" transform="rotate(-45 9 9)"/>
                </svg>
                <span>有用</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const comments = [
  {
    quote: '用 GalaxyERP 后，日均订单处理量从 50 单提升到 300 单，再也不用手动在各个平台之间切来切去了。',
    name: 'Linda Zhang',
    role: 'POD 卖家 · 美区 TikTok',
    initials: 'L',
    color: '#4F6DFF',
    grad: 'linear-gradient(135deg, #4F6DFF, #6C7CE0)',
  },
  {
    quote: 'JIT 排产让我们的生产出错率降低了 90%，客户催单的情况几乎没有了。工厂端和销售端终于同步了。',
    name: 'Kevin Chen',
    role: 'POD 工厂负责人 · 广州',
    initials: 'K',
    color: '#10B981',
    grad: 'linear-gradient(135deg, #10B981, #34D399)',
  },
  {
    quote: '以前库存全靠 Excel 手动记，经常出错。现在库存准确率 99%+，滞销品少了 60%，资金周转快多了。',
    name: 'Sarah Wang',
    role: '电商运营总监 · 深圳',
    initials: 'S',
    color: '#F59E0B',
    grad: 'linear-gradient(135deg, #F59E0B, #FBBF24)',
  },
]
</script>
