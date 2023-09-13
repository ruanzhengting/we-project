// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
// 将Iconfont链接添加到HTML文件
const link = document.createElement('link')
link.rel = 'stylesheet'
link.href = '//at.alicdn.com/t/c/font_4249687_96g55ls2pvn.css'
document.head.appendChild(link)
Vue.use(Element, {size: 'small', zIndex: 3000})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
