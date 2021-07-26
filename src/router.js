import { createRouter, createWebHistory } from "vue-router";
import Bord from "./components/Bord.vue";
import Classic from "./components/Classic.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Bord,
    },
    {
      path: "/classic",
      component: Classic,
    },
  ],
});

export default router;
