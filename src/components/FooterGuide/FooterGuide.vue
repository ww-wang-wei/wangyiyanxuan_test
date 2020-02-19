<template>
  <div id="footerGuideContainer">
    <div class="guideItem" :class="{active: $route.path === '/home'}" @click="goPath('/home')">
      <span>
        <i class="icon iconfont icon-zhuye"></i>
      </span>
      <span>首页</span>
    </div>
    
    <div class="guideItem" :class="{active: $route.path === '/classify'}" @click="goPath('/classify')">
      <span>
        <i class="icon iconfont icon-shugui"></i>
      </span>
      <span>分类</span>
    </div>
      <div class="guideItem" :class="{active: $route.path === '/topic'}" @click="goPath('/topic')">
      <span>
        <i class="icon iconfont icon-xiangkuang1"></i>
      </span>
      <span>值得买</span>

    </div>
    <div class="guideItem" :class="{active: $route.path === '/buycar'}" @click="goPath('/buycar')">
       <span>
        <i class="icon iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </div>
    <div class="guideItem" :class="{active: $route.path === '/personal'}" @click="goPath('/personal')">
      <span>
        <i class="icon iconfont icon-tubiaozhizuomoban"></i>
      </span>
      <span>个人</span>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      goPath(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #footerGuideContainer
    position fixed
    width 100%
    height 98px
    border-top 1px solid #eee
    left 0
    bottom 0
    box-sizing border-box
    display flex
    background #fff
    .guideItem
      width 25%
      height 100%
      text-align center
      display flex
      flex-direction column
      justify-content center
      &.active
        color red
      span:first-child
        margin 5px 0
      i
        font-size 40px
      



</style>
