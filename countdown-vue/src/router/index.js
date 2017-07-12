import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/Login/LoginPage'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'LoginPage', component: LoginPage },
    { path: '/dashboard', name: 'dashboard', component: Dashboard, meta: { requiresAuth: true } }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const authUser = JSON.parse(window.localStorage.getItem('authUser'))
    if (authUser && authUser.access_token) {
      next()
    } else {
      next({name: 'LoginPage'})
    }
  }
  next()
})

export default router
