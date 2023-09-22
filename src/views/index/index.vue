<template>
 <div id='index'>
  <div class="head">
      <div class="head-user">
        <div v-if="user">
          <span class="head_text">欢迎您，<span class="user">{{ user }}</span></span>
          <span class="logout">登出</span>
        </div>
        <div v-else>
          <span class="login">请登录</span>
        </div>
      </div>
      <div class="head-caozuo">
        <div class="cart" @click="linkCart">
          <i class="el-icon-shopping-cart-2"></i>
          <span>购物车({{ num }})</span>
        </div>
        <router-link to="/personal" class="my-ding">我的订单</router-link>
      </div>
  </div>
  <div class="main">
      <div class="search">
        <div class="logo" @click="linkHome">
          <div class="icon"><i class="el-icon-goods"></i></div>
          <div>MY-Mall</div>
        </div>
        <div class="input">
          <input type="text" placeholder="请输入商品名称">
          <button>搜索</button>
        </div>
      </div>
      <nextModal>
        <span>购物车</span>
      </nextModal>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
 </div>
</template>

<script>
import nextModal from '@/components/nextModal.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'index',
  // import引入组件才能使用
  components: {
    nextModal
  },
  data () {
    return {
      user: ''
    }
  },
  // 计算属性
  computed: {
    ...mapState('shop', ['num'])
  },
  // 监听data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    ...mapActions('shop', ['updateNumSync']),
    linkCart () {
      this.$router.push('/cart')
    },
    linkHome () {
      var userMsg = JSON.parse(localStorage.getItem('userinfo')) || []
      console.log(userMsg)
      this.$router.push(`/home`)
    }
  },
  // 生命周期，创建完成时（可以访问当前this实例）
  created () {
    this.updateNumSync()
    var userMsg = JSON.parse(localStorage.getItem('userinfo')) || []
    this.user = userMsg.account
  },
  mounted () {
  }
}
</script>
<style scoped lang="less">
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
      .cart{
        cursor: pointer;
      }
    }
  }
  .main{
    .search{
      padding: 0 130px;
      display: flex;
      height: 100px;
      border-bottom: 2px solid #1B598B;
      justify-content: center;
      align-items: center;
      .logo{
        display: flex;
        align-items: center;
        .icon{
          width: 40px;
          height: 40px;
          background: #1B598B;
          text-align: center;
          line-height: 40px;
          border-radius: 100px;
          i{
            color: white;
            font-size: 22px;
          }
        }
        div{
          font-size: 22px;
          color: #1B598B;
          font-weight: bold;
          margin-left: 14px;
        }
      }
      .input{
        display: flex;
        align-items: center;
        margin-left: 60px;
        input{
          width: 610px;
          height: 34px;
          border: 2px solid #1B598B;
          text-indent: 1em;
        }
        button{
          width: 80px;
          height: 40px;
          background: #1B598B;
          color: white;
          border: none;
        }
      }
    }
    .content{
      padding: 0 130px;
      // height: 100vh;
      background-color:#f7f7f7;
    }
  }
</style>
