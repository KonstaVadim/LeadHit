import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
Vue.use(Router)

import Authorization from '../components/Authorization'
import Analytics from '../components/Analytics'

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'auth',
            component: Authorization
        },
        {
            path: '/analytics',
            name: 'analytics',
            component: Analytics
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (!store.getters.getLeadhitSiteId && to.name !== 'auth') next({name: 'auth'})
    else next()
})

export default router;
