// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import auth from './auth/index'

// Check the users auth status when the app starts
auth.checkAuth()

// Optional
Vue.http.headers.common['Authorization'] = auth.getAuthHeader();

// Import components
import Home from './components/Home.vue'
import SecretQuote from './components/SecretQuote.vue'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'

// Import dependency
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// Vue Use
Vue.use(VueResource)
Vue.use(VueRouter)

export var router = new VueRouter()

// Set up routing and match routes to components
router.map({
  '/home': {
    component: Home
  },
  '/secretquote': {
    component: SecretQuote
  },
  '/login': {
    component: Login
  },
  '/signup': {
    component: Signup
  }
})

// Redirect to the home route if any routes are unmatched
router.redirect({
  '*': '/home'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
