const login = () => import('@/views/login/index.vue')

export const publicRoutes = [
    {
        path: '/login',
        name: 'login',
        component: login
    }
]

