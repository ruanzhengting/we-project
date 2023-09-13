<template>
  <div id='search'>
    <div class="box">
      <img src="../../image/detail/logo.jpg" alt="">
      <div class="inp-box">
        <input type="text" placeholder="请输入商品名称">
        <button>搜索</button>
      </div>
    </div>
    <div class="main">
      <p>MY-Mall><span>商品详情</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
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
  .box{
    width:100%;
    border-bottom:4px solid #285998;
    padding:30px 174px;
    background-color:#f7f7f7;
    box-sizing: border-box;
    display:flex;
    justify-content: space-around;
    .inp-box{
      flex:1;
      display:flex;
      justify-content:start;
      margin-left:55px;
      input{
        width:607px;
        height:35px;
        border:3px solid #215496;
      }
      button{
        width:82px;
        height:42.99px;
        background-color:#215496;
        color:#fff;
        border:2px solid #215496;
        font-size:17px;
      }
    }
  }
  .main{
    width:100%;
    background-color:#e9e9e9;
    padding:17px 156px;
    box-sizing:border-box;
    p{
      padding:0;
      margin: 0;
      color:#7c7c7c;
      font-size:15px;
      span{
        margin-left:23px;
      }
    }
  }
</style>
