import axios from "axios";
import { BootstrapVue } from "bootstrap-vue-3";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

axios.defaults.baseURL = "/api";

createApp(App).use(BootstrapVue).use(store).use(router).mount("#app");
