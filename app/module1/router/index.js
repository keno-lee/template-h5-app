import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: 'home',
    },
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/demo',
    name: 'demo',
    meta: {
      title: 'demo',
    },
    component: () => import(/* webpackChunkName: "demo" */ '../views/Demo.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
