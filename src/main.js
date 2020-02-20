import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'

import router from './router'

import store from './store/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
  //任意实例可以访问store 全局注册
}).$mount('#app')
