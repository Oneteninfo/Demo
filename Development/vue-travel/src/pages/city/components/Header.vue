<template>
	<div class="header">
		<router-link to="/">
			<div class="iconfont icon-back">&#xe624;</div>
		</router-link>
		城市列表
	</div>
</template>

<script>
export default {
	name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.header
		position relative
		overflow: hidden
		height: .86rem
		line-height: .86rem
		text-align: center
		color: #fff
		font-size: .32rem
		background-color: $bgColor
		.icon-back
			position: absolute
			top: 0
			left: 0
			width: .64rem
			text-align: center
			font-size: .4rem
			color: #fff
</style>
