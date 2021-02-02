import AboutPage from '../views/en/AboutPage.vue'
import CurriculumPage from '../views/en/CurriculumPage.vue'

export default [
  {
    path: '/en/',
    name: 'HomePage',
    component: AboutPage
  },
  {
    path: '/en/about',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/en/curriculum',
    name: 'CurriculumPage',
    component: CurriculumPage
  }
]
