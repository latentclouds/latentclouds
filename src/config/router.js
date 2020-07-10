import Vue from 'vue'

// add vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// define routes
const HomePage = () => import('../components/routes/HomePage.vue')
const GeneralErrorPage = () => import('../components/GeneralErrorPage.vue')

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: HomePage
    },
    {
      path: '/contact',
      name: 'contact',
      component: HomePage
    },
    {
      path: '/general-error',
      name: 'general-error',
      component: GeneralErrorPage
    },
    {
      path: '*',
      name: 'other',
      component: HomePage
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
