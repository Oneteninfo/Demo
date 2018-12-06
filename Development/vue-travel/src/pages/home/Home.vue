<template>
    <div>
        <home-header></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconsList "></home-icons>
		<home-recommend :list="recommend"></home-recommend>
		<home-weekend :list="weekend"></home-weekend>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
	HomeIcons,
	HomeRecommend,
	HomeWeekend
  },
  data () {
	  return {
		  lastCity: '',
		  swiperList: [],
		  iconsList: [],
		  recommend: [],
		  weekend: []
	  }
  },
  computed: {
	  ...mapState(['city'])
  },
  methods: {
	  getHomeInfo () {
		  axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
	  },
	  getHomeInfoSucc (res) {
		  res = res.data
		  if(res.ret && res.data) {
			  this.swiperList = res.data.swiperList,
			  this.iconsList = res.data.iconList,
			  this.recommend = res.data.recommendList,
			  this.weekend = res.data.weekendList
		  }
	  }
  },
  mounted () {
	  this.lastCity = this.city
	  this.getHomeInfo()
  },
  activated () {
	  if (this.lastCity !== this.city) {
		  this.lastCity = this.city
		  this.getHomeInfo()
	  }
  }
}
</script>

<style>

</style>
