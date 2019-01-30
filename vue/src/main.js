// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Element from 'element-ui'
import '@/assets/css/index.css'
import 'element-ui/lib/theme-chalk/index.css'


axios.defaults.baseURL = 'http://localhost:8888/api/private/v1'
Vue.prototype.$http = axios

Vue.use(Element)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
