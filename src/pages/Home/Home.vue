<template>
  <div id="homeContainer">
    <div class="headerContainer">
      <div class="header">
        <div class="logo"></div>
        <div class="search">
          <i class="iconfont icon-sousuo"></i>
          <span class="placeholder">搜索商品, 共20259款好物</span>
        </div>
        <div class="toLogin">登录</div>
      </div>
      <div class="navContainer">
        <div class="navScroll">
          <div class="content">
            <div class="item">
              <span>推荐</span>
            </div>
            <div class="item">
              <span>居家生活</span>
            </div>
            <div class="item">
              <span>服饰鞋包</span>
            </div>
            <div class="item">
              <span>美食酒水</span>
            </div>
            <div class="item">
              <span>个护清洁</span>
            </div>
            <div class="item">
              <span>母婴亲子</span>
            </div>
            <div class="item">
              <span>运动旅行</span>
            </div>
            <div class="item">
              <span>数码家电</span>
            </div>
            <div class="item">
              <span>全球特色</span>
            </div>
          </div>
        </div>
        <div class="allClass">
          <div class="linear">
          </div>
          <div class="toggle">
            <div class="all"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(goodsItem,index) in goodsClass" :key="index">
          <img :src="goodsItem.imgUrl" alt="">
        </div>
      </div>
      <div class="swiper-pagination">
      </div>
    </div>
    <div class="growContainer"> 
      <ul class="grow">
        <li class="item"  v-for="(item,index) in policyDescList" :key="index">
          <a>
            <img :src="item.icon" alt="">
            <span>{{item.desc}}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="contentContainer">
      <div class="contentClassify">
        <ul class="kingKong">
          <li class="kItem"  v-for="(item,index) in kingKongList" :key="index">
            <a :href="item.schemeUrl">
              <img :src="item.picUrl" alt="">
              <span>{{item.text}}</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="bigPromotions">
        <div class="floorTop" v-for="(item,index) in floorTop" :key="index">
          <a :href="item.schemeUrl">
            <img :src="item.picUrl" alt="">
          </a>
          <div class="promGood">
            <img src="https://yanxuan-item.nosdn.127.net/5e948fbad2f43381444a150848c4dd1a.png?imageView&thumbnail=168x0&quality=75" alt="">
          </div>
        </div>
        <div class="floorFirst" v-for="(item,index) in floorFirst" :key="index">
          <a :href="item.schemeUrl">
            <img :src="item.picUrl" alt="">
          </a>
        </div>
        <div class="floorSec">
          <a v-for="(item,index) in floorSec" :key="index" :href="item.schemeUrl">
            <img :src="item.picUrl" alt="">
          </a>
        </div>
        <div class="floorSec" >
          <a v-for="(item,index) in floorTh" :key="index" :href="item.schemeUrl">
            <img :src="item.picUrl" alt="">
          </a>
        </div>
      </div>
      <div class="freshMan">
        <div class="freshTitle">
          <span class="txt">新人专享礼</span>
        </div>
        <div class="freshContent">
          <a class="freshLeft" href="javascript:void(0)">
            <div class="leftTitle">新人专享礼包</div>
            <div class="leftImg">
              <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
            </div>
          </a>
          <div class="freshRight">
            <div class="rightTop">
              <a class="rightR" href="javascript:void(0)">
                <div class="cnt">
                  <div class="title">福利社</div>
                  <div class="subTitle">今日特价</div>
                </div>
                <div class="picWrap">
                  <div class="pic">
                    <img src="https://yanxuan-item.nosdn.127.net/7487173f00c801dfe62cb6a8d6e36abd.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
                  </div>
                  <div class="discount">
                    <div class="line1">¥8.9</div>
                    <div class="line2">¥9.9</div>
                  </div>
                </div>
              </a>
            </div>
            <div class="rightBottom">
              <a class="rightR" href="javascript:void(0)">
                <div class="cnt">
                  <div class="title">新人拼团</div>
                  <div class="tag">1元起包邮</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
import Swiper from "swiper"
import 'swiper/css/swiper.min.css';
import goodsClass from '../../../datas/indexCateModule.json'
import indexData from '../../../datas/index.json'
export default {
  data() {
    return {
      goodsClass:[],
      policyDescList:[],
      kingKongList:[],
      floorTop:[],
      floorFirst:[],
      floorSec:[],
      floorTh:[]

    }
  },
  mounted() {
    new BScroll(".navScroll", {
      scrollX: true
    })
    new Swiper ('.swiper-container', {
      loop : true,
      observer:true,
      observeParents:true,
      autoplay:true,
    // 如果需要分页器
      pagination: {
        el:'.swiper-pagination',
      },
    })
    this.goodsClass = goodsClass
    this.policyDescList = indexData.policyDescList
    this.kingKongList = indexData.kingKongModule.kingKongList
    this.floorTop = indexData.bigPromotionModule.floorList[0].cells
    this.floorFirst = indexData.bigPromotionModule.floorList[1].cells
    this.floorSec = indexData.bigPromotionModule.floorList[2].cells
    this.floorTh = indexData.bigPromotionModule.floorList[3].cells
    console.log(this.floorTop)
    console.log(this.floorFirst)
    console.log(this.floorSec)
    console.log(this.floorTh)
  }
}
</script>

<style lang="stylus">
#homeContainer 
  padding-bottom 100px
  .headerContainer 
    // position fixed
    // z-index 2
    background #fff
    .header 
      width 100%
      height 88px
      display flex
      direction culmn
      padding 16px 30px
      box-sizing border-box
      align-items center
      .logo 
        width 138px
        height 40px
        background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp')
        background-size cover
        margin-right 20px
      .search 
        width 442px
        height 56px
        background #ededed
        line-height 56px
        text-align center
        border-radius 10px
        i 
          font-size 28px
          margin-right 10px
        .placeholder 
          font-size 28px
          color #666
      .toLogin 
        width 74px
        height 40px
        margin-left 16px
        border 1px solid #dd1a21
        border-radius 8px
        line-height 40px
        text-align center
        color #dd1a21
    .navContainer
      display flex
      width 100%
      height 60px 
      .navScroll 
        width 650px
        height 60px
        position relative
        overflow hidden
        .content 
          display flex
          flex-wrap nowrap
          white-space nowrap
          height 60px
          position absolute
          left 0
          top 0
          padding 0 30px
          box-sizing border-box
          .item 
            font-size 28px
            height 60px
            position relative
            margin-left 20px
            &:first-child
              margin-left 0
            // &::after
            // content ''
            // position absolute
            // left 0
            // bottom 0
            // width 100%
            // height 4px
            // background-color #DD1A21
            span 
              display inline-block
              line-height 60px
              padding 0 16px
              box-sizing border-box
      .allClass 
        width 160px
        height 60px
        display flex
        .linear
          width 60px
          height 60px
          background-image linear-gradient(to right,rgba(255,255,255,0) 0,#fff 100%)
        .toggle 
          width 100px
          height 60px
          background #fff
          text-align center
          .all 
            width 30px
            height 30px
            background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-9b31adfa37.png?imageView&type=webp)
            background-size 100% 100%
            margin-top 15px
            display inline-block
  .swiper-container
    // padding-top 88px
    width 100%
    height 370px
    img 
      width 100%
    .swiper-pagination-bullet
      background-color #ffffff
      border-radius 3px
      width 40px
      height 4px
      border none 
    .swiper-pagination
      bottom 30px
    .swiper-pagination-bullet-active
      background-color #fff
  .growContainer
    background #fff
    width 100%
    height 72px
    .grow
      width 100%
      height 72px
      padding 0 30px
      box-sizing border-box
      display flex
      .item
        display flex
        width 228px
        height 72px
        line-height 72px
        a
          span 
            color #333
            vertical-align middle
            font-size 27px
          img  
            width 32px
            height 32px
            display inline-block
            vertical-align: middle;

  .contentContainer
    overflow hidden
    .contentClassify
      background #fff
      width 100%
      height 372px
      .kingKong
        width 100%
        height 341px
        .kItem
          box-sizing border-box
          width 110px
          height 156px
          margin 10px 20px 9px 20px
          float left 
          a
            img 
              width 110px
              height 110px
            span 
              color: #333
              font-size 24px
              margin-top 10px
              box-sizing border-box
              display inline-block
    .bigPromotions
      background-color #1674e3
      width 100%
      height 828px
      .floorTop
        width 100%
        height 240px
        position relative
        a
          img 
            width 100%
            height 240px
        .promGood
          position absolute
          top 34px
          left 75px
      .floorFirst
        width 100%
        height 160px
        margin 20px 20px 8px 20px
        box-sizing border-box
        a
          img
            width 710px
            height 160px
      .floorSec
        width 710px
        height 186px
        margin 0 20px 8px 20px
        box-sizing border-box
        display flex
        justify-content space-around
        a

          img
            width 351px
            height 186px

    .freshMan
      background #fff
      width 100%
      height 558px
      margin 20px 0
      box-sizing border-box
      .freshTitle
        width 100%
        height 90px
        padding 0 30px
        text-align center
        box-sizing border-box
        .txt
          display inline-block
          position relative
          width 160px
          height 90px
          font-size 32px
          line-height 90px
          &::before
            content '' 
            width 24px
            height 3px
            background #333
            position absolute
            left -40px
            top 45px
          &::after
            content '' 
            width 24px
            height 3px
            background #333
            position absolute
            right -40px
            top 45px

      .freshContent
        width 100%
        height 438px
        padding-left 30px
        display flex
        .freshLeft
          display block
          width 343px
          height 434px
          background #f9e9cf
          margin-right 4px
          .leftTitle
            color #333
            font-size 32px
            padding 30px 0 0 30px
          .leftImg
            width 258px
            height 257px
            margin 37px 42px 37px 43px
        .freshRight
          width 343px
          height 438px
          .rightTop
            width 343px
            height 215px
            background #FBE2D3
            border-radius 4px
           .rightR
              display block
              background-image url(?quality=75&type=webp&imageView&thumbnail=343x220)
              background-size 100% 100%
              width 343px
              height 215px
              margin 0 4px 4px 0
              padding 20px 0 0 30px
              box-sizing border-box
              position relative
              .cnt
                width 313px
                height 84px
                .title
                  color #333
                  font-size 32px
                  line-height 60px
                .subTitle
                  color #7f7f7f
                  font-size 24px
              .picWrap 
                position absolute
                right 0
                top 15px
                .discount
                  position absolute
                  top 0
                  right 30px
                  width 80px
                  height 80px
                  opacity .8
                  background #F59524
                  border-radius 50%
                  text-align center
                  padding-top 10px
                  color #fff
                  box-sizing border-box
                  .line1
                    font-size 24px
                  .line2
                    font-size 20px 
                    text-decoration line-through
                    margin-top 7px
          .rightBottom
            width 343px
            height 215px
            background #FFECC2
            border-radius 4px
            margin-top 4px
            .cnt
              width 313px
              height 84px
              .title
                color #333
                font-size 32px
                line-height 60px
              .tag
                display inline-block
                color #fff
                font-size 24px
                background #CBB693
                width 120px
                height 32px
                text-align center
                line-height 32px
                border-radius 4px

</style>
