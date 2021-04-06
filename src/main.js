/*
 * @Author       : heyongfeng
 * @Date         : 2021-04-06 12:49:59
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-06 13:47:54
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/styles/global.scss'
import '@/icons'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
