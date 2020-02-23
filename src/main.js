import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'

import router from './router'

import store from './store/index'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'lib-flexible/flexible'
import waterfall from 'vue-waterfall2'

Vue.config.productionTip = false

Vue.use(waterfall)

Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router,
  store
  //任意实例可以访问store 全局注册
}).$mount('#app')
