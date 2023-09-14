<template>
  <div id='personalPage'>
    <div class="title">修改个人信息</div>
    <ul class="list">
      <li>
        <table>用户名：</table>
        <p>Admin</p>
      </li>
      <li>
        <table>电&nbsp;&nbsp;&nbsp;话：</table>
        <input type="text" class="inp">
      </li>
      <li>
        <table>邮&nbsp;&nbsp;&nbsp;箱：</table>
        <input type="text" class="inp">
      </li>
      <li>
        <table>问&nbsp;&nbsp;&nbsp;题：</table>
        <input type="text" class="inp">
      </li>
      <li>
        <table>答&nbsp;&nbsp;&nbsp;案：</table>
        <input type="text" class="inp">
      </li>
    </ul>
    <button class="btn">提交修改</button>
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
  width: 950px;
  height: 345px;
  background-color: #fff;
  margin-top: 20px;
  padding: 0 15px;
  .title{
    line-height: 52px;
    border-bottom: 1px solid #c2c7cc;
    font-size: 18px;
    font-weight: 700;
  }
  .list{
    margin-top: 15px;
    li{
      display: flex;
      line-height: 30px;
      margin-bottom: 8px;
      table{
        font-size: 14px;
        margin-right: 48px;
      }
      p{
        line-height: 30px;
        font-size: 14px;
      }
      .inp{
        width: 325px;
        height: 28px;
        background: none;
        border: 1px solid #c2c7cc;
        border-radius: 5px;
      }
    }
  }
  .btn{
    width: 128px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #215496;
    color: #fff;
    margin: 10px 0 0 105px;
  }
}
</style>
