import { createRouter, createWebHistory } from "vue-router";
import Menu from "./components/Menu.vue";
import Classic from "./components/Classic.vue";
import StepByStep from "./components/StepByStep.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Menu,
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
