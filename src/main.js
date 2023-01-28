import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/";
import router from "./router/router";
import "./config/rem";

createApp(App).use(store).use(router).mount("#app");
