import axios from "axios";
import { BootstrapVue } from "bootstrap-vue-3";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

axios.defaults.baseURL = "/api";

Vue.createApp(App).use(BootstrapVue).use(store).use(router).mount("#app");
