<template>
  <div id='register'>
    <div class="top"></div>
    <div class="header">
      <div class="icon"><i class="el-icon-goods"></i></div>
      <p class="name">MY-Mall</p>
    </div>
    <div class="content">
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
            <router-link to="path">已有账号，去注册>></router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="text">幸福大学<span>|</span>图书馆<span>|</span>快乐学院</div>
      <div class="date">Copyright 2023 Mall All rights Reserved</div>
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
*{margin: 0;padding: 0;}
ul{list-style: none;}
#register{
  // width: 1440px;
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
      line-height: 40px;
      text-align: center;
      border-radius: 50%;
      background-color: #1b598b;
      margin-right: 12px;
      i{
        font-size: 22px;
        color: #fff;
      }
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
    display: inline-block;
    .list{
      width: 390px;
      height: 620px;
      background-color: #fff;
      margin: 40px auto;
      .title{
        width: 100%;
        height: 59px;
        line-height: 59px;
        text-align: center;
        border-bottom: 1px solid #c2c7cc;
        font-size: 20px;
        font-weight: 700;
      }
      .item{
        padding: 20px 0 20px 23px;
        ul li{
          width: 344px;
          height: 38px;
          margin-bottom: 20px;
          border: 1px solid #c2c7cc;
          display: flex;
          align-items: center;
          .icon{
            width: 38px;
            height: 38px;
            text-align: center;
            line-height: 38px;
            background-color: #f4f4f4;
            border-right: 1px solid #c2c7cc;
            color: #8e8e8e;
          }
          .inp{
            width: 297px;
            input{
              border: none;
              outline: none;
              height: 38px;
              width: 100%;
              padding-left: 8px;
              color: #8e8e8e;
            }
          }
        }
        .btn{
          width: 344px;
          height: 40px;
          background-color: #215496;
          color: #fff;
          border: none;
          font-size: 16px;
          margin-bottom: 28px;
        }
        .box{
          display: flex;
          justify-content: end;
          margin-right: 21px;
          a{
            text-decoration: none;
            color: #215496;
            font-size: 14px;
          }
        }
      }
    }
  }
  .bottom{
    width: 100%;
    text-align: center;
    font-size: 13px;
    color: #727272;
    padding-top: 32px;
    .text{

    }
  }
}
</style>
