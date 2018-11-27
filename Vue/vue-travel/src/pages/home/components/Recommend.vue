<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<li class="item border-bottom" v-for="target of list" :key="target.id">
				<img class="item-img" :src="target.imgUrl" />
				<div class="item-info">
					<p class="item-title">{{target.title}}</p>
					<p class="item-desc">{{target.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HomeRecommend',
	props: {
		list: Array
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.title
		margin-top .2rem
		line-height .8rem
		background-color #eee
		text-indent .2rem
	.item
		overflow hidden
		display flex
		height 1.9rem
		.item-img
			width 1.7rem
			height 1.7rem
			padding .1rem
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
			.item-button
				margin-top .2rem
				padding 0 .2rem
				line-height .44rem
				background-color #ff9300
				border-radius .06rem
				color #fff
</style>
