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
    meta: {
      breadcrumb: [
        {name: "Главная", link: '/'}
      ]
    }
  },
  {
    path: '/site',
    name: 'Site',
    component: Site,
    meta: {
      breadcrumb: [
        {name: "Главная", link: 'home'},
        {name: "Сайт"}
      ]
    }
  },
  {
    path: '/applications',
    name: 'Applications',
    component: Applications,
    meta: {
      breadcrumb: [
        {name: "Главная", link: '/'},
        {name: "Заявки"}
      ]
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      breadcrumb: [
        {name: "Главная", link: '/'},
        {name: "О нас"}
      ]
    }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: {
      breadcrumb: [
        {name: "Главная", link: '/'},
        {name: "Настройки"}
      ]
    }
  },

]




const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
