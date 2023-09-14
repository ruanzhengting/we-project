<template>
  <div id='order'>
    <div class="order_main">
      <div class="left_list">
        <ul>
          <li><router-link to="/personal">个人中心</router-link></li>
          <li><router-link to="/my">我的订单</router-link></li>
          <li><router-link to="/change">修改密码</router-link></li>
        </ul>
      </div>
      <div class="right_main">
        <router-view></router-view>
      </div>
    </div>
    <bottomModel></bottomModel>
  </div>
</template>
<script>
import bottomModel from '../../components/bottomModel.vue';
export default {
  name: 'order',
  // import引入组件才能使用
  components: {
    bottomModel
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

  }
}
</script>
<style scoped lang="less">
#order {
  .order_main {
    display: flex;
    justify-content: space-between;
    .left_list {
      width:100%;
      ul {
        li {
          font-size: 14px;
          margin: 10px 0px;

          a.router-link-active {
            color: #215496;
            font-weight: bold;
          }
        }
      }
    }
  }

}
</style>
