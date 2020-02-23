<template>
  <div id="cartContainer">
    <div class="nav">
      <div class="left">
        <span class="text">购物车</span>
      </div>
      <div class="right">
        <span class="text">领券</span>
      </div>
    </div>
    <div class="service">
      <ul class="ser-Wrap">
        <li class="content">
            <i class="icon" style="background:url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-de15fb68d3.png?imageView&type=webp)"></i>
            <span class="text">30天无忧退货</span>
        </li>
        <li class="content">
            <i class="icon" style="background:url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-de15fb68d3.png?imageView&type=webp)"></i>
            <span class="text">48小时快速退款</span>
        </li>
        <li class="content">
            <i class="icon" style="background:url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-de15fb68d3.png?imageView&type=webp)"></i>
            <span class="text">满88元免邮费</span>
        </li>
      </ul>
    </div>
    <div class="show">
      <div class="shopCart">
        <div class="img" style="background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imageView&type=webp)"></div>
        <div class="text">
          <div class="title">去添加点什么吧</div>
          <div class="btn">登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#cartContainer
  width 100%
  height 100%
  .nav
    width 690px
    height 88px
    padding 0 30px
    text-align center
    background-color #fff
    position relative
    &:after
      content ''
      position absolute
      background-color #d9d9d9
      left 0
      width 100%
      height 1px
      transform-origin 50% 100% 0
      bottom 0
    .left
      line-height 88px
      float left
      font-size 36px
    .right
      float right
      line-height 88px
      font-size 32px
      color #DD1A21
      margin-right 30px
  .service
    width 100%
    height 70px
    background #eeeeee
    .ser-Wrap 
      width 690px
      height 70px
      padding 0 30px
      display flex
      align-items center
      justify-content  space-between
      z-index 1
      .content
        font-size 24px
        color #666
        line-height 36px
        position relative
        .icon
          display  block
          width 10px
          height 10px
          margin-right 6px
          position absolute
          top 12px
          left -10px
  .show
    width 100%
    height 1246px
    top 87px
    left 0
    bottom 0
    z-index -1
    background-color #f4f4f4
    text-align center
    position fixed
    .shopCart
      width 100%
      height 300px
      // background pink 
      position absolute
      top -45px
      left 0
      right 0
      bottom 0
      margin auto
      .img
        display inline-block
        vertical-align middle
        width 248px
        height 248px
        margin-bottom -9px
      .text
        width 100%
        height 170px
        .title
          margin-bottom 42px
          line-height 1
          font-size  27px
          color #999
        .btn
          width 480px
          height 92px
          background-color #DD1A21
          margin 0 auto 
          line-height 92px
          font-size 32px
          color #ffffff
          border-radius 2px
 
</style>
