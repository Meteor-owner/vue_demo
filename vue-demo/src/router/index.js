import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/User/HomeView.vue')
  },

  {
    path: '/register',
    name: 'register',
    component: () => import('../views/User/RegisterView.vue')

  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/User/LoginView.vue')
  },
  {
    path: '/houseList',
    name: 'houseList',
    component: () => import('../views/User/HouseView.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/User/DetailView.vue')
  },
  {
    path: '/userPage',
    name: 'userPage',
    component: () => import('../views/User/UserView.vue'),
  },
  {
    path: '/offer',
    name: 'offer',
    component: () => import('../views/User/UploadView.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin/AdminView.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
