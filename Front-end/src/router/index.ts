import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/home.vue";
import About from "../components/about.vue";
import Type from "../components/type.vue";
import Next from "../components/next.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
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
      path: "/type",
      name: "type",
      component: Type,
    },
  ],
});

export default router;
