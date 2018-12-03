import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Goods from '@/components/goods'
import Ratings from '@/components/ratings'
import Sellers from '@/components/sellers'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'goods',
        component: Goods
    }, {
        path: '/goods',
        component: Goods
    }, {
        path: '/ratings',
        component: Ratings
    }, {
        path: '/sellers',
        component: Sellers
    }]
})