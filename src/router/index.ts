import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "LoginView",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/select",
      name: "SelectView",
      component: () => import("../views/SelectView.vue"),
    },
    {
      path: "/package/:code",
      name: "PackageView",
      component: () => import("../views/PackageView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/login",
    },
  ],
});

export default router;
