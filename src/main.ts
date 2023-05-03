import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/routes';
import App from '@/App.vue';
import('focus-visible');
import './styles/main.scss';

const app = createApp(App);
const pinia = createPinia();
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

app.use(pinia);
app.use(router);
app.mount('#app');
