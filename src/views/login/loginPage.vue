<template>
 <div id='loginPage'>
  <div class="head_list"></div>
  <div class="head_tit">
    <div></div>
    <p>MY-Mall</p>
  </div>
  <div class="content">
    <div class="cont_it">
      <div class="it_tit">
        <p>用户登录</p>
      </div>
      <div class="it_user">
        <img src="" alt="">
        <input type="text">
      </div>
      <div class="it_pass">
        <img src="" alt="">
        <input type="text">
      </div>
      <div class="it_dl">登录</div>
    </div>
  </div>
 </div>
</template>

<script>
export default {
  name: 'loginPage',
  // import引入组件才能使用
  components: {},
  data () {
    return {}
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
<style scoped>
@import url(./loginPage.css);
</style>
