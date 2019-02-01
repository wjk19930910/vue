import axios from 'axios' 
var myaxios = {}
myaxios.install = function (Vue) {
    // 统一挂载请求路径
    axios.defaults.baseURL = 'http://localhost:8888/api/private/v1'
    // 将axios挂载到vue原型中
    axios.interceptors.request.use(function(config){
        if(config.url != '/login') {
            config.headers['Authorization'] = window.localStorage.getItem('token')
        }
        return config
    })
    Vue.prototype.$http = axios
}
export default myaxios