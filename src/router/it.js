import AboutPage from '../views/it/AboutPage.vue'
import CurriculumPage from '../views/it/CurriculumPage.vue'

export default [
  {
    path: '/it/',
    name: 'HomePage',
    component: AboutPage
  },
  {
    path: '/it/about',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/it/curriculum',
    name: 'CurriculumPage',
    component: CurriculumPage
  }
]
