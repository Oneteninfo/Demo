<template>
	<div>
		<div class="title">周末去哪玩儿 </div>
		<ul>
			<li class="item border-bottom" v-for="target of list" :key="target.id">
				<div class="item-img-wrapper">
					<img class="item-img" :src="target.imgUrl" />
				</div>
				<div class="item-info">
					<p class="item-title">{{target.title}}</p>
					<p class="item-desc">{{target.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HomeWeekend',
	props: {
		list: Array
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.title
		line-height .8rem
		background-color #eee
		text-indent .2rem
	.item-img-wrapper
		overflow hidden
		padding-bottom 37.09%
		height 0
		.item-img
			width 100%
	.item-info
		flex 1
		padding .1rem
		min-width 0
		.item-title
			line-height .54rem
			font-size .32rem
			ellipsis()
		.item-desc
			line-height .4rem
			color #ccc
			ellipsis()
</style>
