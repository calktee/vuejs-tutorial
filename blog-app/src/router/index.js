import { createRouter, createWebHistory } from 'vue-router';
import TheMain from '../pages/TheMain.vue';

const routes = [
    {
        path: '/',
        name: 'TheMain',
        component: TheMain
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../pages/About.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;