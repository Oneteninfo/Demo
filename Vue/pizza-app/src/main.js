// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Home'
import Admin from './components/Admin'
import Login from './components/Login'
import About from './components/about/About'
import Menu from './components/Menu'
import Register from './components/Register'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  {path: '/', component: Home},
  {path: '/menu', component: Menu},
  {path: '/admin', component: Admin},
  {path: '/login', component: Login},
  {path: '/about', component: About},
  {path: '/register', component: Register},
  {path: '*', redirect: '/'}
];

const router = new VueRouter({
    routes,
    mode: 'history'
  })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
