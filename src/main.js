/*
 * @Author       : heyongfeng
 * @Date         : 2021-04-06 12:49:59
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-06 15:17:00
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// ----------vant--------
import Vant from 'vant'
import 'vant/lib/index.less'
Vue.use(Vant)

import '@/styles/global.scss'
import '@/icons'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
