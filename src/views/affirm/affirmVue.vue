<template>
 <div id='affirmVue'>
  <h2 class="title">收货地址</h2>
  <shipAddress></shipAddress>
  <h2 class="title">商品清单</h2>
  <goodsList></goodsList>
 </div>
</template>

<script>
import shipAddress from './children/shipAddress'
import goodsList from './children/goodsList'
export default {
  name: 'affirmVue',
  // import引入组件才能使用
  components: {
    shipAddress,
    goodsList
  },
  data () {
    return {
    }
  },
  // 计算属性
  computed: {},
  // 监听data中的数据变化
  watch: {},
  // 方法集合
  methods: {

  },
  // 生命周期，创建完成时（可以访问当前this实例）
  created () {
  }
}
</script>
<style scoped lang="less">
  #affirmVue{
    .title{
      height: 45px;
      line-height: 45px;
      font-size: 18px;
      border-bottom: 1px solid #C2C7CC;
      margin-top: 20px;
    }
  }
</style>
