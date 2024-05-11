import {createRouter, createWebHashHistory} from "vue-router"
const router = createRouter({
    history:createWebHashHistory(),
    routes: [{
        path: '/',
        component:() => import('../views/Login.vue')
    },{
        path: '/login',
        redirect: '/'
    },{
        path: '/index',
        component:() => import('../views/Index.vue')
    },{
        path: '/about',
        component:() => import('../views/About.vue')
    }]
})

export default router