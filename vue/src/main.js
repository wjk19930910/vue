// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'
import Element from 'element-ui'
import '@/assets/css/index.css'
import 'element-ui/lib/theme-chalk/index.css'
import MyBread from '@/layout/bread.vue'
import VueQuillEditor from 'vue-quill-editor'
import myaxios from '@/assets/js/myaxios.js'
import moment from 'moment'
import ElTreeGrid from 'element-tree-grid'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'



// axios.defaults.baseURL = 'http://localhost:8888/api/private/v1'
// Vue.prototype.$http = axios

Vue.use(Element)
Vue.use(myaxios)
Vue.use(VueQuillEditor)
Vue.component(MyBread.name, MyBread)
Vue.component(ElTreeGrid.name, ElTreeGrid)
Vue.filter('dateformat', function (value) {
  return moment(value).format('YYYY-MM-DD hh:mm:ss')
})

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
