<template>
 <div id='goodsList'>
  <table>
    <thead>
      <tr>
        <td>商品描述</td>
        <td>价格</td>
        <td>数量</td>
        <td>小计</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, i) in orderArr" :key="i">
        <td class="text">
          <img :src="'../../../../static/goods/'+item.src" alt="">
          <span>{{ item.title }}</span>
        </td>
        <td class="price">
          <span class="money">{{ item.price }}</span>
        </td>
        <td class="num">
          <span>X{{ item.num }}</span>
        </td>
        <td class="total">
          <span>${{ item.totalMoney }}</span>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="footer">
    <p>订单总价: <span>￥{{ total }}</span></p>
    <button class="subOrder">提交订单</button>
  </div>
 </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'goodsList',
  // import引入组件才能使用
  components: {},
  data () {
    return {
      goodsArr: [],
      money: 0
    }
  },
  // 计算属性
  computed: {
    ...mapState('shop', ['orderArr']),
    total () {
      var total = this.orderArr.reduce((acc, item, index) => {
        return acc * 1 + item.totalMoney * 1
      }, 0)
      return total.toFixed(2)
    }
  },
  // 监听data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    totalMoney () {
      this.money = this.orderArr.reduce((acc, item, index) => {
        return acc.totalMoney * 1 + item.totalMoney * 1
      }, 0)
    }
  },
  created () {
  },
  filters: {
    toFixedEvnet (value) {
      return value.toFixed(2)
    }
  }
}
</script>
<style scoped lang="less">
  #goodsList{
    table{
      width: 100%;
      border-bottom: 1px solid #E9E9E9;
      thead{
        text-align: center;
        font-weight: bold;
        height: 60px;
        line-height: 60px;
        tr{
          & :nth-of-type(1){
            width: 560px;
          }
        }
      }
      tbody{
        tr{
          text-align: center;
          font-size: 14px;
          .text{
            display: flex;
            align-items: center;
            justify-content: space-around;
            text-align: left;
            img{
              width: 90px;
              height: 90px;
            }
            span{
              width: 408px;
            }
          }
        }
      }
    }
    .footer{
      width: 100%;
      height: 50px;
      background: #E9E9E9;
      display: flex;
      align-items: center;
      justify-content: end;
      p{
        font-size: 14px;
        margin-right: 34px;
        span{
          color: red;
          font-size: 16px;
          font-weight: bold;
        }
      }
      button{
        width: 118px;
        height: 50px;
        background: #215496;
        color: white;
        font-size: 18px;
      }
    }
  }
</style>
