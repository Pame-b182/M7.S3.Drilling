import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '@/views/Inicio.vue'
import PopView from '@/views/PopView.vue'
import RockView from '@/views/RockView.vue'
import RapView from '@/views/RapView.vue'
import AgregarAlbum from '@/views/AgregarAlbumView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: Inicio
  },
  {
    path: '/pop',
    name: 'popView',
    component: PopView
  },
  {
    path: '/rock',
    name: 'rockView',
    component: RockView
  },
  {
    path: '/rap',
    name: 'rapView',
    component: RapView
  },
  {
    path: '/agregar',
    name: 'agregarAlbum',
    component: AgregarAlbum
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
