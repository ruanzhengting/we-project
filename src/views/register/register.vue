<template>
  <div id='register'>
    <loginModel>
      <div class="list">
        <div class="title">新用户注册</div>
        <div class="item">
          <ul>
            <li>
              <div class="icon"><i class="el-icon-user-solid"></i></div>
              <div class="inp">
                <input type="text" placeholder="请输入用户名" v-model="user">
              </div>
            </li>
            <li>
              <div class="icon"><i class="el-icon-lock"></i></div>
              <div class="inp">
                <input type="text" placeholder="请输入密码" v-model="pwd">
              </div>
            </li>
            <li>
              <div class="icon"><i class="el-icon-lock"></i></div>
              <div class="inp">
                <input type="text" placeholder="请再次输入密码" v-model="newPwd">
              </div>
            </li>
            <li>
              <div class="icon"><i class="el-icon-phone"></i></div>
              <div class="inp">
                <input type="text" placeholder="请输入电话" v-model="tel">
              </div>
            </li>
            <li>
              <div class="icon"><i class="el-icon-message"></i></div>
              <div class="inp">
                <input type="text" placeholder="请输入邮箱" v-model="email">
              </div>
            </li>
            <li>
              <div class="icon"><i class="el-icon-question"></i></div>
              <div class="inp">
                <input type="text" placeholder="请输入密码提示问题">
              </div>
            </li>
            <li>
              <div class="icon"><i class="el-icon-key"></i></div>
              <div class="inp">
                <input type="text" placeholder="请输入密码提示答案">
              </div>
            </li>
          </ul>
          <button class="btn" @click="register" :plain="true">立即注册</button>
          <div class="box">
            <router-link to="/login">已有账号，去登录>></router-link>
          </div>
        </div>
      </div>
    </loginModel>
  </div>
</template>

<script>
import loginModel from '@/components/loginModel.vue'
export default {
  name: 'register',
  // import引入组件才能使用
  components: {
    loginModel
  },
  data () {
    return {
      user: '',
      pwd: '',
      newPwd: '',
      tel: '',
      email: '',
      msg: '这一条错误信息'
    }
  },
  // 计算属性
  computed: {},
  // 监听data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    async register () {
      if (this.user === '' || this.pwd === '' || this.newPwd === '' || this.tel === '' || this.email === '') {
        this.msg = '输入框不能为空'
        return this.open4()
      }
      if (this.pwd !== this.newPwd) {
        this.msg = '两次输入的密码不一致'
        return this.open4()
      }
      const res = await this.$axios.get('/user', {
        params: {
          account: this.user
        }
      })
      console.log(res)
      if (res.data.value.length > 0) {
        this.msg = '该账号已注册'
        return this.open4()
      }
      var resl = await this.$axios.get('/addUser', {
        params: {
          account: this.user,
          password: this.pwd,
          username: this.user,
          tel: this.tel,
          email: this.email
        }
      })
      console.log(resl)
      if (resl.data.code === 200) {
        this.open2()
        this.$router.push('/login')
      }
    },
    open4 () {
      this.$message.error(this.msg)
    },
    open2 () {
      this.$message({
        message: '恭喜你，注册成功',
        type: 'success'
      })
    }
  },
  // 生命周期,创建完成时(可以访问当前this实例)
  created () {

  },
  // 生命周期:挂载完成时(可以访问DOM元素)
  mounted () {

  }
}
</script>

<style scoped lang="less">
ul {
  list-style: none;
}

.list {
  width: 390px;
  height: 620px;
  background-color: #fff;
  margin: 0 auto;

  .title {
    width: 100%;
    height: 59px;
    line-height: 59px;
    text-align: center;
    border-bottom: 1px solid #c2c7cc;
    font-size: 20px;
    font-weight: 700;
  }

  .item {
    padding: 20px 0 20px 23px;

    ul li {
      width: 344px;
      height: 38px;
      margin-bottom: 20px;
      border: 1px solid #c2c7cc;
      display: flex;
      align-items: center;

      .icon {
        width: 38px;
        height: 38px;
        text-align: center;
        line-height: 38px;
        background-color: #f4f4f4;
        border-right: 1px solid #c2c7cc;
        color: #8e8e8e;
      }

      .inp {
        width: 297px;

        input {
          border: none;
          outline: none;
          height: 38px;
          width: 100%;
          padding-left: 8px;
          color: #8e8e8e;
        }
      }
    }

    .btn {
      width: 344px;
      height: 40px;
      background-color: #215496;
      color: #fff;
      border: none;
      font-size: 16px;
      margin-bottom: 28px;
    }

    .box {
      display: flex;
      justify-content: end;
      margin-right: 21px;

      a {
        text-decoration: none;
        color: #215496;
        font-size: 14px;
      }
    }
  }
}
</style>
