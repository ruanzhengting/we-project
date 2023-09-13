<template>
  <div id='register'>
   <div class="top"></div>
   <div class="header">
    <div class="icon"></div>
    <p class="name">MY-Mall</p>
   </div>
   <div class="content">
    <div class="list"></div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'register',
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
#register{
  width: 1440px;
  .top{
    width: 100%;
    height: 30px;
    background: #e9e9e9;
  }
  .header{
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    padding-left: 175px;
    .icon{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #1b598b;
      margin-right: 12px;
    }
    .name{
      color: #1b598b;
      font-size: 20px;
      font-weight: 700;
    }
  }
  .content{
    width: 100%;
    height: 700px;
    background-color: #1b598b;
  }
}
</style>
