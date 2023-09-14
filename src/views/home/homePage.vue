<template>
  <div id='homePage'>
    <div class="banner">
        <div class="list">
          <ul>
            <li v-for="item in list" :key="item.id">
              <span v-for="(it, i) in item.text" :key="i">{{ it }}</span>
            </li>
          </ul>
        </div>
        <bannerModalVue></bannerModalVue>
      </div>
      <div class="goods_item">
        <div class="item">
          <div class="item-head">
            <p>电脑/数码产品</p>
          </div>
          <div class="item-main">
              <ul>
                <li><img src="../../assets/image/a1.png" alt=""></li>
                <li><img src="../../assets/image/a2.png" alt=""></li>
                <li><img src="../../assets/image/a3.png" alt=""></li>
                <li><img src="../../assets/image/a1.png" alt=""></li>
                <li><img src="../../assets/image/a2.png" alt=""></li>
              </ul>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import bannerModalVue from '@/components/bannerModal.vue'
export default {
  name: 'homePage',
  // import引入组件才能使用
  components: {
    bannerModalVue
  },
  data () {
    return {
      list: [
        {id: 1, text: ['手机', '数码产品']},
        {id: 2, text: ['台式电脑', '笔记本电脑']},
        {id: 3, text: ['文具用品']},
        {id: 4, text: ['洗漱用品', '清洁用品']},
        {id: 5, text: ['运动户外', '球类']},
        {id: 6, text: ['衣服', '鞋靴']},
        {id: 7, text: ['图书', '音像', '电子书']},
        {id: 8, text: ['床上用品']},
        {id: 9, text: ['个人护理', '电动牙刷']},
        {id: 10, text: ['饮料', '零食', '方便面']}
      ]
    }
  },
  // 计算属性
  computed: {},
  // 监听data中的数据变化
  watch: {},
  // 方法集合
  methods: {

  },
  // 生命周期，创建完成时（可以访问当前this实例）
  created () {
    console.log(this.$route.params.username)
    this.$bus.$emit('user', this.$route.params.username)
  },
  // 生命周期：挂载完成时（可以访问DOM元素）
  mounted () {

  }
}
</script>
<style scoped lang="less">
#homePage{
  *{margin: 0;padding: 0;}
  li{list-style: none;}
  .banner{
      display: flex;
      margin-top: 30px;
      .list{
        height: 350px;
        background: #5A5A5A;
        ul{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          padding: 22px;
          box-sizing: border-box;
          li{
            color: white;
            font-size: 14px;
            span{
              margin-right: 10px;
            }
            span:hover{
              color: #b1b1b1;
              cursor: pointer;
            }
          }
        }
      }
      #bannerModal{
        flex: 1;
        height: 350px;
      }
    }
    .goods_item{
      .item{
        .item-head{
          height: 62px;
          border-bottom: 2px solid #1B598B;
          color: #1B598B;
          line-height: 62px;
        }
        .item-main{
          margin-top: 28px;
          ul{
            width: 100%;
            display: flex;
            align-items: center;
            li{
              flex: 1;
              margin: 0 30px;
              img{
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
}
</style>
