import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Article from "../views/ArticleDetile.vue";
import ArticleList from "../views/ArticleList.vue";
import ArticleNew from "../views/ArticleNew.vue";
import Login from "../views/Login.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/article/new",
    name: "NewArticle",
    component: ArticleNew,
  },
  {
    path: "/article/:id",
    name: "Article",
    component: Article,
  },
  {
    path: "/articlelist",
    name: "ArticleList",
    component: ArticleList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
