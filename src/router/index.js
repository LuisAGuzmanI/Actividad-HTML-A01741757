import { createWebHistory, createRouter } from "vue-router";
import Inicio from "@/views/Inicio.vue";
import Contacto from "@/views/Contacto.vue";

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Inicio,
  },
  {
    path: "/Contacto",
    name: "Contacto",
    component: Contacto,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;