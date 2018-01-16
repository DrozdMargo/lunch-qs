import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/login/SignIn'
import LoginPage from '@/components/login/LoginPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    }
  ]
})
