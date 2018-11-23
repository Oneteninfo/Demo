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
        {id: '0001', imgUrl: 'http://img1.qunarzz.com/p/tts0/1803/2e/b0552e2a9c46b402.jpg_640x360_77ce0d76.jpg'},
        {id: '0002', imgUrl: 'http://img1.qunarzz.com/p/tts9/1803/eb/ab21dece1058d502.jpg_640x360_67582315.jpg'}
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
        padding-bottom: 56.25%
        .swiper-img
            width: 100%
</style>
