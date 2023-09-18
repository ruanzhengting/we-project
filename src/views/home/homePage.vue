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
      <div class="item" v-for="(item, i) in newArr" :key="i">
        <div class="item-head">
          <p>{{ item.name }}</p>
        </div>
        <div class="item-main">
          <ul>
            <li v-for="it in item.arr" :key="it.id" @click="linkDetail(it.gid)">
              <!-- <span>{{ it.src }}</span> -->
              <img :src="`../static/goods/${it.src}`" alt="">
            </li>
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
        { id: 1, text: ['手机', '数码产品'] },
        { id: 2, text: ['台式电脑', '笔记本电脑'] },
        { id: 3, text: ['文具用品'] },
        { id: 4, text: ['洗漱用品', '清洁用品'] },
        { id: 5, text: ['运动户外', '球类'] },
        { id: 6, text: ['衣服', '鞋靴'] },
        { id: 7, text: ['图书', '音像', '电子书'] },
        { id: 8, text: ['床上用品'] },
        { id: 9, text: ['个人护理', '电动牙刷'] },
        { id: 10, text: ['饮料', '零食', '方便面'] }
      ],
      goodsTitle: ['电脑', '手机', '电器', '图书', '零食'],
      goodsData: [],
      newArr: []
    }
  },
  // 计算属性
  computed: {
  },
  // 监听data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    async getGoodsData () {
      const res = await this.$axios.get('/goods')
      console.log(res)
      this.goodsData = res.data.value
      this.newArr = this.goodsTitle.map((item, i, array) => {
        var a = []
        this.newArr = this.goodsData.map((it, i, array) => {
          if (item === it.type) {
            a.push(it)
          }
        })
        return {name: item, arr: a}
      })
      console.log(this.newArr)
    },
    linkDetail (gid) {
      console.log(gid)
      this.$router.push(`/detail/${gid}`)
    }
  },
  // 生命周期，创建完成时（可以访问当前this实例）
  created () {
    console.log(this.$route.params.username)
    this.getGoodsData()
    this.$bus.$emit('user', this.$route.params.username)
  },
  // 生命周期：挂载完成时（可以访问DOM元素）
  mounted () {

  },
  filters: {
    changeImg (img) {
      return '@/assets/goods/' + img
    }
  }
}
</script>
<style scoped lang="less">
#homePage {
  * {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  .banner {
    display: flex;
    margin-top: 30px;

    .list {
      height: 350px;
      background: #5A5A5A;

      ul {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        padding: 22px;
        box-sizing: border-box;

        li {
          color: white;
          font-size: 14px;

          span {
            margin-right: 10px;
          }

          span:hover {
            color: #b1b1b1;
            cursor: pointer;
          }
        }
      }
    }

    #bannerModal {
      flex: 1;
      height: 350px;
    }
  }

  .goods_item {
    .item {
      overflow-x: auto;
      .item-head {
        height: 62px;
        border-bottom: 2px solid #1B598B;
        color: #1B598B;
        line-height: 62px;
      }

      .item-main {
        margin-top: 28px;

        ul {
          width: 2000px;
          display: flex;
          align-items: center;

          li {
            width: 20%;
            margin: 0 30px;

            img {
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
