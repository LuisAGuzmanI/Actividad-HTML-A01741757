import { createWebHistory, createRouter } from "vue-router";
import Inicio from "@/views/Inicio.vue";
import Wallpaper from "@/views/Wallpaper.vue";

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Inicio,
  },
  {
    path: "/wallpaper",
    name: "Wallpaper",
    component: Wallpaper,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;