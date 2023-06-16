import Vue from "vue";
import Router from "vue-router";

Vue.use(Router)

export default new Router({
    base: '/',
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('../components/Login.vue')
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('../components/Dashboard.vue')
        }
    ]
})