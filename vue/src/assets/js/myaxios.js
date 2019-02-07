import axios from 'axios'
var myaxios = {}
myaxios.install = function (Vue) {
  // 统一挂载请求路径
  axios.defaults.baseURL = 'http://localhost:8888/api/private/v1'
  axios.interceptors.request.use(function (config) {
    // 可以判断当前请求的路径
    // url
    if (config.url != '/login') {
      // 在请求头中添加一个 Authorization
      config.headers['Authorization'] = window.localStorage.getItem('token')
    }
    return config
  })

  // 将 axios 挂载到 vue 的原型中
  Vue.prototype.$http = axios
}
export default myaxios
