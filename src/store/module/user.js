const state = {
  userInfo: JSON.parse(localStorage.getItem('userinfo'))
}
const mutations = {
  updataAddr (state, obj) {
    state.userInfo = obj
  }
}
const actions = {
}
const getters = {
  defAddr (state) {
    return state.userInfo.addr
  }
}
export default {
  // 开启命名空间
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
