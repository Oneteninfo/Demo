<template>
	<div>
		<city-header></city-header>
		<city-search></city-search>
		<city-list></city-list>
		<city-alphater></city-alphater>
	</div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphater from './components/Alphater'
export default {
	name: 'City',
	components: {
		CityHeader,
		CitySearch,
		CityList,
		CityAlphater
	}
}
</script>

<style lang="stylus" scoped>

</style>
