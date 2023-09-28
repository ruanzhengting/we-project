<template>
 <div id='addressVue'>
  <div class="btn">
    <p>配送至：</p>
    <el-popover class="select_wrap"
      placement="bottom"
      width="400"
      @hide="hideEvent"
      trigger="click">
      <select name="" id="province" @change="changePro()" v-model="provinceId">
        <option v-for="(item, i) in province" :key="i" :value="item.provinceid">{{ item.province }}</option>
      </select>
      <select id="city" @change="changeCity" v-model="cityId">
        <option v-for="(itemC, i) in city" :key="i" :value="itemC.cityid">{{ itemC.city }}</option>
      </select>
      <select name="" id="area">
        <option value="昌平区" v-for="(itemA, i) in area" :key="i">{{ itemA.area }}</option>
      </select>
      <el-button slot="reference">
        <p>{{ addrInfo }}</p>
        <i class="el-icon-more"></i>
      </el-button>
</el-popover>
  </div>
 </div>
</template>

<script>
export default {
  name: 'addressVue',
  // import引入组件才能使用
  components: {},
  data () {
    return {
      addrInfo: '安徽省芜湖市无为市襄安镇',
      province: [],
      provinceId: 110000,
      city: [],
      cityId: null,
      area: []
    }
  },
  // 计算属性
  computed: {},
  // 监听data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    async getProvince () {
      var res = await this.$axios.get('http://82.157.191.232:8090/vuedemo/get_provinces')
      // console.log(res)
      if (res.data.code === 200) {
        this.province = res.data.data
      }
    },
    async changePro () {
      var res2 = await this.$axios.get('http://82.157.191.232:8090/vuedemo/get_cities', {
        params: {
          provinceid: this.provinceId
        }
      })
      // console.log(res2)
      if (res2.data.code === 200) {
        this.city = res2.data.data
      }
    },
    async changeCity () {
      var res3 = await this.$axios.get('http://82.157.191.232:8090/vuedemo/get_areas', {
        params: {
          cityid: this.cityId
        }
      })
      // console.log(res3)
      if (res3.data.code === 200) {
        this.area = res3.data.data
      }
    },
    hideEvent () {
      console.log('1111')
    },
    aa (text1) {
      console.log(text1)
    }
  },
  created () {
    this.getProvince()
  }
}
</script>
<style lang="less">
  #addressVue{
    .btn{
      font-size: 14px;
      display: flex;
      .addr_msg{
        margin-left: 20px;
        display: flex;
        align-items: center;
        border: 1px solid #ccc;
        height: 30px;
        i{
          margin-left: 20px;
        }
      }
    }
  }
  .el-popover{
    display: flex;
    select{
      flex: 1;
      margin: 0 10px;
      height: 30px;
      border: 1px solid #ccc;
      outline: none;
    }
  }
</style>
