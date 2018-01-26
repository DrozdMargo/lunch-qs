// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(VueResource)
Vue.http.options.root = '/root'
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  http: {
    root: '/root',
    headers: {
      Authorization: 'Basic YXBpOnBhc3N3b3Jk'
    }
  }
})
