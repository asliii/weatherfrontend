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
            component: () => import('../views/Login.vue')
        },
        {
            path: '/weather',
            name: 'weather',
            component: () => import('../views/Weather.vue')
        }
    ]
})