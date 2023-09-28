import Vue from 'vue'
import Vuex from 'vuex'
import shop from './module/shop'
import user from './module/user'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    shop,
    user
  }
})
