<template>
	<div>
		<div class="title">周末去哪玩儿 </div>
		<ul>
			<li class="item border-bottom" v-for="target of RecommendList" :key="target.id">
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
	data () {
		return {
			RecommendList: [
				{id: '0001', imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg', title: '京城人的周末撒欢地', desc: '在帝都过周末，不仅仅是城中游！'},
				{id: '0002', imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg', title: '京城人的周末撒欢地', desc: '在帝都过周末，不仅仅是城中游！'},
				{id: '0003', imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg', title: '京城人的周末撒欢地', desc: '在帝都过周末，不仅仅是城中游！'},
				{id: '0004', imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg', title: '京城人的周末撒欢地', desc: '在帝都过周末，不仅仅是城中游！'}
			]
		}
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
	.item-img-wrapper
		overflow hidden
		padding-bottom 33.5%
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
