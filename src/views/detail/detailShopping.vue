<template>
  <div id='detailShopping' >
    <div class="main" v-for="(item, i) in goodsData" :key="i">
      <div class="left">
        <div class="big-img">
          <img :src="`../../../static/goods/${itemImg}`" alt="">
        </div>
        <div class="little-img">
          <img v-for="(it, ind) in item.img_bnr.split(',')" :key="ind" :src="`../../../static/goods/${it}`" @click="itemImg = it">
        </div>
      </div>
      <div class="right">
        <ul>
          <li class="name"><span>{{ item.title }}</span></li>
          <li class="title"><span>[新品推荐] 全新第10代酷睿处理器，80万小时稳定测试保障，简约环保大机箱!</span></li>
          <li class="price">价格:<span>￥{{ item.price }}</span></li>
          <li class="inventory">库存:<span>90</span></li>
          <li class="num">数量:
            <div>
              <p>{{ item.num }}</p>
              <div>
                 <span>+</span><span class="j">-</span>
              </div>
            </div>
          </li>
          <li class="add">
            <button >加入购物车</button>
          </li>
        </ul>
      </div>
    </div>
    <div class="bottom">
        <ul class="top">
          <li>商品详情</li>
        </ul>
        <div class="box-img">
          <img src="../../image/detail/detail-3.jpg" alt="">
        </div>
    </div>
    <bottomModel></bottomModel>
  </div>
</template>

<script>
import bottomModel from '../../components/bottomModel.vue'
export default {
  name: 'detailShopping',
  // import引入组件才能使用
  components: {
    bottomModel
  },
  data () {
    return {
      gid: null,
      goodsData: [],
      itemImg: ''
    }
  },
  // 计算属性
  computed: {},
  // 监听data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    async getDetailData () {
      var res = await this.$axios('/detail', {
        params: {gid: this.gid}
      })
      console.log(res)
      this.goodsData = res.data.value
      this.itemImg = res.data.value[0].src
    }
  },
  // 生命周期,创建完成时(可以访问当前this实例)
  created () {
    console.log(this.$route.params.id)
    this.gid = this.$route.params.id
    this.getDetailData()
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
#detailShopping{
  width:100%;
  height:100%;
  background-color:#f7f7f7;
}
*{
  margin:0;
  padding:0;
  list-style:none;
}
  .main{
    width:100%;
    padding:15px 162px 19px 153px;
    box-sizing: border-box;
    display:flex;
    justify-content:start;
    background-color:#f7f7f7;
    margin-top: 10px;
    .left{
      .big-img img{
        width: 410px;
        height: 410px;
        border:2px solid #d2d2d2;
      }
      .little-img img{
        width:97px;
        height:97px;
        border:2px solid #d2d2d2;
      }
      .little-img img.active{
        border:2px solid #698cb9;
      }
    }
    .right{
      margin-left:27px;
      font-size:20px;
      .title{
        color:#003a87;
        font-size:16px;
        margin-top:20px;
      }
      .price{
        width:100%;
        background-color:#e9e9e9;
        font-size:16px;
        padding:18px 0px 18px 13px;
        color:#494949;
        margin-top:36px;
        span{
          font-size:18px;
          color:#ff2424;
          font-weight:600;
          margin-left:30px;
        }
      }
      .inventory{
        font-size:16px;
        color:#525252;
        margin-top:23px;
        span{
          font-size:15px;
          color:#000;
          margin-left:26px;
        }
      }
      .num{
        display:flex;
        justify-content:start;
        font-size:16px;
        color:#525252;
        align-items: center;
        margin-top:22px;
        div{
          display:flex;
          justify-content:start;
          margin-left:26px;
            p{
              width:53px;
              height:48px;
              font-size:16px;
              color:#000;
              align-self: center;
              line-height:48px;
              text-align:center;
              background-color:#fff;
              border:2px solid #d2d2d2;
            }
            div{
              display: flex;
              flex-direction: column;
              margin-left:0;
              span{
                width:25px;
                height:20px;
                border:2px solid #d2d2d2;
                display: block;
                margin-left:3px;
                text-align: center;
                background-color:#fff;
              }
              span.j{
                margin-top:4px;
              }
            }
        }
      }
      .add{
        button{
          padding:11px 33px 12px 33px;
           margin-top:19px;
           background-color:#215496;
           color:#fff;
           font-size:18px;
           border:none;
        }
      }
    }
  }
  .bottom{
      width:100%;
      height:100%;
      padding:0px 162px 0px 153px;
      box-sizing:border-box;
      ul{
        width:100%;
        background-color:#e9e9e9;
        border-bottom:3px solid #215496;
        display:flex;
        justify-content:start;
        li{
          padding:16px 22px 18px 22px;
          background-color:#215496;
          color:#fff;
        }
      }
      .box-img{
        width:100%;
        margin-top:14px;
        img{
          width:100%;
        }
      }
    }
</style>
