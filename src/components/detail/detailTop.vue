<template>
  <div id='detailTop'>
    <div class="s-topBox">
      <div class="left">
        <div>欢迎您,<span>Admin</span></div>
        <button>退出</button>
      </div>
      <div class="right">
        <div>
          <span class="iconfont icon-gouwuche-tianchong iconhome" style=""></span>
          <span>购物车</span>
          <span>(<span>1</span>)</span>
        </div>
        <span>我的订单</span>
        <span>我的Mall</span>
        <span>关于MY-Mall</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailTop',
  // import引入组件才能使用
  components: {},
  props: {},
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
  beforeCreate () { }, // 生命周期：创建之前
  beforeMount () { }, // 生命周期：挂载之前
  beforeUpdate () { }, // 生命周期：更新之前
  updated () { }, // 生命周期：更新之后
  beforeDestroy () { }, // 生命周期：销毁之前
  destroyed () { }, // 生命周期：销毁完成
  activated () { } // 如果页面有keep-alive缓存功能,这个函数会触发执行
}
</script>
<style scoped lang="less">
.s-topBox{
  width:100%;
  display:flex;
  justify-content:space-between;
  padding:0 155px;
  box-sizing: border-box;
  background-color:#e9e9e9;
  color:#8b8b8b;
  .left{
    display:flex;
    justify-content:space-evenly;
    align-self: center;
    div{
      margin-right:35px;
      span{
        margin-left:10px;
      }
    }
    button{
      color:#3f69a2;
      list-style: none;
      background-color:#e9e9e9;
      border:none;
    }
  }
  .right{
    display:flex;
    justify-content:space-around;
    align-self: center;
    div{
      display:flex;
      justify-content:space-around;
      span{
        margin-left:0;
      }
    }
    .iconhome{
      width:20px;
      height:20px;
      display:block;
      color:#8d8d8d;
      line-height:20px;
      margin-right:3px;
    }
    span{
      margin-left:25px;
      span{
        margin-left:0;
        color:#3f69a2;
      }
    }
  }
}

</style>
