<template>
	<div>
		<city-header></city-header>
		<city-search></city-search>
		<city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
		<city-alphater :cities="cities" @change="handleLetterChange"></city-alphater>
	</div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphater from './components/Alphater'
export default {
	name: 'City',
	data () {
		return {
			cities: {},
			hotCities: [],
			letter: ''
		}
	},
	components: {
		CityHeader,
		CitySearch,
		CityList,
		CityAlphater
	},
	methods: {
		getCityInfo () {
			axios.get('/api/city.json')
			.then(this.handleGetCityInfoSucc)
		},
		handleGetCityInfoSucc (res) {
			res = res.data;
			if (res.ret && res.data) {
				const data = res.data;
				this.cities = data.cities;
				this.hotCities = data.hotCities;
			}
		},
		handleLetterChange (letter) {
			this.letter = letter
		}
	},
	mounted () {
		this.getCityInfo()
	}
}
</script>

<style lang="stylus" scoped>

</style>
