import Vue from 'vue'
import VueRouter from 'vue-router'
import routesIT from './it.js'
import routesEN from './en.js'
import HomePage from '../views/en/AboutPage.vue'

import Meta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(Meta)

let routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/*',
    name: 'HomePage',
    component: HomePage
  }
]

routes = routesIT.concat(routesEN, routes)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
