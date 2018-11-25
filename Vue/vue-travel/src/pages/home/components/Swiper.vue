<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="items of swiperList" :key="items.id">
                <img class="swiper-img" :src="items.imgUrl" />
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper> 
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {id: '0001', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/12/856f100069809e02.jpg_750x200_e3485a2b.jpg'},
        {id: '0002', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/7c/8e5c4ab8ee8b7402.jpg_750x200_dd7a38dd.jpg'}
      ] 
    }
  }
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background: #eee
    .wrapper
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 26.7%
        .swiper-img
            width: 100%
</style>
