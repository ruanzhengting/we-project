<template>
  <div id='loginModel'>
    <div class="head_list"></div>
    <div class="head_tit">
      <div class="d_logo">
        <i class="el-icon-goods"></i>
      </div>
      <p class="tit_p">MY-Mall</p>
    </div>
    <div class="content">
      <slot></slot>
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
  name: 'loginModel',
  // import引入组件才能使用
  components: {},
  props: {},
  data () {
    return {}
  },
  // 计算属性
  computed: {},
  // 监听data中的数据变化
  watch: {},
  // 方法集合
  methods: {},
  // 生命周期/创建完成时(可以访问当前this实例
  created () {},
  // 生命周期:挂载完成时(可以访问DOM元素)
  mounted () {},
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
* {
  margin: 0;
  padding: 0;
  border: 0;
}

#loginModel {
  .head_list {
    width: 100%;
    height: 30px;
    background-color: #e9e9e9;
  }

  .head_tit {
    height: 64px;
    background-color: #fff;
    padding-left: 174px;
    display: flex;
    line-height: 64px;
    align-items: center;

    .d_logo {
      width: 40px;
      height: 40px;
      background-color: #1b598b;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;

      i {
        font-size: 22px;
        color: #fff;
      }
    }

    .tit_p {
      font-size: 20px;
      font-weight: bold;
      color: #1b598b;
      margin-left: 13px;
    }
  }

  .content {
    width: 100%;
    padding: 44px 0;
    background-color: #215496;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .bottom_btn{
    text-align: center;
    font-size: 13px;
    color: #727272;
    ._t{
      margin-top: 34px;
      span{
        margin: 0 12px;
      }
    }
    ._b{
      margin-top: 20px;
    }
  }
}
</style>
