<template>
  <div id='myOrderForm'>
    <div class="main">
      <h2 class="order">我的订单</h2>
      <div class="title">
        <span class="text">商品信息</span>
        <span>单价</span>
        <span>数量</span>
        <span>合计</span>
      </div>
      <div class="item">
        <ul>
          <li>
            <div class="Box">
              <span>订单号:<span class="hao">2020071000092129</span></span>
              <span>2021-07-10 18:09:12</span>
              <span>收件人<span class="hao">宋老师</span></span>
              <span>订单状态<span class="liu">已付款</span></span>
              <span>订单总价:<span class="liu price">￥2799.00</span></span>
              <span>查看详情></span>
            </div>
            <div class="li-main">
              <img src="@/image/detail/my-1.jpg" alt="">
              <div class="items-name">联想(Lenovo)天逸510S英特尔酷容i3 个人商务台式机电脑整机(i3-9100 8G1T WiFi 三年上门 Win10)21.5英寸</div>
              <div class="items-price">￥2799.00</div>
              <div class="items-num">1</div>
              <div class="items-prices">￥2799.00</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'myOrderForm',
  // import引入组件才能使用
  components: {},
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
  // 生命周期,创建完成时(可以访问当前this实例)
  created () {

  },
  // 生命周期:挂载完成时(可以访问DOM元素)
  mounted () {

  },
  beforeCreate () { }, // 生命周期：创建之前
  beforeMount () { }, // 生命周期：挂载之前
  beforeUpdate () { }, // 生命周期：更新之前
  updated () { }, // 生命周期：更新之后
  beforeDestroy () { }, // 生命周期：销毁之前
  destroyed () { }, // 生命周期：销毁完成
  activated () { } // 如果页面有keep-alive缓存功能,这个函数会触发执行
}
</script>
<style scoped lang="less">
 #myOrderForm{
  margin-top:20px;
  .main{
    width:955px;
    height:800px;
    background-color:#fff;
    padding:22px 17px 16px 13px;
    box-sizing: border-box;
    .order{
      width:100%;
      border-bottom:1px solid #c2c7cc;
      padding-bottom:13px;
      box-sizing: border-box;
    }
    .title{
      margin:13px 0 18px 0;
      background-color:#e9e9e9;
      padding:12px 40px;
      box-sizing: border-box;
      font-size:15px;
      display:flex;
      justify-content:space-between;
      .text{
        flex:4;
      }
      span{
        flex:1;
        text-align: center;
        font-weight: 600;
        color:#000;
      }
    }
    .item{
      width:100%;
      .Box{
        width:100%;
        padding:15px 20px 14px 18px;
        box-sizing:border-box;
        background-color:#e9e9e9;
        display:flex;
        justify-content:space-around;
        font-size:12px;
        font-weight: 600;
        .hao{
          margin-left:16px;
        }
        .liu{
          margin-left:8px;
        }
        span{
          color:#949494;
        }
        .price{
          color:#ff2727;
        }
      }
      .li-main{
        border:1px solid #e9e9e9;
        display:flex;
        justify-content:space-around;
        align-items: center;
        padding:10px 20px 12px 17px;
        box-sizing:border-box;
        text-align:center;
        background-color:#fbfbfb;
        img{
          border:1px solid #bbbbbb;
          flex:1;
        }
        .items-name{
          margin-left:13px;
          font-size:14px;
          padding:0px;
          flex:3;
          text-align:left;
          font-weight:400;
        }
        .items-price{
          flex:1;
          font-size:10px;
        }
        .items-num{
          flex:1;
          font-size:11px;
        }
        .items-prices{
          flex:1;
          font-size:11px;
          font-weight:600;
        }
      }
    }
  }
 }
</style>
