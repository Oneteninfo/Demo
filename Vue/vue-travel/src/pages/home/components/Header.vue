<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont icon-back">&#xe624;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <div class="header-right">
            城市
            <span class="iconfont icon-arrow">&#xe64a;</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        display: flex
        line-height: .86rem
        background: $bgColor
        color: #f0f0f0
        .header-left
            width: .64rem
            float: left
            .icon-back
                display: block
                text-align: center
                font-size: .4rem
        .header-input
            flex: 1
            height: .64rem
            line-height: .64rem
            margin-left: .2rem
            margin-top: .12rem
            padding-left: .2rem
            background: #fff
            color: #eee
            border-radius: .1rem
        .header-right
            width: 1.24rem
            text-align: center
            float: right
            .icon-arrow
                margin-left: -.04rem
                font-size: .24rem
</style>
