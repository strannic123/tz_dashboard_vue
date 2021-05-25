import { createRouter, createWebHistory } from 'vue-router'
import Site from "../views/Site";
import Applications from "../views/Applications";
import About from "../views/About";
import Settings from "../views/Settings";
import Home from "../components/Home";



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/site',
    name: 'Site',
    component: Site
  },
  {
    path: '/applications',
    name: 'Applications',
    component: Applications
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },

]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
