import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Homes from '../views/Homes.vue'
import Company from '../views/Company.vue'
import Housing from '../views/Housing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/heimili',
    name: 'Homes',
    component: Homes
  },
  {
    path: '/fyrirtaeki',
    name: 'Company',
    component: Company
  },
  {
    path: '/husfelog',
    name: 'Housing',
    component: Housing
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
