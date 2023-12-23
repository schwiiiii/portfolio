import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import HypnoEye from './pages/HypnoEye.vue'
import ColorComparison from './pages/ColorComparison.vue'

const routes = [
  {
    path: '/portfolio',
    redirect: '/'
  },
  {
    path: '/',
    component: Home,
  },
  {
    path: '/hypno-eye',
    component: HypnoEye
  },
  {
    path: '/color-comparison',
    component: ColorComparison
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router