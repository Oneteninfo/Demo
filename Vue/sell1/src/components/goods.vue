<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <div v-for="(item,index) in goods" :key="index" class="menu-item">
        <div class="text-wrapper border-1px">
          <span class="icon" v-show="item.type > 0" :class="classMap[item.type]"></span>
          <span class="text">{{item.name}}</span>
        </div>
      </div>
    </div>
    <div class="foods-wrapper" ref="foodWrapper">
      <ul>
        <li v-for="(items,index) in goods" :key="index" class="food-list-hook">
          <div class="items-title">{{items.name}}</div>
          <ul>
            <li v-for="(item2, index) in items.foods" :key="index" class="items-content-wrapper">
              <div class="items-icon">
                <img :src="item2.icon">
              </div>
              <div class="items-content border-1px">
                <div class="items-name">{{item2.name}}</div>
                <div v-show="item2.description" class="items-description">{{item2.description}}</div>
                <div class="ratings">
                  <span>月售{{item2.sellCount}}份</span>
                  <span style="margin-left:12px">好评率{{item2.rating}}%</span>
                </div>
                <div class="prices">
                  <span class="price">{{item2.price}}</span>
                  <span v-if="item2.oldPrice" class="oldPrice" style="margin-left:8px">{{item2.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'goods',
  data () {
    return {
      goods: []
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice_1', 'guarantee']
    axios.get('/good/goods').then(
      res => {
        if (res.data.code === 0) {
          this.goods = res.data.data
        }
      }
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" ref="stylesheet/stylus">
@import '../assets/stylus/index.styl'
.goods
  position absolute
  display flex
  top 174px
  bottom 48px
  left 0
  right 0
  width 100%
  overflow hidden
  .icon
    display inline-block
    vertical-align top
    width 14px
    height 14px
    background-size 14px 14px
    &.decrease
      bg-image('decrease_3')
    &.discount
      bg-image('discount_3')
    &.guarantee
      bg-image('guarantee_3')
    &.invoice
      bg-image('invoice_3')
    &.special
      bg-image('special_3')
  .menu-wrapper
    flex 0 0 80px
    width 80px
    background #f3f5f7
    .menu-item
      padding 0 12px
      font-size 0
      line-height 16px
      &.current
        position relative
        margin-top -1px
        background-color #fff
        &:after
          border-top 1px soild #ffffff
        .text
          font-size 12px
          line-height 14px
          font-weight 500
      .text-wrapper
        display table-cell
        vertical-align middle
        height 54px
        width 56px
        border-1px(rgba(7, 17, 27, .1))
        .text
          font-size 12px
          line-height 14px
          font-weight 200
  .foods-wrapper
    flex 1
    background #ffffff
    .items-title
      height 26px
      padding-left 14px
      font-size 12px
      color rgb(147, 153, 159)
      line-height 26px
      background-color #f3f5f7
      border-left 4px solid #d9dde1
    .items-content-wrapper
      display flex
      margin 18px
      padding-bottom 18px
      position relative
      background #fff
      border-1px rgba(7, 17, 27, .1)
      &:last-child
        border-1px(rgb(255, 255, 255))
        margin-bottom 0
      .items-icon
        flex 0 0 57px
        img
          width 57px
          height 57px
      .items-content
        flex 1
        padding-left 10px
        .items-name
          font-size 14px
          color rgb(7, 17, 27)
          line-height 14px
          margin-top 2px
        .items-description, .ratings
          margin-top 8px
          font-size 10px
          color rgb(147, 153, 159)
          line-height 16px
        .ratings
          span
            display inline-block
        .prices
          font-size 20px
          color rgb(240, 20, 20)
          font-weight 700
          line-height 24px
        .oldPrice
          font-size 10px
          vertical-align top
          color rgb(147, 153, 159)
          font-weight 700
          line-height 20px
          text-decoration line-through
</style>
