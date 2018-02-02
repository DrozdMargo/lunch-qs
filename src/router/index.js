import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '@/components/login/SignUp'
import LoginPage from '@/components/login/LoginPage'
import HomePage from '@/components/site/HomePage'
import UserComponent from '@/components/user-menu/UserComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
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
