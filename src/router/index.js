import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login/loginPage'
import register from '@/views/register/register'
import home from '@/views/home/homePage'
import detailShopping from '@/views/detail/detailShopping'
import retrievePw from '@/views/retrievePw/retrievePw'
import indexPage from '@/views/index/index'
import cartPage from '@/views/cart/cartPage'
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
      path: '/retrievePw',
      name: 'retrievePw',
      component: retrievePw
    },
    {
      path: '/index',
      name: 'index',
      component: indexPage,
      redirect: '/home',
      children: [
        {
          path: '/home/:username',
          name: 'homePage',
          component: home
        },
        {
          path: '/detail',
          name: 'detailShopping',
          component: detailShopping
        },
        {
          path: '/cart',
          name: 'cartPage',
          component: cartPage
        }
      ]
    }
  ]
})
