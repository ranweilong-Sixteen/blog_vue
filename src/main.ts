import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 路由
import router from "./router/index";
//pinia
import { createPinia } from 'pinia';
const pinia = createPinia();
//Layui
import Layui from '@layui/layui-vue'
import '@layui/layui-vue/lib/index.css'

createApp(App)
    .use(router)
    .use(pinia)
    .use(Layui)
    .mount('#app')
