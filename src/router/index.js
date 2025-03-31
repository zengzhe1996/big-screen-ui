import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/views/index.vue') },
  { path: '/demo1', component: () => import('@/views/demo1/index.vue') },
  { path: '/demo2', component: () => import('@/views/demo2/index.vue') }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
