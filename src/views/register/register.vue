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
                <input type="text" placeholder="请输入用户名">
              </div>
            </li>
            <li>
              <div class="icon"><i class="el-icon-lock"></i></div>
              <div class="inp">
                <input type="text" placeholder="请输入密码">
              </div>
            </li>
            <li>
              <div class="icon"><i class="el-icon-lock"></i></div>
              <div class="inp">
                <input type="text" placeholder="请再次输入密码">
              </div>
            </li>
            <li>
              <div class="icon"><i class="el-icon-phone"></i></div>
              <div class="inp">
                <input type="text" placeholder="请输入电话">
              </div>
            </li>
            <li>
              <div class="icon"><i class="el-icon-message"></i></div>
              <div class="inp">
                <input type="text" placeholder="请输入邮箱">
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
          <button class="btn">立即注册</button>
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
  beforeCreate () { },
  // 生命周期：挂载之前
  beforeMount () { },
  // 生命周期：更新之前
  beforeUpdate () { },
  // 生命周期：更新之后
  updated () { },
  // 生命周期：销毁之前
  beforeDestroy () { },
  // 生命周期：销毁完成
  destroyed () { },
  // 如果页面有keep-alive缓存功能,这个函数会触发执行
  activated () { }
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
