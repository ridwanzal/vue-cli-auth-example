import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  {
    path: '/',
    name: 'frontpage',
    component: () => import('../views/Frontpage/Landing.vue')
  },
  {
    path: '/auth/masuk',
    name: 'masuk',
    component: () => import('../views/Auth/Login.vue')
  },
  {
    path: '/auth/daftar',
    name: 'daftar',
    component: () => import('../views/Auth/Register.vue')
  },
  {
    path: '/solusi',
    name: 'solusi',
    component: () => import('../views/Frontpage/Solusi.vue')
  },
  {
    path: '/bantuan',
    name: 'bantuan',
    component: () => import('../views/Frontpage/Bantuan.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
