<template>
  <div id="searchContainer">
      <div class="searchContent">
        <div class="searchTop">
          <div v-if="datas.defaultKeyword" class="inputContainer">
            <i class="icon iconfont icon-sousuo"></i>
            <input type="text" :placeholder="datas.defaultKeyword.keyword" @keydown.enter="toSearch" v-model="keywords"/>
          </div>
          <span @click="goToLast">取消</span>
        </div>
        <div class="searchBottom">
          <div class="header">
            <h3>热门搜索</h3>
          </div>
          <div class="list">
            <div v-for="(item, index) in datas.hotKeywordVOList" :key="index" class="listItem" :class="item.highlight?'highlight':''">
              <span>{{datas.hotKeywordVOList[index].keyword}}</span>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        datas:[],
        keywords:''
      }
    },
    methods: {
      getDatas(){
        let url = "/foo/xhr/search/init.json"
        axios.get(url).then((res)=>{
            console.log(res.data.data)
            this.datas = res.data.data
        })
      },
      goToLast(){
        this.$router.go(-1);
      },
        toSearch(){
          console.log(123)
        }
    },
    mounted() {
      this.getDatas()
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #searchContainer
    width 750px
    height 100%
    white-space nowrap
    position absolute
    left 0
    top 0
    background #eee
    z-index 10
    .searchContent
      width 750px
      background-color #fff
      height 100%
      .searchTop
        display flex
        width 750px
        height 88px
        line-height 88px
        border 1px solid #fff
        box-sizing border-box
        padding 0 30px
        .inputContainer
          display flex
          width 604px
          height 56px
          line-height 56px
          background #f4f4f4
          box-sizing border-box
          padding 0 20px
          margin auto 0
          .iconfont
            font-size 28px
            color rgba(0,0,0,0.8)
            box-sizing border-box
            margin 0 16px 0 0
          input 
            width 520px
            height 39px
            font-size 28px
            background #f4f4f4
            box-sizing border-box
            color rgba(0,0,0,0.8)
            padding 0 0 0 2px
            margin auto 0 
        span 
          width 56px
          height 42px
          color #333
          font-size 28px
          margin 0 0 0 30px
      .searchBottom
        width 750px
        height 436px
        .header
          width 690px
          height 90px
          line-height 90px
          margin 0 auto
          h3
            font-size 28px
            color #999
        .list
          display flex
          flex-wrap wrap
          width 100%
          box-sizing border-box
          padding 0 30px 30px
          .listItem
            display block
            font-size 24px
            color #333
            line-height 46px
            margin 0 32px 32px 0
            padding 0 15px
            border 1px solid #999
            border-radius 4px
          .highlight
            border-color #dd1a21
            color #dd1a21

</style>
