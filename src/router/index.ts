import { createWebHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import BasicCalculator from '../views/BasicCalculator.vue'
import ScientificCalculator from '../views/ScientificCalculator.vue'

const routes = [
  {
    path: '/',
    component: Home,
    meta: { title: 'Calculator App' },
  },
  { path: '/basic', component: BasicCalculator, meta: { title: 'Basic Calculator' } },
  {
    path: '/scientific',
    component: ScientificCalculator,
    meta: { title: 'Scientific Calculator' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
  const { title } = to.meta
  document.title = `${title}`
})

export default router
