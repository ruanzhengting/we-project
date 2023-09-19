import Vue from 'vue'
import Router from 'vue-router'
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
      component: () => import('@/views/login/loginPage')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/register/register')
    },
    {
      path: '/retrievePw',
      name: 'retrievePw',
      component: () => import('@/views/retrievePw/retrievePw')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/views/index/index'),
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'homePage',
          component: () => import('@/views/home/homePage')
        },
        {
          path: '/detail/:id',
          name: 'detailShopping',
          component: () => import('@/views/detail/detailShopping')
        },
        {
          path: '/cart',
          name: 'cartPage',
          component: () => import('@/views/cart/cartPage')
        },
        {
          path: '/order',
          name: 'order',
          component: () => import('@/views/order/order'),
          children: [
            {
              path: '/personal',
              name: 'personalPage',
              component: () => import('@/views/order/children/personal/personalPage')
            },
            {
              path: '/my',
              name: 'myOrderFrom',
              component: () => import('@/views/order/children/my/myOrderForm')
            },
            {
              path: '/change',
              name: 'index',
              component: () => import('@/views/order/children/changePsd/index')
            }
          ]
        }
      ]
    }
  ]
})
