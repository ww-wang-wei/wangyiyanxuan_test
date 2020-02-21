<template>
 <div>
 <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="down">
        <div class="sign">
          <img  src="https://yanxuan.nosdn.127.net/e21381b7e1e7caebbe72488db9542163.gif?imageView&quality=65&thumbnail=120x120"/>
          <h1 style="font-size:15px;">9.9超值</h1>
          <b style="color:gray">定价直降</b>
        </div>
        <div class="sign">
          <img src="https://yanxuan.nosdn.127.net/b324d0c8ec86ece047d5bd853b840657.png?imageView&quality=65&thumbnail=120x120"/>
          <h1 style="font-size:15px;">员工精选</h1>
          <b style="color:gray">每天一款内部价</b>
        </div>
        <div class="sign">
          <img src="https://yanxuan.nosdn.127.net/e92a567f96b94dcea29eafea9ab42440.png?imageView&quality=65&thumbnail=120x120"/>
          <h1 style="font-size:15px;">好物大赏</h1>
          <b style="color:gray">精选主题榜单</b>
        </div>
        <div class="sign">
          <img src="https://yanxuan.nosdn.127.net/84395807297dbc88f6569e16960695f1.png?imageView&quality=65&thumbnail=120x120"/>
          <h1 style="font-size:15px;">甄选家</h1>
          <b style="color:gray">爆品免费试用</b>
        </div>
        <div class="sign">
          <img src="https://yanxuan.nosdn.127.net/9d8114ce4ef435ceac5e82120efeec4c.png?imageView&quality=65&thumbnail=120x120"/>
          <h1 style="font-size:15px;">晒单</h1>
          <b style="color:gray">入选就有红包</b>
        </div>
        <div class="sign">
          <img src="https://yanxuan.nosdn.127.net/d98cef378330167ef79c5f956814836e.png?imageView&quality=65&thumbnail=120x120"/>
          <h1 style="font-size:15px;">选购指南</h1>
          <b style="color:gray">破解选择困难</b>
        </div>
        <div class="sign">
          <img src="https://yanxuan.nosdn.127.net/8eb0b83f475b468a4624342d24684452.gif?imageView&quality=65&thumbnail=120x120"/>
          <h1 style="font-size:15px;">新品快报</h1>
          <b style="color:gray">防疫物资上新</b>
        </div>
        <div class="sign">
          <img src="https://yanxuan.nosdn.127.net/8a7216b5820d09e04129ef6b59ad6eb9.png?imageView&quality=65&thumbnail=120x120"/>
          <h1 style="font-size:15px;">防疫手册</h1>
          <b style="color:gray">超硬和防疫指南</b>  
        </div>
        </div>
        </div>
      <div class="swiper-slide">
        <div class="down">
        <div class="sign">
          <img  src="https://yanxuan.nosdn.127.net/e21381b7e1e7caebbe72488db9542163.gif?imageView&quality=65&thumbnail=120x120"/>
          <h1 style="font-size:15px;">9.9超值</h1>
          <b style="color:gray">定价直降</b>
        </div>
        <div class="sign">
          <img src="https://yanxuan.nosdn.127.net/b324d0c8ec86ece047d5bd853b840657.png?imageView&quality=65&thumbnail=120x120"/>
          <h1 style="font-size:15px;">员工精选</h1>
          <b style="color:gray">每天一款内部价</b>
        </div>
        <div class="sign">
          <img src="https://yanxuan.nosdn.127.net/e92a567f96b94dcea29eafea9ab42440.png?imageView&quality=65&thumbnail=120x120"/>
          <h1 style="font-size:15px;">好物大赏</h1>
          <b style="color:gray">精选主题榜单</b>
        </div>
        <div class="sign">
          <img src="https://yanxuan.nosdn.127.net/84395807297dbc88f6569e16960695f1.png?imageView&quality=65&thumbnail=120x120"/>
          <h1 style="font-size:15px;">甄选家</h1>
          <b style="color:gray">爆品免费试用</b>
        </div>
        <div class="sign">
          <img src="https://yanxuan.nosdn.127.net/9d8114ce4ef435ceac5e82120efeec4c.png?imageView&quality=65&thumbnail=120x120"/>
          <h1 style="font-size:15px;">晒单</h1>
          <b style="color:gray">入选就有红包</b>
        </div>
        <div class="sign">
          <img src="https://yanxuan.nosdn.127.net/d98cef378330167ef79c5f956814836e.png?imageView&quality=65&thumbnail=120x120"/>
          <h1 style="font-size:15px;">选购指南</h1>
          <b style="color:gray">破解选择困难</b>
        </div>
        <div class="sign">
          <img src="https://yanxuan.nosdn.127.net/8eb0b83f475b468a4624342d24684452.gif?imageView&quality=65&thumbnail=120x120"/>
          <h1 style="font-size:15px;">新品快报</h1>
          <b style="color:gray">防疫物资上新</b>
        </div>
        <div class="sign">
          <img src="https://yanxuan.nosdn.127.net/8a7216b5820d09e04129ef6b59ad6eb9.png?imageView&quality=65&thumbnail=120x120"/>
          <h1 style="font-size:15px;">防疫手册</h1>
          <b style="color:gray">超硬和防疫指南</b>  
        </div>
        </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      </div>
      
    </div>
 </template>
 
 <script type="text/ecmascript-6">
   import Swiper from 'swiper'
   import 'swiper/css/swiper.min.css'
   export default {
    data(){
      return{
      
      }
    },
    mounted(){
      new Swiper('.swiper-container', {
          autoplay: true,//可选选项，自动滑动
          loop:true,
          observer:true,
          observeParents:true,
          pagination: {
              el: '.swiper-pagination',
          },
      })
    }
  }
 </script>
 
 <style lang="stylus">
.swiper-container
  width 100%
  height 100%
  .swiper-wrapper
    display flex
    width 100%
    height 100%
    .swiper-slide
      height 100%
      .down
        width 94%
        height 540px
        margin-left 20px
        background white
        padding 10px
        box-sizing border-box
        .sign
          width 168px
          height 201px
          margin-top 20px
          text-align center
          margin-left 2px
          float left
          img
            width 120px
            height 120px
            align-content center
          h1
            margin 10px auto
  .swiper-pagination
    span.swiper-pagination-bullet 
      width 80px
      height 4px
      z-index -1
    span.swiper-pagination-bullet-active
      background orange
  
 </style>
 
