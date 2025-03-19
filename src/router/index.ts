import { createWebHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import BasicCalculator from '../views/BasicCalculator.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/basic', component: BasicCalculator },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
