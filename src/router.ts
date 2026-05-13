import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/app/HomeView.vue'
import CategoryView from './views/app/CategoryView.vue'
import SubjectView from './views/app/SubjectView.vue'
import PostView from './views/app/PostView.vue'
import NotFoundView from './views/app/NotFoundView.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/:category(trabalho|estudos|escola)', name: 'category', component: CategoryView },
    {
      path: '/escola/:subject',
      name: 'subject',
      component: SubjectView,
    },
    {
      path: '/escola/:subject/:post',
      name: 'post',
      component: PostView,
    },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView },
  ],
})
