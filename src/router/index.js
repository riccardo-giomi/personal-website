import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/it/HomePage.vue'
import CurriculumPage from '../views/it/CurriculumPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/curriculum',
    name: 'CurriculumPage',
    component: CurriculumPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
