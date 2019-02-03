import Vue from 'vue'
import Router from 'vue-router'
// 引入登录页面
import Login from '@/components/login/login.vue'
// 引入主页
import Home from '@/components/page/home.vue'
// 引入用户页面
import Users from '@/components/page/users/users.vue'
// 引入权限列表
import Rights from '@/components/page/rights/rights.vue'
// 引入角色列表
import Roles from '@/components/page/roles/roles.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      name:'home',
      path:'/home',
      component:Home,
      children:[
        {path:'/users',component:Users},
        {path:'/rights',component:Rights},
        {path:'/roles',component:Roles},
      ]
    }
  ]
})
