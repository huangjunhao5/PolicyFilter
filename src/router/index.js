import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import SearchPage from "@/views/SearchPage.vue";
import SearchResultPage from "@/views/SearchResultPage.vue";
import login from "@/views/login.vue";
import FoundNewPage from "@/views/FoundNewPage.vue";
import MainPage from "@/views/MainPage.vue";
import ArticleDetails from "@/views/ArticleDetails.vue";
import ArticleChanges from "@/views/ArticleChanges.vue";
import FoundHotPage from "@/views/FoundHotPage.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: SearchPage,
  },
  {
    path: '/result',
    name: 'SearchResultPage',
    component: SearchResultPage,
  },
  {
    path: '/login',
    name: 'Login',
    component: login,
  },
  {
    path: '/new',
    name: 'FoundNew',
    component: FoundNewPage,
  },
  {
    path: '/article',
    name: 'ArticleDetails',
    component: ArticleDetails,
  },
  {
    path: '/change',
    name: 'ArticleChanges',
    component: ArticleChanges,
  },
  {
    path: '/hot',
    name: 'FoundHot',
    component: FoundHotPage,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
