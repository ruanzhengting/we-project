<template>
 <div id='index'>
  <div class="main">
    <h2 class="order">修改密码</h2>
    <div class="form-box">
     <ul >
      <li>原始密码:<input type="password" v-model="currentPassword"></li>
      <li class="xin">新密码:<input type="password" v-model="newPassword"/></li>
      <li>确认密码:<input type="password" v-model="newTwoPassword"/></li>
      <li><button @click="changePassword">提交修改</button></li>
     </ul>
    </div>
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
      currentPassword: '',
      newPassword: '',
      newTwoPassword: ''
    }
  },
  // 计算属性
  computed: {},
  // 监听data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    async changePassword () {
      var user = JSON.parse(localStorage.getItem('userinfo'))
      console.log(user)
      console.log(user.passwrod)
      console.log(this.currentPassword)
      if (!this.currentPassword) {
        return alert('原始密码不能为空')
      }
      if (user.passwrod === this.currentPassword) {
        var res = await this.$axios('/psd', {
          params: {
            username: user.username
          }
        })
        console.log(res)
      } else {
        alert('原始密码不正确')
      }
      if (!this.newPassword) {
        return alert('新密码不能为空')
      } else if (!this.newTwoPassword) {
        return alert('确认密码不能为空')
      }
      if (this.newPassword === this.newTwoPassword) {
        var req = await this.$axios('./uppsd', {
          params: {
            password: this.newTwoPassword,
            username: user.username
          }
        })
        console.log(req)
      } else {
        alert('确认密码发生错误')
      }
      this.currentPassword = ''
      this.newPassword = ''
      this.newTwoPassword = ''
    }
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
  .main{
    width:955px;
    height:267px;
    background-color:#fff;
    padding:22px 17px 16px 13px;
    box-sizing: border-box;
    .order{
      width:100%;
      border-bottom:1px solid #c2c7cc;
      padding-bottom:13px;
      box-sizing: border-box;
    }
    .form-box{
      width:100%;
      font-size:12px;
      font-weight:600;
      margin-top:17px;
      li{
        display:flex;
        justify-content: start;
        align-items:center;
        input{
          border:1px solid #bbbbbb;
          border-radius:6px;
          height:28px;
          margin-left:33px;
          margin-bottom:8px;
        }
        button{
          padding:13px 31px 12px 31px;
          box-sizing: border-box;
          background-color:#215496;
          color:#fff;
          margin-left:85px;
        }
      }
      .xin{
        margin-left:12px;
      }
    }
  }
}
</style>
