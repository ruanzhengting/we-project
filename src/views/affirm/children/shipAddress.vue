<template>
 <div id='shipAddress'>
  <div class="addr_item active" v-for="(item, i) in addressArr" :key="i">
    <div class="city_item">{{ item.city }} (My-Mall收)</div>
    <div class="area_item">{{ item.addrs }}</div>
    <div class="addr_caozuo">
      <span>编辑</span>
      <span>删除</span>
    </div>
  </div>
  <div class="add_address"  @click="dialogForm">
    <i class="iconfont icon-jia"></i>
    <p>使用新地址</p>
  </div>
  <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
    <el-form :model="form">
      <el-form-item label="收货人姓名" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="所在城市" :label-width="formLabelWidth">
        <!-- 省份 -->
        <el-select v-model="form.provinceId" placeholder="请选择" @change="getCityData">
          <el-option v-for="(item, i) in form.provinceArr" :key="item.id" :label="item.province" :value="i"></el-option>
        </el-select>
        <!-- 城市 -->
        <el-select v-model="form.city" placeholder="请选择" @change="joinAddr">
          <el-option v-for="item in form.cityArr" :key="item.id" :label="item.city" :value="item.city"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="详细地址" :label-width="formLabelWidth">
        <el-input v-model="form.addrs" autocomplete="off" placeholder="请精确到门派号码"></el-input>
      </el-form-item>
      <el-form-item label="收货人手机号" :label-width="formLabelWidth">
        <el-input v-model="form.tel" autocomplete="off" placeholder="填写正确的手机号码"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="linkDialog">确定</el-button>
    </div>
</el-dialog>
 </div>
</template>

<script>
export default {
  name: 'shipAddress',
  // import引入组件才能使用
  components: {},
  data () {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        province: '',
        provinceArr: [],
        provinceId: null,
        city: '',
        cityArr: [],
        addrs: '',
        tel: ''
      },
      formLabelWidth: '120px',
      addressArr: [
        {name: '阮征霆', city: '北京市昌平区', addrs: '南口南大街21号', tel: '13552321519'}
      ]
    }
  },
  // 计算属性
  computed: {},
  // 监听data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    async linkDialog () {
      this.dialogFormVisible = false
      console.log('关闭')
      // this.addressArr.push({name: this.form.name, city: this.form.city, addrs: this.form.addrs, tel: this.form.tel})
      var res = await this.$axios.get('/add/addr', {
        params: {
          name: this.form.name,
          city: this.form.city,
          addrs: this.form.addrs,
          tel: this.form.tel
        }
      })
      console.log(res)
      this.getAddrDate()
    },
    async getprovinceData () {
      var res = await this.$axios.get('http://82.157.191.232:8090/vuedemo/get_provinces')
      this.form.provinceArr = res.data.data
    },
    dialogForm () {
      this.getprovinceData()
      this.dialogFormVisible = true
    },
    async getCityData () {
      var res = await this.$axios.get('http://82.157.191.232:8090/vuedemo/get_cities', {
        params: {
          provinceid: this.form.provinceArr[this.form.provinceId].provinceid
        }
      })
      this.form.cityArr = res.data.data
    },
    joinAddr () {
      this.form.city = this.form.provinceArr[this.form.provinceId].province + this.form.city
    },
    async getAddrDate () {
      var res = await this.$axios.get('/get/addr')
      console.log(res)
      this.addressArr = res.data.value
    }
  },
  created () {
    this.getAddrDate()
  }
}
</script>
<style scoped lang="less">
  #shipAddress{
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    & > div{
      margin-left: 20px;
    }
    .addr_item{
      width: 266px;
      height: 110px;
      border: 3px dashed #C2C7CC;
      margin-bottom: 10px;
      padding: 10px 0 0 10px;
      box-sizing: border-box;
      background: white;
      .city_item{
        height: 26px;
        border-bottom: 1px solid #C2C7CC;
        line-height: 21px;
        font-size: 14px;
        color: #5A5A5A;
      }
      .area_item{
        font-size: 14px;
        color: #5A5A5A;
        margin-top: 5px;
      }
      .addr_caozuo{
        font-size: 14px;
        color: #5A5A5A;
        text-align: right;
        margin-top: 20px;
        padding-right: 10px;
      }
    }
    .addr_item.active{
      border: 3px dashed #215496;
    }
    .add_address{
      width: 266px;
      height: 110px;
      border: 3px dashed #C2C7CC;
      margin-bottom: 10px;
      padding: 10px 0 0 10px;
      box-sizing: border-box;
      background: white;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      i{
        font-size: 40px;
        margin-bottom: 6px;
        color: #C2C7CC;
      }
      p{
        color: #C2C7CC;
        font-size: 14px;
      }
    }
  }
</style>
