<template>
 <div id='index'>
  <div class="main">
    <h2 class="order">修改密码</h2>
  </div>
 </div>
</template>

<script>
export default {
  name: 'index',
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
  // 生命周期，创建完成时（可以访问当前this实例）
  created () {

  },
  // 生命周期：挂载完成时（可以访问DOM元素）
  mounted () {

  },
  beforeCreate () { }, // 生命周期：创建之前
  beforeMount () { }, // 生命周期：挂载之前
  beforeUpdate () { }, // 生命周期：更新之前
  updated () { }, // 生命周期：更新之后
  beforeDestroy () { }, // 生命周期：销毁之前
  destroyed () { }, // 生命周期：销毁完成
  activated () { } // 如果页面有keep-alive缓存功能，这个函数会触发执行
}
</script>
<style scoped lang="less">
#index{
  margin-top:20px;
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
  }
}
</style>
