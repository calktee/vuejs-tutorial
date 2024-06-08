import { createRouter, createWebHistory } from 'vue-router';
import TheMain from '../pages/TheMain.vue';
import NotFound from '../pages/NotFound.vue';
import Blog from '../pages/Blog.vue';

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
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;