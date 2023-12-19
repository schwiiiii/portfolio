import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import HypnoEye from './pages/HypnoEye.vue'

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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router