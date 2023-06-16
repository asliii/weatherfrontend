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
            path: '/weather',
            name: 'weather',
            component: () => import('../components/Weather.vue')
        },
        {
            path: '/weather_detail_page',
            name: 'weather_detail_page',
            component: () => import('../components/WeatherDetail.vue')
        }
    ]
})