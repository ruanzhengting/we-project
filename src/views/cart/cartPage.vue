<template>
  <div id='cartPage'>
    <div class="cart_t">
      <div class="check">
        <input type="checkbox" @change="selectAll(isChec)" v-model="isChec">
        <p>全选</p>
      </div>
      <div class="merchandise">商品信息</div>
      <div class="money">单价</div>
      <div class="sum">数量</div>
      <div class="total">合计</div>
      <div class="operation">操作</div>
    </div>
    <div class="cart_c" v-for="item in shopData" :key="item.id">
      <input type="checkbox" @change="handleCheck(item.gid, item.checked)" :checked="item.checked === 1 ? true : false">
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
            <el-input-number v-model="item.num" @change="handleChange(item)" :min="1" :max="10" label="描述文字"></el-input-number>
        </template>
      </div>
      <div class="c_total">￥<p>{{ item.totalMoney }}</p>
      </div>
      <div class="c_del" @click="open(item.gid)">删除</div>
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
          <div class="pri">￥<p class="P_pri">{{ total | toFixedEvnet }}</p>
          </div>
        </div>
        <div class="b_js" @click="linkAffirm">去结算</div>
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
import { mapMutations } from 'vuex'
export default {
  name: 'cartPage',
  // import引入组件才能使用
  components: {},
  props: {},
  data () {
    return {
      shopData: [],
      num: 1,
      total: 0,
      isChec: false,
      action: '111',
      selectArr: []
    }
  },
  // 计算属性
  computed: {},
  // 监听data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    ...mapMutations('shop', ['updateOrderArr']),
    async getShopDate () {
      var res = await this.$axios.get('/cart')
      // console.log(res)
      this.shopData = res.data.value
      this.totalMoney()
    },
    handleChange (obj) {
      console.log(obj.num)
      this.$axios.get('/cartNum', {
        params: {
          value: obj.num,
          gid: obj.gid
        }
      }).then(res => {
        console.log(res)
        this.totalColMoney(obj.num, obj.price, obj.gid)
      })
    },
    totalColMoney (num, price, id) {
      var total = (num * 1 * price * 1).toFixed(2)
      this.$axios.get('/change/total', {
        params: {
          money: total,
          gid: id
        }
      }).then(res => {
        // console.log(res)
        this.getShopDate()
      })
    },
    totalMoney () {
      this.total = 0
      for (var i = 0; i < this.shopData.length; i++) {
        if (this.shopData[i].checked === 1) {
          this.total += this.shopData[i].num * 1 * this.shopData[i].price * 1
          // console.log(this.total)
        }
      }
    },
    handleCheck (gid, chec) {
      // console.log(gid, chec)
      var checCode = 0
      if (chec === 0) {
        checCode = 1
      }
      this.$axios.get('/change/chec', {
        params: {
          code: checCode,
          gid: gid
        }
      }).then(res => {
        // console.log(res)
        if (res.data.code === 200) {
          this.getShopDate()
        }
      })
    },
    // 全选
    selectAll (state) {
      var code = state ? 1 : 0
      console.log(code)
      this.$axios.get('/change/all', {
        params: {
          code: code
        }
      }).then(res => {
        if (res.data.code === 200) {
          this.getShopDate()
        }
      })
    },
    open (gid) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios.get('/del/cart', {
          params: {
            gid: gid
          }
        }).then(res => {
          console.log(res)
          this.getShopDate()
        })
      }).catch(() => {
        console.log('取消删除')
      })
    },
    linkAffirm () {
      this.selectArr = []
      var state = 0
      for (var i = 0; i < this.shopData.length; i++) {
        if (this.shopData[i].checked === 1) {
          this.selectArr.push(this.shopData[i])
          state = 1
        }
      }
      if (!state) {
        return this.$message({
          message: '没有选中任何商品',
          type: 'warning'
        })
      }
      this.updateOrderArr(this.selectArr)
      this.$router.push('/affirm')
    }
  },
  filters: {
    toFixedEvnet (value) {
      return value.toFixed(2)
    }
  },
  // 生命周期/创建完成时(可以访问当前this实例
  created () {
    this.getShopDate()
  }
}
</script>
<style scoped lang="less">@import url(./cart.less);</style>
