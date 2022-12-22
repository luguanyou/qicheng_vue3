import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "account" */ '../views/About.vue')
    },
    {
      path: '/upload',
      name: 'upload',
      component: () => import(/* webpackChunkName: "account" */ '../views/Upload.vue')
    },
    {
      path: '/address',
      name: 'address',
      component: () => import(/* webpackChunkName: "account" */ '../views/Address.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "account" */ '../views/Home.vue')
    }
  ]
})
export default router