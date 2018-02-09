import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '@/components/login/SignUp'
import Login from '@/components/login/Login'
import HomePage from '@/components/site/HomePage'
import Menu from '@/components/user-menu/Menu'
import FriendOrder from '@/components/user-menu/FriendOrder'

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
      name: 'Login',
      component: Login
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/friend-order',
      name: 'friend-order',
      component: FriendOrder,
      beforeEnter: (to, from, next) => {
        if (!localStorage.getItem('token')) {
          next('/login')
        } else {
          next()
        }
      }
    }
  ]
})
