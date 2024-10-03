import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ProductsView from "@/views/ProductsView.vue";
import ClientView from "@/views/ClientView.vue";
import aboutusView from "@/views/aboutusView.vue";
import BotView from "../../bot/views/BotView.vue";
import ManualView from "@/views/ManualView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/products",
    name: "products",
    component: ProductsView,
  },
  {
    path: "/sejacliente",
    name: "formulaio",
    component: ClientView,
  },
  {
    path: "/sobrenos",
    name: "sobrenos",
    component: aboutusView,
  },
  {
    path: "/electrabot",
    name: "electrabot",
    component: BotView,
  },
  {
    path: "/manuais",
    name: "manuaisegp",
    component: ManualView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
