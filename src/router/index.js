import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../components/Home/Home')
const City = () => import('../components/City/City')
const Details = () => import('../components/Detail/Details')
Vue.use(Router)
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/details',
    component: Details
  }
]
const router = new Router({
  routes
})
export default router
