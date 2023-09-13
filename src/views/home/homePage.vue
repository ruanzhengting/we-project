<template>
  <div id='homePage'>
    <div class="head">
      <div class="head-user">
        <div v-if="user">
          <span class="head">欢迎您，<span class="user">Admin</span></span>
          <span class="logout">登出</span>
        </div>
        <div v-else>
          <span class="login">请登录</span>
        </div>
      </div>
      <div class="head-caozuo">
        <div class="cart">
          <i class="el-icon-shopping-cart-2"></i>
          <span>购物车(0)</span>
        </div>
        <div class="my-ding">我的订单</div>
      </div>
    </div>
    <div class="main">
      <div class="search">
        <div class="logo">
          <img src="" alt="">
        </div>
        <div class="input">
          <input type="text">
          <button>搜索</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homePage',
  // import引入组件才能使用
  components: {},
  data () {
    return {
      user: ''
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

  },
  // 生命周期：挂载完成时（可以访问DOM元素）
  mounted () {

  }
}
</script>
<style scoped lang="less">
#homePage{
  .head{
    height: 30px;
    background-color: #E9E9E9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 130px;
    .head-user{
      display: flex;
      font-size: 13px;
    }
    .head-caozuo{
      display: flex;
      font-size: 13px;
      &>div{
        margin-right: 10px;
      }
    }
  }
  .main{
    padding: 0 130px;
  }
}
</style>
