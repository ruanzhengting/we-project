<template>
  <div id='bannerModal'>
    <template>
      <div class="block">
        <el-carousel height="350px">
          <el-carousel-item v-for="item in bnrArr" :key="item">
           <img :src="`../../static/bnr/${item}`" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'bannerModal',
  // import引入组件才能使用
  components: {},
  data () {
    return {
      bnrArr: ['bnr1.png', 'bnr2.png', 'bnr3.png']
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
#bannerModal {
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item img{
    width: 100%;
    height: 100%;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
}
</style>
