<template>
  <div id="goods">
      <!-- $refs对象-->
      <div class="menu-wrapper" ref="menuWrapper">
        <div v-for="(item,index) in goods" :key="index" class="menu-item" :class="{current: currentIndex === index}" @click="selectIndex(index,$event)">
          <div class="text-wrapper border-1px">
            <span class="icon" v-show="item.type > 0" :class="classMap[item.type]"></span>
            <span class="text">{{item.name}}</span>
          </div>
        </div>
      </div>
      <div class="foods-wrapper" ref="foodWrapper">
        <ul>
          <li v-for="(items,index) in goods" :key="index" class="foods-list-hook">
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
                    <span class="price">{{item2.price}}</span><span v-if="item2.oldPrice" class="oldPrice" style="margin-left:8px">{{item2.oldPrice}}</span>
                  </div>
                  <div class="cart-control-wrapper">
                    <cartcontrol :food=item2></cartcontrol>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- 留给购物车 -->
      <shopcart :selectFoods=selectFoods :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"></shopcart>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import BScroll from "better-scroll";
import shopcart from "./shopcart";
import cartcontrol from "./cartcontrol";

export default {
  name: "goods",
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      goods: [],
      heightList: [],
      scrollY: 0,
    };
  },
  components: {
    shopcart,
    cartcontrol
  },
  created() {
    this.classMap = [
      "decrease",
      "discount",
      "special",
      "invoice_1",
      "guarantee"
    ];
    axios.get("/good/goods").then(res => {
      var that = this;
      if (res.data.code === 0) {
        that.goods = res.data.data;
        console.log(that.goods);
        Vue.nextTick(() => {
          that._initscroll(); //  dom绑定一个scroll
          that._caculateHeight();
          // 计算一下foods高度
        });
      }
    });
  },
  computed: {

    currentIndex() {
      for (let i = 0; i < this.heightList.length; i++) {
        let height1 = this.heightList[i];
        let height2 = this.heightList[i + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i;
        }
      }
      return 0;
    },
    selectFoods(){
      let foods = [];
      if(this.goods.length !== 0){
        this.goods.forEach(good => {
          good.foods.forEach(food => {
            if(food.count){
              foods.push(food)
            }
          })
        });
      }
      return foods
    }
  },
  methods: {
    selectIndex($index, $event) {
      if (!$event._constructed) {
        return;
      }
      let foodList = this.$refs.foodWrapper.getElementsByClassName(
        "foods-list-hook"
      );
      this.foodScroll.scrollToElement(foodList[$index], 300);
    },
    // better-scroll
    _initscroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      });
      this.foodScroll = new BScroll(this.$refs.foodWrapper, {
        probeType: 3,
        click: true
      });
      this.foodScroll.on("scroll", pos => {
        this.scrollY = Math.abs(Math.round(pos.y));
      });
    },
    _caculateHeight() {
      let foodList = this.$refs.foodWrapper.getElementsByClassName(
        "foods-list-hook"
      );
      let height = 0;
      this.heightList.push(height);
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i];
        height += item.clientHeight;
        this.heightList.push(height);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" ref="stylesheet/stylus">
// 样式已经写的OK了，接下来就是要去完成逻辑的编写
@import '../assets/stylus/index.styl';

#goods {
  display: flex;
  position: absolute;
  top: 174px;
  bottom: 48px;
  left: 0;
  right: 0;
  width: 100%;
  overflow: hidden;

  .icon {
    display: inline-block;
    vertical-align: top;
    width: 14px;
    height: 14px;
    background-size: 14px 14px;

    &.decrease {
      bg-image('decrease_3');
    }

    &.discount {
      bg-image('discount_3');
    }

    &.guarantee {
      bg-image('guarantee_3');
    }

    &.invoice {
      bg-image('invoice_3');
    }

    &.special {
      bg-image('special_3');
    }
  }

  .menu-wrapper {
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;

    .menu-item {
      padding: 0 12px;
      font-size: 0;
      line-height: 16px;

      &.current {
        position: relative;
        margin-top: -1px;
        background-color: #ffffff;

        &:after {
          border-top: 1px solid #ffffff;
        }

        .text {
          font-size: 12px;
          line-height: 14px;
          font-weight: 500;
        }
      }

      .text {
        font-size: 12px;
        line-height: 14px;
        font-weight: 200;
      }
    }

    .text-wrapper {
      display: table-cell;
      vertical-align: middle;
      height: 54px;
      width: 56px;
      border-1px(rgba(7, 17, 27, 0.1));
    }
  }

  .foods-wrapper {
    flex: 1;
    background: #ffffff;

    .items-title {
      height: 26px;
      padding-left: 14px;
      font-size: 12px;
      color: rgb(147, 153, 159);
      line-height: 26px;
      background-color: #f3f5f7;
      border-left: 4px solid #d9dde1;
    }

    .items-content-wrapper {
      display: flex;
      margin: 18px;
      padding-bottom: 18px;
      position: relative;
      background: #ffffff;
      border-1px: rgba(7, 17, 27, 0.1);

      &:last-child {
        border-1px(rgb(255, 255, 255));
        margin-bottom: 0;
      }

      .items-icon {
        flex: 0 0 57px;

        img {
          width: 57px;
          height: 57px;
        }
      }

      .items-content {
        flex: 1;
        padding-left: 10px;

        .items-name {
          font-size: 14px;
          color: rgb(7, 17, 27);
          line-height: 14px;
          margin-top: 2px;
        }

        .items-description, .ratings {
          margin-top: 8px;
          font-size: 10px;
          color: rgb(147, 153, 159);
          line-height: 16px;
        }

        .ratings {
          span {
            display: inline-block;
          }
        }

        .prices {
          font-size: 20px;
          color: rgb(240, 20, 20);
          font-weight: 700;
          line-height: 24px;
        }

        .oldPrice {
          font-size: 10px;
          vertical-align: top;
          color: rgb(147, 153, 159);
          font-weight: 700;
          line-height: 20px;
          text-decoration: line-through;
        }

        .cart-control-wrapper {
          position: absolute;
          right: 0;
          bottom: 12px;
        }
      }
    }
  }
}
</style>
