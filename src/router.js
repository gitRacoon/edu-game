import { createRouter, createWebHistory } from "vue-router";
import Classic from "./components/Classic.vue";
import Bord from "./components/Bord.vue";

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
