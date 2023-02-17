import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 路由
import router from "./router/index";
//pinia
import { createPinia } from 'pinia';
const pinia = createPinia();

createApp(App).use(router).use(pinia).mount('#app')
