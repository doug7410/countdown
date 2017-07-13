import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex/store'
import LoginPage from '@/components/Login/LoginPage'
import Dashboard from '@/components/Dashboard/Dashboard'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'LoginPage', component: LoginPage },
    { path: '/dashboard', name: 'dashboard', component: Dashboard, meta: { requiresAuth: true } }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name === 'LoginPage' && store.getters.accessToken) {
    next({name: 'dashboard'})
  }

  if (to.meta.requiresAuth) {
    if (store.getters.accessToken) {
      next()
    } else {
      next({name: 'LoginPage'})
    }
  }

  next()
})

export default router
