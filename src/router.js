import { createRouter, createWebHistory } from "vue-router";
import Bord from "./components/Bord.vue";
import Classic from "./components/Classic.vue";
import StepByStep from "./components/StepByStep.vue";

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
    {
      path: "/step-by-step",
      component: StepByStep,
    },
  ],
});

export default router;
