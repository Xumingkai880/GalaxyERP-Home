<template>
  <section class="section faq-section" id="faq">
    <div class="container faq-container">
      <h2 class="section-title anim">常见问题</h2>
      <p class="section-desc anim faq-section-desc">关于 GalaxyERP 的常见疑问，快速找到答案</p>
      <div class="faq-grid anim">
        <div
          v-for="(item, i) in faqs"
          :key="i"
          class="faq-card"
          :class="{ open: isOpen(i) }"
        >
          <button class="faq-q" @click="toggle(i)">
            <span class="faq-q-num">{{ pad(i + 1) }}</span>
            <span class="faq-q-text">{{ item.q }}</span>
            <span class="faq-q-arrow">
              <svg viewBox="0 0 16 16">
                <polyline points="4 6, 8 10, 12 6" />
              </svg>
            </span>
          </button>
          <div class="faq-a">
            <div class="faq-a-inner">{{ item.a }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const openSet = reactive(new Set())

const faqs = [
  { q: '支持哪些电商平台对接？', a: '目前已支持 Temu、TikTok、Shopee 等主流平台，并在持续扩展中。如有特定平台需求，可以联系我们的技术团队评估对接方案。' },
  { q: 'JIT 排产是怎么实现的？', a: 'GalaxyERP 会根据订单量、工厂产能、物料库存等数据自动计算最优生产计划，将订单智能分配到对应产线，并实时追踪每个订单的生产状态。' },
  { q: '上手需要多久？需要培训吗？', a: '基础功能 5 分钟即可上手。我们提供完整的帮助文档、视频教程和新手引导流程。充值客户还可享受专属客户经理的一对一培训支持。' },
  { q: '充值余额可以随时使用吗？', a: '可以。充值余额长期有效，可用于抵扣所有产品消费。你可以根据业务量自由选择充值档位，随时补充余额，无任何隐藏费用。' },
  { q: '充值后不想用了可以退款吗？', a: '首次充值 7 天内可无条件全额退款。如未使用完余额，按剩余金额返还。如有任何不满意，我们优先解决问题，但退款通道始终开放。' },
  { q: '数据安全吗？可以导出吗？', a: '所有数据采用银行级 AES-256 加密传输和存储。你随时可以导出所有业务数据，数据完全归属于你。我们支持私有化部署方案。' },
  { q: '数据存储在哪里？', a: '数据存储于亚马逊云科技（AWS）新加坡节点，符合国际数据保护标准。我们承诺不查看、不分析、不转售你的任何业务数据。' },
  { q: '余额用完了订单会停吗？', a: '余额不足时订单不会立即停止，系统会提前发送余额提醒。你可以随时充值续费，充值后服务立即恢复，不影响正在处理的订单。' },
  { q: '可以开具发票吗？', a: '当然可以！我们在每月初汇总上月消费明细并开具正规电子发票。充值金额一次性开票，消费金额按月度汇总开票。' },
  { q: '有年付或长期优惠吗？', a: '目前采用灵活充值模式，按需使用。充值金额越多赠送越多，最高充值 ¥500,000 赠送 ¥71,429。大额充值客户还可联系销售申请专享折扣。' },
]

function toggle(i) {
  if (openSet.has(i)) {
    openSet.delete(i)
  } else {
    openSet.add(i)
  }
}

function isOpen(i) {
  return openSet.has(i)
}

function pad(n) {
  return String(n).padStart(2, '0')
}
</script>
