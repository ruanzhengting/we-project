import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login/loginPage'
import register from '@/views/register/register'

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
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
