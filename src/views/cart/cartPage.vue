<template>
  <div id='cartPage'>
    <div class="cart_t">
      <div class="check">
        <input type="checkbox">
        <p>全选</p>
      </div>
      <div class="merchandise">商品信息</div>
      <div class="money">单价</div>
      <div class="sum">数量</div>
      <div class="total">合计</div>
      <div class="operation">操作</div>
    </div>
    <div class="cart_c" v-for="item in shopData" :key="item.id">
      <input type="checkbox">
      <div class="c_tit">
        <div class="c_boxImg">
          <img :src="`../../../static/goods/${item.src}`" alt="">
        </div>
        <p>{{ item.title }}</p>
      </div>
      <div class="c_money">￥<p>{{ item.price }}</p>
      </div>
      <div class="c_quantity">
        <template>
  <el-input-number v-model="item.num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
</template>
      </div>
      <div class="c_total">￥<p>2799.00</p>
      </div>
      <div class="c_del">删除</div>
    </div>
    <div class="cart_b">
      <div class="b_le">
        <div class="b_check">
          <input type="checkbox">
          <p>全选</p>
        </div>
        <div class="b_del">
          <i class="el-icon-delete-solid"></i>
          <p>删除选中</p>
        </div>
      </div>
      <div class="b_re">
        <div class="b_sumPri">
          <p class="">总价：</p>
          <div class="pri">￥<p class="P_pri">2799.00</p>
          </div>
        </div>
        <div class="b_js">去结算</div>
      </div>
    </div>
    <div class="bottom_btn">
      <div class="_t">
        幸福大学<span>|</span>
        图书馆<span>|</span>
        快乐学院
      </div>
      <div class="_b">Copyright 2023 Mall All rights Reserved</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cartPage',
  // import引入组件才能使用
  components: {},
  props: {},
  data () {
    return {
      shopData: [],
      num: 1
    }
  },
  // 计算属性
  computed: {},
  // 监听data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    async getShopDate () {
      var res = await this.$axios.get('/cart')
      console.log(res)
      this.shopData = res.data.value
    },
    handleChange (value) {
      // console.log(value)
    }
  },
  // 生命周期/创建完成时(可以访问当前this实例
  created () {
    this.getShopDate()
  }
}
</script>
<style scoped lang="less">@import url(./cart.less);</style>
