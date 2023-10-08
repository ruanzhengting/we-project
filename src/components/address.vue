<template>
 <div id='addressVue'>
  <div class="btn">
    <p>配送至：</p>
    <el-popover class="select_wrap"
      placement="bottom"
      width="400"
      @hide="hideEvent"
      trigger="click">
      <select name="" id="province" @change="changePro" v-model="provinceId" placeholder="请选择身份">
        <option v-for="(item, i) in province" :key="i" :value="i">{{ item.province }}</option>
      </select>
      <select id="city" @change="changeCity" v-model="cityId" aria-placeholder="请选择城市">
        <option v-for="(itemC, i) in city" :key="i" :value="i">{{ itemC.city }}</option>
      </select>
      <select name="" id="area" @change="areaEvent" v-model="areaId" aria-placeholder="请选择县">
        <option v-for="(itemA, i) in area" :key="i" :value="i">{{ itemA.area }}</option>
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
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'addressVue',
  // import引入组件才能使用
  components: {},
  data () {
    return {
      addrInfo: '安徽省芜湖市无为市襄安镇',
      province: [],
      provinceId: 0,
      provinceName: '',
      city: [],
      cityId: 0,
      cityName: '',
      area: [],
      areaId: 0,
      areaName: '',
      select: 0
    }
  },
  // 计算属性
  computed: {
    ...mapState('user', ['userInfo'])
  },
  // 监听data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    ...mapMutations('user', ['updataAddr']),
    async getProvince () {
      var res = await this.$axios.get('http://82.157.191.232:8090/vuedemo/get_provinces')
      // console.log(res)
      if (res.data.code === 200) {
        this.province = res.data.data
      }
    },
    async changePro () {
      // console.log(this.province[this.provinceId])
      this.provinceName = this.province[this.provinceId].province
      var res2 = await this.$axios.get('http://82.157.191.232:8090/vuedemo/get_cities', {
        params: {
          provinceid: this.province[this.provinceId].provinceid
        }
      })
      // console.log(res2)
      if (res2.data.code === 200) {
        this.city = res2.data.data
      }
    },
    async changeCity () {
      // console.log(this.city[this.cityId])
      this.cityName = this.city[this.cityId].city
      var res3 = await this.$axios.get('http://82.157.191.232:8090/vuedemo/get_areas', {
        params: {
          cityid: this.city[this.cityId].cityid
        }
      })
      // console.log(res3)
      if (res3.data.code === 200) {
        this.area = res3.data.data
      }
    },
    areaEvent () {
      // console.log(this.area[this.areaId])
      this.areaName = this.area[this.areaId].area
    },
    async hideEvent () {
      if (this.provinceName === '' || this.cityName === '' || this.areaName === '') return
      var addrStr = this.provinceName + this.cityName + this.areaName
      console.log(addrStr)
      console.log(this.userInfo)
      var res = await this.$axios.get('/change/addr', {
        params: {
          addr: addrStr,
          id: this.userInfo.id
        }
      })
      console.log(res)
      var result = await this.$axios.get('/user', {
        params: {
          account: this.userInfo.account
        }
      })
      console.log(this.userInfo)
      console.log(result.data.value[0])
      localStorage.setItem('userinfo', JSON.stringify(result.data.value[0]))
      this.updataAddr(result.data.value[0])
      this.addrInfo = result.data.value[0].addr
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
