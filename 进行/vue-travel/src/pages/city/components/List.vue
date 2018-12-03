<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="botton-list">
					<div class="botton-wrapper">
						<div class="botton">北京</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="botton-list">
					<div class="botton-wrapper" v-for="item of hot" :key="item.id">
						<div class="botton">{{item.name}}</div>
					</div>
				</div>
			</div>
			<div class="area" v-for="(item, key) of cities" :key="key">
				<div class="title border-topbottom">{{key}}</div>
				<div class="item-list" v-for="innerItem of item" :key="innerItem.id">
					<div class="item border-bottom">{{innerItem.name}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
	name: 'CityList',
	props: {
		cities: Object,
		hot: Array
	},
	mounted () {
		this.scroll = new Bscroll(this.$refs.wrapper)
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.border-topbottom
		&:before
			border-color: #ccc
		&:after
			border-color: #ccc
	.border-bottom
		&:before
			border-color: #ccc
	.list
		overflow: hidden
		position: absolute
		top: 1.58rem
		left: 0
		right: 0
		bottom: 0
		.title
			line-height: .54rem
			background-color: #eee
			padding-left: .2rem
			color: #666
			font-size: .26rem
		.botton-list
			overflow: hidden
			padding: .1rem .6rem .1rem .1rem
			.botton-wrapper
				float: left
				width: 33.33%
				.botton
					margin: .1rem
					padding: .1rem 0
					text-align: center
					border: .02rem solid #ccc
					border-radius: .06rem
		.item-list
			.item
				line-height: .54rem
				padding-left: .2rem
</style>
