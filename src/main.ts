import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import 'ant-design-vue/dist/reset.css';
import './styles/index.css'
import store from "./store";
import * as allComponents from 'ant-design-vue';
createApp(App).use(store).use(router).use(allComponents).mount("#app");
