import { createRouter, createWebHistory } from 'vue-router';
import routes from '../services/routes';

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;