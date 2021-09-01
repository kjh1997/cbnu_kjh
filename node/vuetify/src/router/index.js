import Vue from 'vue'
import VueRouter from 'vue-router'
import GridSystem from '../views/GridSystem.vue'
import Dashboard from '../views/Dashboard.vue'
import GridListPage from '../views/GridListPage.vue'
import Breakpoint from '../views/Breakpoint.vue'
import Typography from '../views/Typography.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/Typography',
    name: 'Typography',
    component: Typography
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/GridSystem',
    name: 'GridSystem',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: GridSystem
  },
  {
    path: '/GridListPage',
    name: 'GridListPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: GridListPage
  }
  ,
  {
    path: '/Breakpoint',
    name: 'Breakpoint',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Breakpoint
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
