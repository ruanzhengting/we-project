import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login/loginPage'
import register from '@/views/register/register'
import home from '@/views/home/homePage'
import detailShopping from '@/views/detail/detailShopping'
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
    },
    {
      path: '/home',
      name: 'homePage',
      component: home
    },
    {
      path: '/detailShopping',
      name: 'detailShopping',
      component: detailShopping
    }
  ]
})
