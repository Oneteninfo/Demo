import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detall from '@/pages/detall/Detall'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
	},
	{
		path: '/City',
		name: 'City',
		component: City
	},
	{
		path: '/detall/:id',
		name: 'Detall',
		component: Detall
	}
  ]
})
