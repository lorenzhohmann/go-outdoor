import Vue from "vue";
import VueRouter from "vue-router";
import Filter from "../views/Filter.vue";
import Detail from "../views/Detail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/filter",
    component: Filter
  },
  {
    path: "/detail/:id",
    component: Detail
  }
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes
});

export default router;
