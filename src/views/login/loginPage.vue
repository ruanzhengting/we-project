<template>
  <div id='loginPage'>
    <loginModel>
      <div class="cont_it">
        <div class="it_tit">
          <p class="Name">用户登录</p>
        </div>
        <div class="it_user">
          <div class="it_us_item">
            <i class="el-icon-user-solid"></i>
          </div>
          <input type="text" placeholder="请输入用户名" v-model.trim="user">
        </div>
        <div class="it_pass">
          <div class="it_us_item">
            <i class="el-icon-s-tools"></i>
          </div>
          <input type="password" placeholder="请输入密码" v-model="password">
        </div>
        <div class="it_code">
          <div class="it_us_item">
            <i class="el-icon-s-tools"></i>
          </div>
          <input type="text" placeholder="请输入验证码" v-model.trim="code">
          <button @click="getCode">{{ codeText }}</button>
        </div>
        <div class="it_dl" @click="logIn" :plain="true" duration="400">登录</div>
        <div class="it_bt">
          <span>
            <router-link to="/retrievePw" class="wjmm">忘记密码</router-link>
          </span>
          <span>
            <router-link to="/register" class="mfzc">免费注册</router-link>
          </span>
        </div>
      </div>
    </loginModel>
  </div>
</template>

<script>
import loginModel from '@/components/loginModel.vue'
export default {
  name: 'loginPage',
  // import引入组件才能使用
  components: {
    loginModel
  },
  data () {
    return {
      user: '13552321519',
      password: '123456',
      code: '',
      msg: '账号或密码不能为空',
      codeText: '获取验证码',
      newMsg: '',
      num: 60,
      timer: null,
      isMove: false
    }
  },
  // 计算属性
  computed: {},
  // 监听data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    async logIn () {
      if (this.user.trim() === '' || this.password.trim() === '') return this.open4()
      var res = await this.$axios('/user', {
        params: {
          account: this.user
        }
      })
      // console.log(res)
      if (res.data.value.length === 0) {
        this.msg = '您的账号不存在，请先注册'
        return this.open4()
      }
      var res1 = await this.$axios('/psg', {
        params: {
          password: this.password
        }
      })
      // console.log(res1)
      if (res1.data.value.length === 0) {
        this.msg = '您的密码不正确，请重新输入'
        return this.open4()
      }
      if (this.code === '') {
        this.msg = '验证码不能为空'
        return this.open4()
      }
      if (this.code.toLowerCase() === this.newMsg.toLowerCase()) {
        localStorage.setItem('userinfo', JSON.stringify(res.data.value[0]))
        this.$router.push(`/home`)
      } else {
        this.msg = '验证码不正确'
        return this.open4()
      }
    },
    open4 () {
      this.$message.error(this.msg)
    },
    openMsg () {
      this.$message('验证码是' + this.newMsg)
    },
    async getCode () {
      // if (this.user.trim() === '' || this.password.trim() === '') return this.open4()

      if (!this.isMove) {
        var res2 = await this.$axios.get('https://mock.apifox.cn/m1/1654199-0-default/ks/get_code')
        // console.log(res2)
        if (res2.data.code === '200') {
          this.newMsg = res2.data.img
          this.openMsg()
        }
      }
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.isMove = true
        this.num--
        this.codeText = this.num + '秒后，获取'
        if (this.num === 0) {
          this.codeText = '获取验证码'
          this.num = 5
          this.isMove = false
          clearInterval(this.timer)
        }
      }, 1000)
    }
  },
  // 生命周期，创建完成时（可以访问当前this实例）
  created () {

  },
  // 生命周期：挂载完成时（可以访问DOM元素）
  mounted () {

  }
}
</script>
<style scoped lang="less">
.cont_it {
  width: 390px;
  background-color: #fff;

  .it_tit {
    .Name {
      font-size: 18px;
      font-weight: bold;
      padding: 20px 0;
      text-align: center;
      border-bottom: 1px solid #c2c7cc;
    }
  }

  .it_user,
  .it_pass {
    display: flex;
    align-items: center;
    margin: 0 23px;
    border: 1px solid #bbbbbb;
    height: 38px;
    margin-top: 20px;

    .it_us_item {
      background-color: #f4f4f4;
      height: 38px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: 1px solid #bbb;
      width: 38px;

      i {
        font-size: 18px;
        color: #8e8e8e;
      }
    }

    input {
      flex: 0.9;
      height: 38px;
      border: transparent;
      padding-left: 10px;
      outline: none;
    }
  }

  .it_code {
    display: flex;
    align-items: center;
    margin: 0 23px;
    // border: 1px solid #bbbbbb;
    height: 38px;
    margin-top: 20px;

    .it_us_item {
      background-color: #f4f4f4;
      height: 38px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #bbb;
      width: 38px;

      i {
        font-size: 18px;
        color: #8e8e8e;
      }
    }

    input {
      width: 180px;
      height: 38px;
      border: 1px solid #bbb;
      text-indent: 1em;
    }

    button {
      flex: 1;
      margin-left: 20px;
      height: 38px;
      background: #1b598b;
      color: white;
    }
  }

  .it_dl {
    background-color: #1b598b;
    line-height: 40px;
    text-align: center;
    height: 40px;
    font-size: 15px;
    color: #fff;
    margin: 0 23px;
    margin-top: 20px;
  }

  .it_bt {
    display: flex;
    align-items: center;
    justify-content: right;
    margin: 0 23px;
    margin-top: 28px;
    margin-bottom: 44px;

    span {
      font-size: 15px;
      margin-left: 22px;

      .wjmm {
        color: #1b598b;
        text-decoration: none;
      }

      .mfzc {
        color: #000;
        text-decoration: none;
      }
    }
  }
}</style>
