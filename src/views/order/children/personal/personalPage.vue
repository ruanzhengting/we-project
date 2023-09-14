<template>
  <div id='personalPage'>
    <!-- <div class="top">
      <p>CSU-Mall> <span>我的订单</span></p>
    </div> -->
    <div class="content">
      <div class="left"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'personalPage',
  // import引入组件才能使用
  components: {
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
  // 生命周期,创建完成时(可以访问当前this实例)
  created () {

  },
  // 生命周期:挂载完成时(可以访问DOM元素)
  mounted () {

  },
  // 生命周期：创建之前
  beforeCreate () {},
  // 生命周期：挂载之前
  beforeMount () {},
  // 生命周期：更新之前
  beforeUpdate () {},
  // 生命周期：更新之后
  updated () {},
  // 生命周期：销毁之前
  beforeDestroy () {},
  // 生命周期：销毁完成
  destroyed () {},
  // 如果页面有keep-alive缓存功能,这个函数会触发执行
  activated () {}
}
</script>

<style scoped lang="less">
#personalPage{
  width: 100%;
  .top{
    width: 100%;
    height: 48px;
    background-color: rgba(0,0,0,.1);
    margin-top: 30px;
    border-top:2px solid #1B598B;
    p{
      padding: 0 130px;
      font-size: 14px;
      span{
        color: #1B598B;
      }
    }
  }
  .content{
    margin-top: 20px;
    .right{
      width: 952px;
      height: 343px;
      background-color: #fff;
    }
  }
}
</style>
