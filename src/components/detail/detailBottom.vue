<template>
  <div id='detailBottom'>
    <div class="box">
      <div class="item">
        <ul>
          <li>商品详情</li>
        </ul>
      </div>
      <div class="detail-img">
         <img src="../../image/detail/detail-3.jpg" alt="">
         <div class="title">
          <p>幸福大学<span>|</span>快乐学院<span>|</span>图书馆</p>
          <p>Copyright 2023 MY-Mall All rights Reserved</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailBottom',
  // import引入组件才能使用
  components: {},
  props: {},
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
*{
  margin:0;
  padding:0;
  list-style:none;
}
  .box{
    width:100%;
    padding:15px 162px 19px 153px;
    box-sizing:border-box;
    .item{
      width:100%;
      background-color:#e9e9e9;
      border-bottom:2px solid #295a99;
      ul li{
        width:118px;
        height:100%;
        background-color:#215496;
        color:#fff;
        text-align:center;
        padding:15px 22px 17px 23px;
        box-sizing:border-box;
      }
    }
    .detail-img{
      padding-top:13px;
      box-sizing: border-box;
      display:flex;
      justify-content: center;
      flex-direction: column;
      img{
        display: block;
      }
      .title{
        margin-top:29px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        p{
          text-align:center;
          font-size:14px;
          color:#696969;
          margin-bottom:20px;
          span{
            margin:0 16px 0 13px;
          }
        }
      }
    }
  }
</style>
