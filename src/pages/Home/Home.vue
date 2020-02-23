<template>
  <div id="homeContainer">
    <div class="headerContainer">
      <div class="header">
        <div class="logo"></div>
        <div class="search">
          <i class="iconfont icon-sousuo"></i>
          <span class="placeholder">
            <router-link to="/Search">搜索商品, 共20259款好物</router-link>
          </span>
        </div>
        <div class="toLogin">
          <router-link to="/Personal">登录</router-link>
        </div>
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
      <div class="categoryHotSell">
        <div class="cateTitle">
          <span>类目热销榜</span>
        </div>
        <div class="content">
          <div class="contentTop">
            <div class="contentT" v-for="(item,index) in hotSell" :key="index">
              <a :href="item.targetUrl">
                <div class="name">
                  <span>{{item.categoryName}}</span>
                </div>
                <div class="picWrap">
                  <img :src="item.showPicUrl" alt="">
                </div>
              </a>
            </div>
          </div>
          <div class="contentBottom">
            <div class="contentB" v-for="(item,index) in hotSellLists" :key="index">
              <a :href="item.targetUrl">
                <div class="name">
                  <span>{{item.categoryName}}</span>
                </div>
                <div class="picWrap">
                  <img :src="item.showPicUrl" alt="">
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="flashSale">
        <div class="flashTitle">
          <div class="left">
            <span>限时购</span>
            <div class="count">
              <CountTime />
            </div>
          </div>
          <a class="right" href="">
            <div class="more">更多></div>
          </a>
        </div>
        <div class="flashSalecontent">
          <div class="flashSaleItem" v-for="(item,index) in flashSale" :key="index">
            <a href="javascript:void(0)">
              <div class="picWrap">
                <img :src="item.showPicUrl" alt="">
              </div>
              <div class="price">
                <span class="newP">¥{{item.activityPrice}}</span>
                <span class="oldP">¥{{item.originPrice}}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="newItem">
        <div class="newItemTitle">
          <div class="left">
            <span>新品首发</span>
          </div>
          <a class="right" href="">
            <div class="more">更多></div>
          </a>
        </div>
        <div class="newItemcontent">
          <div class="newItemItem" v-for="(item,index) in newItemList" :key="index">
            <a href="javascript:void(0)">
              <div class="picWrap">
                <img :src="item.showPicUrl" alt="">
              </div>
              <div class="dec">
                <span class="name">{{item.name}}</span>
                <div class="price">
                  <span>¥{{item.retailPrice}}</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="sceneLightShoppingGuide">
        <div class="sItem" v-for="(item,index) in sceneLightShoppingGuide" :key="index">
          <a href="javascript:void(0)">
            <div class="title">{{item.styleItem.title}}</div>
            <div class="desc">{{item.styleItem.desc}}</div>
            <div class="picWrap">
              <img :src="item.styleItem.picUrlList[0]" alt="">
              <img :src="item.styleItem.picUrlList[1]" alt="">
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="btns">
        <a href="/downloadapp?_stat_from=search_pz_baidu_29&appAwakeUrl=http%3a%2f%2fm.you.163.com">下载APP</a>
        <a href="https://you.163.com?_m_forcepc_=true&_m_anonid_=c3e4d6ee-31a6-4a73-95ec-833ce8f02a83">电脑版</a>
      </div>
      <p>
        <span>网易公司版权所有 © 1997-2020</span>
        <span>食品经营许可证：JY13301080111719</span>
      </p>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
import Swiper from "swiper"
import 'swiper/css/swiper.min.css';
import goodsClass from '../../../datas/indexCateModule.json'
import indexData from '../../../datas/index.json'
import CountTime from '../../components/CountTime/CountTime'
import {mapState} from 'vuex'
export default {
  components:{CountTime},
  data() {
    return {
      goodsClass:[],
      policyDescList:[],
      kingKongList:[],
      floorTop:[],
      floorFirst:[],
      floorSec:[],
      floorTh:[],
      hotSells:[],
      hotSell:[],
      hotSellList:[],
      flashSale:[],
      newItemList:[],
      sceneLightShoppingGuide:[]
    }
  },
  async mounted() {
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
    this.hotSells = indexData.categoryHotSellModule.categoryList
    this.hotSell = indexData.categoryHotSellModule.categoryList.slice(0,2)
    this.hotSellLsit = indexData.categoryHotSellModule.categoryList.slice(2, indexData.categoryHotSellModule.categoryList.length)
    this.flashSale = indexData.flashSaleModule.itemList
    this.newItemList = indexData.newItemList.slice(0,-2)
    this.sceneLightShoppingGuide = indexData.sceneLightShoppingGuideModule

    console.log(this.hotSellLsit)

    this.$store.dispatch('getHotSell')
   
    
  },
  computed:{
    ...mapState({
      hotSellLists: state => state.hotSellList
    })
  }
}
</script>

<style lang="stylus">
#homeContainer 
  padding-bottom 100px
  .headerContainer 
    width 100%
    position fixed
    z-index 2
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
        a
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
          width 40px
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
    padding-top 88px
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
    .categoryHotSell
      background-color #fff
      width 100%
      height 710px
      margin-bottom 20px
      .cateTitle
        width 100%
        height 100px
        padding-left 30px
        line-height 100px
        span  
          font-size 32px
      .content
        width 100%
        height 610px
        padding 0 20px 20px 30px
        box-sizing border-box
        .contentTop
          display flex
          height 200px
          .contentT
            position relative
            width 340px
            height 200px
            background #F9F3E4
            margin 0 10px 10px 0
            &:nth-child(2)
              background #EBEFF6
            .name
              font-size 28px
              margin-top 66px
              padding-left 24px
              color #333
              box-sizing border-box
              &::before
                content ''
                width 48px
                height 4px
                position absolute
                bottom 80px
                background #333
            .picWrap
              width 200px
              height 200px
              position absolute
              top 0
              right 0
              img
                width 200px
                height 200px
        .contentBottom
          display flex
          height 360px
          margin-top 10px
          flex-wrap wrap
          .contentB
            width 165px
            height 180px
            background #F5F5F5
            display flex
            margin 0 10px 10px 0
            .name
              font-size 24px
              color #333
              text-align center
              margin-top 10px
              width 165px
              height 36px
              line-height 36px
            .picWrap
              width 120px
              height 120px
              margin-left 23px
              margin-top 2px
              img
                width 120px
                height 120px
    .flashSale
      background-color #fff
      width 100%
      height 710px
      margin-bottom 20px
      position relative
      .flashTitle
        width 100%
        height 100px
        padding 0 30px
        box-sizing border-box
        line-height 100px
        display flex
        .left
          float left
          display flex
          span  
            font-size 32px
          .count
            width 182px
            height 99px
            padding-top 33px
            box-sizing border-box
        .right
          display block
          width 77px
          height 99px
          position absolute
          right 30px
          font-size 28px
          color #333
      .flashSalecontent
        width 100%
        height 600px
        padding 0 10px 0 30px
        box-sizing border-box   
        display flex
        flex-wrap wrap
        .flashSaleItem
          width 216px
          height 300px
          margin-right 20px
          padding-bottom 30px
          box-sizing border-box
          a
            .picWrap
             width 216px
             height 216px
             background #F5F5F5
             margin-bottom 12px
             img 
              width 216px
              height 216px
            .price
              width 216px
              height 42px
              padding-left 20px
              box-sizing border-box
              line-height 42px
              .newP
                color #DD1A21
                font-size 28px
                margin-right 12px
              .oldP
                text-decoration line-through
                font-size 24px
    .newItem
          background-color #fff
          width 100%
          height 923px
          margin-bottom 20px
          position relative
          .newItemTitle
            width 100%
            height 100px
            padding 0 30px
            box-sizing border-box
            line-height 100px
            display flex
            .left
              float left
              display flex
              span  
                font-size 32px
            .right
              display block
              width 77px
              height 99px
              position absolute
              right 30px
              font-size 28px
              color #333
          .newItemcontent
            width 100%
            height 600px
            padding 0 10px 0 30px
            box-sizing border-box   
            display flex
            flex-wrap wrap
            .newItemItem
              width 216px
              height 398px
              margin-right 20px
              padding-bottom 30px
              box-sizing border-box
              a
                .picWrap
                  width 216px
                  height 216px
                  background #F5F5F5
                  margin-bottom 12px
                  img 
                    width 216px
                    height 216px
                .dec
                  width 216px
                  height 42px
                  box-sizing border-box
                  line-height 38px
                  .name
                    display block
                    width 215px
                    height 67px
                    color #333
                    overflow hidden
                    text-overflow ellipsis
                    display -webkit-box
                    -webkit-line-clamp 2
                    -webkit-box-orient vertical
                  .price
                    color #DD1A21
                    font-size 32px
                    margin 10px 12px 0 0
    .sceneLightShoppingGuide
      background #fff
      width 100%
      height 576px
      padding 10px 30px 30px 26px
      box-sizing border-box
      display flex
      flex-wrap wrap
      .sItem
        display block
        background #F5F5F5
        width 343px
        height 264px
        margin 4px 0 0 4px
        padding 20px 0 0 20px
        box-sizing border-box
        .title
          height 48px
          line-height 48px
          font-size 32px
          color #333
          padding-left 10px
          box-sizing border-box
        .desc
          box-sizing border-box
          padding-left 10px
          height 36px
          line-height 36px
        .picWrap
          img
            width 150px
            height 150px
  .footer
    width 100%
    height 244px
    background-color #414141
    margin-top 20px
    padding 54px 20px 28px 20px
    box-sizing border-box
    .btns
      margin-bottom 36px
      text-align center
      a
        display inline-block
        width 172px
        height 62px
        color #fff
        font-size 24px
        border 1px solid #999
        background-color: transparent
        text-align center
        line-height 62px
        margin-right 50px
    p
      font-size 24px
      color #999
      line-height 27px
      span
        display block
        text-align center
</style>
