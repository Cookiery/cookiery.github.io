import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/home.vue";
import About from "../components/about.vue";
import Next from "../components/next.vue";
import Page404 from "../components/page404.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
    path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/next",
      name: "next",
      component: Next,
    },
    {
      path: "/404",
      name: "Page404",
      component: Page404,
    },
  ],
});

export default router;
