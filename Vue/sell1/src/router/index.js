import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/goods'
import Sellers from '@/components/sellers'
import Ratings from '@/components/ratings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'goods',
      component: Goods
    },
    {
      path: '/goods',
      component: Goods
    },
    {
      path: '/ratings',
      component: Ratings
    },
    {
      path: '/sellers',
      component: Sellers
    }
  ]
})
