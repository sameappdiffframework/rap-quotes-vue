import 'normalize.css';
import 'sakura.css';
import type { QuoteModel } from '@/services/quotes';
import { createApp } from 'vue';
import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router';
import App from './App.vue';
import About from '@/components/About.vue';
import QuoteWall from '@/components/quotes/QuoteWall.vue';

const routes: RouteRecordRaw[] = [
    { path: '/', component: QuoteWall },
    { path: '/about', component: About }
];

const router: Router = createRouter({
    history: createWebHistory(),
    routes: routes
});

createApp(App)
    .use(router)
    .mount(document.body);
