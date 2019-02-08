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
import Goods from '@/components/page/goods/goods.vue'
import GoodsAdd from '@/components/page/goods/add.vue'
import Categories from '@/components/page/categories/categories.vue'
import Orders from '@/components/page/orders/orders.vue'
import Reports from '@/components/page/reports/reports.vue'




Vue.use(Router)

var router = new Router({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      name: 'home',
      path: '/home',
      component: Home,
      children: [{
          path: '/users',
          component: Users
        },
        {
          path: '/rights',
          component: Rights
        },
        {
          path: '/roles',
          component: Roles
        },
        {
          path: '/goods',
          component: Goods
        },
        {
          path: '/goods/add',
          component: GoodsAdd
        },
        {
          path: '/categories',
          component: Categories
        },
        {
          path: '/orders',
          component: Orders
        },
        {
          path: '/reports',
          component: Reports
        }
      ]
    }
  ]
})
// 添加一个全局前置守卫(当路由发生改变时会执行)
router.beforeEach((to, from, next) => {
  // 当请求 login 时不应该验证
  if (to.path !== '/login') {
    // 验证 Localstorage 中是否存在 token
    var token = window.localStorage.getItem('token')
    if (!token) {
      // 跳转到登录页面
      router.push('/login')
      Message.error('您还没有登录，请登录')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
