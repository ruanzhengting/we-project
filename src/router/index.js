import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login/loginPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'loginPage',
      component: login
    }
  ]
})
