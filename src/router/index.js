import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/pluginView",
    name: "pluginView",
    component: () => import("/src/views/especifications/pluginView.vue"),
  },
  {
    path: "/",
    name: "Home",
    component: () => import("/src/views/HomeView.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () => import("/src/views/ProductsView.vue"),
  },
  {
    path: "/sejacliente",
    name: "formulaio",
    component: () => import("/src/views/ClientView.vue"),
  },
  {
    path: "/aboutus",
    name: "aboutus",
    component: () => import("/src/views/aboutusView.vue"),
  },
  {
    path: "/electrabot",
    name: "electrabot",
    component: () => import("/bot/views/BotView.vue"),
  },
  {
    path: "/manuais",
    name: "manuaisegp",
    component: () => import("/src/views/ManualView.vue"),
  },
  {
    path: "/sejafornecedor",
    name: "sejafornecedor",
    component: () => import("/src/views/FornecedorView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("/src/views/NotFoundView.vue"),
  },
  {
    path: "/guardon",
    name: "guardon",
    component: () => import("/src/views/especifications/GuardOn.vue"),
  },
  {
    path: "/loginpage",
    name: "loginpage",
    component: () => import("/src/views/pages/LoginPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
