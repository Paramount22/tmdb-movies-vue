import { createApp } from 'vue';
import Vue3TouchEvents from 'vue3-touch-events';
import './style.css';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router).use(Vue3TouchEvents);

app.mount('#app');
