<template>
  <section class="pricing section" id="pricing">
    <div class="container">
      <h2 class="section-title anim">千万星河 GalaxyERP 报价</h2>
      <p class="section-desc anim">阶梯定价，按需选购，越多越省</p>
      <div class="pricing-table-wrap anim">
        <table class="pricing-table">
          <thead>
            <tr>
              <th>产品类型</th>
              <th>订单/件</th>
              <th>价格(¥)</th>
              <th>单价</th>
              <th>时长</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="category-cell" rowspan="3"><span class="category-label">ERP 订单</span></td>
              <td>5000</td>
              <td>90</td>
              <td>0.018</td>
              <td>1年</td>
            </tr>
            <tr>
              <td>50000</td>
              <td>800</td>
              <td>0.016</td>
              <td>1年</td>
            </tr>
            <tr>
              <td>150000</td>
              <td>2000</td>
              <td>0.013</td>
              <td>1年</td>
            </tr>
            <tr>
              <td class="category-cell" rowspan="3"><span class="category-label">ERP 生产订单</span></td>
              <td>5000</td>
              <td>250</td>
              <td>0.050</td>
              <td>1年</td>
            </tr>
            <tr>
              <td>50000</td>
              <td>2250</td>
              <td>0.045</td>
              <td>1年</td>
            </tr>
            <tr>
              <td>150000</td>
              <td>6000</td>
              <td>0.040</td>
              <td>1年</td>
            </tr>
            <tr>
              <td class="category-cell" rowspan="2"><span class="category-label">图片空间/M</span></td>
              <td>100</td>
              <td>10</td>
              <td>0.100</td>
              <td>30天</td>
            </tr>
            <tr>
              <td>1024</td>
              <td>100</td>
              <td>0.098</td>
              <td>30天</td>
            </tr>
            <tr>
              <td class="category-cell" rowspan="2"><span class="category-label">元素图空间/G</span></td>
              <td>10</td>
              <td>50</td>
              <td>5.000</td>
              <td>30天</td>
            </tr>
            <tr>
              <td>100</td>
              <td>500</td>
              <td>5.000</td>
              <td>30天</td>
            </tr>
            <tr>
              <td class="category-cell" rowspan="3"><span class="category-label">AI 创作/星币</span></td>
              <td>40000</td>
              <td>2000</td>
              <td>0.050</td>
              <td>1年</td>
            </tr>
            <tr>
              <td>100000</td>
              <td>4500</td>
              <td>0.045</td>
              <td>1年</td>
            </tr>
            <tr>
              <td>500000</td>
              <td>20000</td>
              <td>0.040</td>
              <td>1年</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="feature-card-wrap anim">
        <div class="feature-card-header">
          <h3>AI 创作 · 功能明细</h3>
          <span class="feature-tag">按次计费</span>
        </div>
        <el-row gutter="20" class="feature-row">
          <el-col :span="8">
            <div class="feature-card"><span>一键抠图</span><strong>2币/图</strong></div>
          </el-col>
          <el-col :span="8">
            <div class="feature-card"><span>文案提取</span><strong>1币/图</strong></div>
          </el-col>
          <el-col :span="8">
            <div class="feature-card"><span>图像修复</span><strong>2币/图</strong></div>
          </el-col>
        </el-row>

        <el-row gutter="20" class="feature-row">
          <el-col :span="8">
            <div class="feature-card"><span>印花提取</span><strong>4币/图</strong></div>
          </el-col>
          <el-col :span="8">
            <div class="feature-card"><span>套图</span><strong>2币/图</strong></div>
          </el-col>
          <el-col :span="8">
            <div class="feature-card"><span>高清放大 2K</span><strong>4币/图</strong></div>
          </el-col>
        </el-row>

        <el-row gutter="20" class="feature-row"> 
          <el-col :span="8">
            <div class="feature-card"><span>侵权检测</span><strong>2币/图</strong></div>
          </el-col>
          <el-col :span="16">
            <div class="feature-card"><span>高清放大 4K</span><strong>8币/图</strong></div>
          </el-col>
        </el-row>
      </div>
      <!-- <div class="discount-card-wrap anim">
        <div class="discount-card-header">
          <div class="discount-card-title">限时余额充值优惠</div>
          <span class="discount-card-tag">LIMITED TIME</span>
        </div>
        <el-row gutter="20" class="discount-row">
          <el-col :xs="24" :sm="12" :md="6">
            <div class="discount-card">
              <div class="discount-badge hot">热门</div>
              <div class="discount-amount">充值 ¥50,000</div>
              <div class="discount-detail gift">赠送 +¥3,000</div>
              <div class="discount-detail">实付 ¥53,000</div>
              <div class="discount-chip">9.4折</div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="6">
            <div class="discount-card">
              <div class="discount-badge recommend">推荐</div>
              <div class="discount-amount">充值 ¥100,000</div>
              <div class="discount-detail gift">赠送 +¥11,111</div>
              <div class="discount-detail">实付 ¥111,111</div>
              <div class="discount-chip">9.0折</div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="6">
            <div class="discount-card">
              <div class="discount-badge value">超值</div>
              <div class="discount-amount">充值 ¥200,000</div>
              <div class="discount-detail gift">赠送 +¥25,000</div>
              <div class="discount-detail">实付 ¥225,000</div>
              <div class="discount-chip">8.89折</div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="6">
            <div class="discount-card">
              <div class="discount-badge special">限时特惠</div>
              <div class="discount-amount">充值 ¥500,000</div>
              <div class="discount-detail gift">赠送 +¥71,429</div>
              <div class="discount-detail">实付 ¥571,429</div>
              <div class="discount-chip">8.75折</div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="discount-note-wrap">
          <p class="discount-note">* 充值余额可用于抵扣所有产品消费，具体活动规则以实际活动为准</p>
          <p class="discount-note">* 以上价格为标准阶梯报价，具体以实际结算为准</p>
        </div> -->
    </div>
  </section>
</template>
