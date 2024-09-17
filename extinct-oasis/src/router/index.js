import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../components/WelcomePage.vue')
        },
        {
            path: '/campevents',
            name: 'events',
            component: () => import('../components/CampEvents.vue')
        },
        {
            path: '/oasisfun',
            name: 'oasis',
            component: () => import('../components/OasisFun.vue')
        },
        {
            path: '/members',
            name: 'members',
            component: () => import('../components/CommunityMembers.vue')
        },
    ]
})

export default router