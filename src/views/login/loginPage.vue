<template>
  <div id='loginPage'>
    <div class="head_list"></div>
    <div class="head_tit">
      <div class="d_logo">
        <i class="el-icon-goods"></i>
      </div>
      <p class="tit_p">MY-Mall</p>
    </div>
    <div class="content">
      <div class="cont_it">
        <div class="it_tit">
          <p class="Name">用户登录</p>
        </div>
        <div class="it_user">
          <div class="it_us_item">
            <i class="el-icon-user-solid"></i>
          </div>
          <input type="text" placeholder="请输入用户名">
        </div>
        <div class="it_pass">
          <div class="it_us_item">
            <i class="el-icon-s-tools"></i>
          </div>
          <input type="password" placeholder="请输入密码">
        </div>
        <div class="it_dl">登录</div>
        <div class="it_bt">
          <span>忘记密码</span>
          <span>免费注册</span>
        </div>
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
