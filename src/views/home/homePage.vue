<template>
  <div id='homePage'>
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
          <div class="icon"><i class="el-icon-goods"></i></div>
          <div>MY-Mall</div>
        </div>
        <div class="input">
          <input type="text" placeholder="请输入商品名称">
          <button>搜索</button>
        </div>
      </div>
      <div class="banner">
        <div class="list">
          <ul>
            <li v-for="item in list" :key="item.id">
              <span v-for="(it, i) in item.text" :key="i">{{ it }}</span>
            </li>
          </ul>
        </div>
        <bannerModalVue></bannerModalVue>
      </div>
      <div class="goods_item">
        <div class="item">
          <div class="item-head">
            <p>电脑/数码产品</p>
          </div>
          <div class="item-main">
              <ul>
                <li><img src="../../assets/image/a1.png" alt=""></li>
                <li><img src="../../assets/image/a2.png" alt=""></li>
                <li><img src="../../assets/image/a3.png" alt=""></li>
                <li><img src="../../assets/image/a1.png" alt=""></li>
                <li><img src="../../assets/image/a2.png" alt=""></li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bannerModalVue from '@/components/bannerModal.vue'
export default {
  name: 'homePage',
  // import引入组件才能使用
  components: {
    bannerModalVue
  },
  data () {
    return {
      user: '',
      list: [
        {id: 1, text: ['手机', '数码产品']},
        {id: 2, text: ['台式电脑', '笔记本电脑']},
        {id: 3, text: ['文具用品']},
        {id: 4, text: ['洗漱用品', '清洁用品']},
        {id: 5, text: ['运动户外', '球类']},
        {id: 6, text: ['衣服', '鞋靴']},
        {id: 7, text: ['图书', '音像', '电子书']},
        {id: 8, text: ['床上用品']},
        {id: 9, text: ['个人护理', '电动牙刷']},
        {id: 10, text: ['饮料', '零食', '方便面']}
      ]
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
    this.user = this.$route.params.username
  },
  // 生命周期：挂载完成时（可以访问DOM元素）
  mounted () {

  }
}
</script>
<style scoped lang="less">
#homePage{
  *{margin: 0;padding: 0;}
  li{list-style: none;}
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
    margin-top: 30px;
    padding: 0 130px;
    .search{
      display: flex;
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
    .banner{
      display: flex;
      margin-top: 30px;
      .list{
        height: 350px;
        background: #5A5A5A;
        ul{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          padding: 22px;
          box-sizing: border-box;
          li{
            color: white;
            font-size: 14px;
            span{
              margin-right: 10px;
            }
            span:hover{
              color: #b1b1b1;
              cursor: pointer;
            }
          }
        }
      }
      #bannerModal{
        flex: 1;
        height: 350px;
      }
    }
    .goods_item{
      .item{
        .item-head{
          height: 62px;
          border-bottom: 2px solid #1B598B;
          color: #1B598B;
          line-height: 62px;
        }
        .item-main{
          margin-top: 28px;
          ul{
            width: 100%;
            display: flex;
            align-items: center;
            li{
              flex: 1;
              margin: 0 30px;
              img{
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }
}
</style>
