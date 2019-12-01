import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";
import vueAxios from "vue-axios";

import App from "./App.vue";

import { routes } from "./routes";
import store from "./store/store";

Vue.use(vueAxios, axios);
Vue.use(VueRouter);

Vue.filter("currency", value => {
  return "$" + value.toLocaleString();
});

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
