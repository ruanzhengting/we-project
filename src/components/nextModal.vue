<template>
 <div id='nextModal'>
  <span>MY-Mall></span>
  <div class="move-span">
    <slot></slot>
  </div>
 </div>
</template>

<script>
export default {
  name: 'nextModal',
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

  }
}
</script>
<style scoped lang="less">
#nextModal{
  width: 100%;
  height: 48px;
  line-height: 48px;
  background: #E9E9E9;
  box-sizing: border-box;
  padding: 0 156px;
  font-size: 14px;
  color: 606060;
  display: flex;
  .move-span{
    color: #1B598B;
    margin-left: 10px;
  }
}
</style>
