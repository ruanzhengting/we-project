<template>
  <div id='detailShopping'>
    <div class="main" v-for="(item, i) in goodsData" :key="i">
      <div class="left" ref="leftView">
        <div class="big-img" @mouseover="isShow = true" @mouseout="isShow = false" @mousemove="moveView" ref="bigImg">
          <img :src="`../../../static/goods/${itemImg}`" alt="">
          <!-- :style="{left: left + 'px', top: top + 'px'}" -->
          <div class="move" v-show="isShow" :style="{ left: left + 'px', top: top + 'px' }" ref="move"></div>
        </div>
        <div class="moveBig_img" v-show="isShow">
          <img :src="`../../../static/goods/${itemImg}`" :style="{ left: -left * scale + 'px', top: -top * scale + 'px' }" alt="">
        </div>
        <div class="little-img">
          <img v-for="(it, ind) in item.img_bnr.split(',')" :key="ind" :src="`../../../static/goods/${it}`"
            @click="itemImg = it">
        </div>
      </div>
      <div class="right">
        <ul>
          <li class="name"><span>{{ item.title }}</span></li>
          <li class="title"><span>[新品推荐] 全新第10代酷睿处理器，80万小时稳定测试保障，简约环保大机箱!</span></li>
          <li class="price">价格:<span>￥{{ item.price }}</span></li>
          <li class="addrBtn"><addressVue></addressVue></li>
          <li class="inventory">库存:<span>90</span></li>
          <li class="num">数量:
            <template>
              <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"
                size="medium"></el-input-number>
            </template>
          </li>
          <li class="add">
            <button @click="addCart">加入购物车</button>
          </li>
        </ul>
      </div>
    </div>
    <div class="bottom">
      <ul class="top">
        <li>商品详情</li>
      </ul>
      <div class="box-img">
        <img v-for="(ite, inde) in goodsData[0].img_bnr.split(',')" :key="inde" :src="`../../../static/goods/${ite}`"
          alt="">
      </div>
    </div>
    <bottomModel></bottomModel>
  </div>
</template>

<script>
import bottomModel from '../../components/bottomModel.vue'
import addressVue from '@/components/address.vue'
import { mapActions } from 'vuex'
export default {
  name: 'detailShopping',
  // import引入组件才能使用
  components: {
    bottomModel,
    addressVue
  },
  data () {
    return {
      gid: null,
      goodsData: [],
      itemImg: '',
      num: 1,
      modalMsg: '加入购物车成功',
      isShow: false,
      left: 0,
      top: 0,
      scale: 0
    }
  },
  // 计算属性
  computed: {},
  // 监听data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    ...mapActions('shop', ['updateNumSync']),
    async getDetailData () {
      var res = await this.$axios('/detail', {
        params: { gid: this.gid }
      })
      console.log(res)
      this.goodsData = res.data.value
      this.itemImg = res.data.value[0].src
      this.num = this.goodsData[0].num
    },
    handleChange (value) {
      console.log(value)
      this.$axios.get('/detailNum', {
        params: {
          num: value,
          gid: this.goodsData[0].gid
        }
      }).then(res => {
        console.log(res)
      })
    },
    async addCart () {
      var res = await this.$axios.get('/isShop', {
        params: {
          gid: this.goodsData[0].gid
        }
      })
      // console.log(res)
      if (res.data.value.length === 0) {
        var reslove = await this.$axios.get('/addCart', {
          params: {
            gid: this.goodsData[0].gid,
            src: this.goodsData[0].src,
            title: this.goodsData[0].title,
            price: this.goodsData[0].price,
            num: this.goodsData[0].num,
            total: this.goodsData[0].price,
            checked: 0
          }
        })
        console.log(reslove)
        if (reslove.data.code === 200) {
          this.successMod()
          this.updateNumSync()
        }
      } else {
        this.open2()
      }
    },
    successMod () {
      this.$notify({
        title: '成功',
        message: this.modalMsg,
        type: 'success'
      })
    },
    open2 () {
      this.$notify({
        title: '警告',
        message: '该商品已在购物车',
        type: 'warning'
      })
    },
    moveView (e) {
      var moveView = this.$refs.move[0]
      var bigImgView = this.$refs.bigImg[0]

      this.scale = bigImgView.offsetWidth / moveView.offsetWidth

      var offLeft = this.$refs.leftView[0].offsetLeft
      var offTop = this.$refs.leftView[0].offsetTop

      var moveX = e.clientX - moveView.offsetWidth / 2 - offLeft
      var moveY = e.pageY - moveView.offsetWidth / 2 - offTop
      let maxX = bigImgView.offsetWidth - moveView.offsetWidth
      let maxY = bigImgView.offsetHeight - moveView.offsetHeight

      if (moveX <= 0) {
        moveX = 0
      } else if (moveX >= maxX) {
        moveX = maxX
      }
      if (moveY <= 0) {
        moveY = 0
      } else if (moveY >= maxY) {
        moveY = maxY
      }
      this.left = moveX
      this.top = moveY
    }
  },
  // 生命周期,创建完成时(可以访问当前this实例)
  created () {
    console.log(this.$route.params.id)
    this.gid = this.$route.params.id
    this.getDetailData()
    this.updateNumSync()
  },
  mounted () {
  }
}
</script>
<style scoped lang="less">
#detailShopping {
  width: 100%;
  height: 100%;
  background-color: #f7f7f7;
}

* {
  margin: 0;
  padding: 0;
  list-style: none;
}

.main {
  width: 100%;
  padding: 15px 162px 19px 153px;
  box-sizing: border-box;
  display: flex;
  justify-content: start;
  background-color: #f7f7f7;
  margin-top: 10px;

  .left {
    position: relative;

    .big-img {
      position: relative;

      img {
        width: 400px;
        height: 400px;
        border: 2px solid #d2d2d2;
      }

      .move {
        position: absolute;
        width: 200px;
        height: 200px;
        background: rgba(227, 194, 27, 0.4);
        left: 0;
        top: 0;
      }
    }

    .moveBig_img {
      width: 400px;
      height: 400px;
      overflow: hidden;
      position: absolute;
      z-index: 10;
      left: 410px;
      top: 0;

      img {
        width: 800px;
        height: 800px;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .little-img img {
      width: 97px;
      height: 97px;
      border: 2px solid #d2d2d2;
    }

    .little-img img.active {
      border: 2px solid #698cb9;
    }
  }

  .right {
    margin-left: 27px;
    font-size: 20px;
    .title {
      color: #003a87;
      font-size: 16px;
      margin-top: 20px;
    }

    .price {
      width: 100%;
      background-color: #e9e9e9;
      font-size: 16px;
      padding: 18px 0px 18px 13px;
      color: #494949;
      margin-top: 36px;

      span {
        font-size: 18px;
        color: #ff2424;
        font-weight: 600;
        margin-left: 30px;
      }
    }
    .addrBtn{
      margin-top: 23px;
    }

    .inventory {
      font-size: 16px;
      color: #525252;
      margin-top: 23px;

      span {
        font-size: 15px;
        color: #000;
        margin-left: 26px;
      }
    }

    .num {
      display: flex;
      justify-content: start;
      font-size: 16px;
      color: #525252;
      align-items: center;
      margin-top: 22px;

      div {
        display: flex;
        justify-content: start;
        margin-left: 26px;

        p {
          width: 53px;
          height: 48px;
          font-size: 16px;
          color: #000;
          align-self: center;
          line-height: 48px;
          text-align: center;
          background-color: #fff;
          border: 2px solid #d2d2d2;
        }

        div {
          display: flex;
          flex-direction: column;
          margin-left: 0;

          span {
            width: 25px;
            height: 20px;
            border: 2px solid #d2d2d2;
            display: block;
            margin-left: 3px;
            text-align: center;
            background-color: #fff;
          }

          span.j {
            margin-top: 4px;
          }
        }
      }
    }

    .add {
      button {
        padding: 11px 33px 12px 33px;
        margin-top: 19px;
        background-color: #215496;
        color: #fff;
        font-size: 18px;
        border: none;
      }
    }
  }
}

.bottom {
  width: 100%;
  height: 100%;
  padding: 0px 162px 0px 153px;
  box-sizing: border-box;

  ul {
    width: 100%;
    background-color: #e9e9e9;
    border-bottom: 3px solid #215496;
    display: flex;
    justify-content: start;

    li {
      padding: 16px 22px 18px 22px;
      background-color: #215496;
      color: #fff;
    }
  }

  .box-img {
    width: 100%;
    margin-top: 14px;

    img {
      width: 100%;
    }
  }
}</style>
