import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/login/SignIn'
import LoginPage from '@/components/login/LoginPage'
import UserComponent from '@/components/user-menu/UserComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    },
    {
      path: '/user',
      name: 'UserComponent',
      component: UserComponent
    }
  ]
})
