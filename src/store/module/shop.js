import axios from 'axios'
const state = {
  num: 0
}
const mutations = {
  updateNum (state, n) {
    state.num = n
  }
}
const actions = {
  updateNumSync (context) {
    axios.get('http://127.0.0.1:2525/cart').then(res => {
      console.log(res)
      context.commit('updateNum', res.data.value.length)
    })
  }
}
const getters = {
}
export default {
  // 开启命名空间
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
