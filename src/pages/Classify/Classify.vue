<template>
  <div id="classifyContainer">
    <div class="header">
      <div class="search">
        <i class="iconfont icon-sousuo"></i>
        <span class="placeholder"><router-link to="/Search">搜索商品, 共20259款好物</router-link></span>
      </div>
    </div>
    <ClassifyNav />
    <ClassifyList />
  </div>
</template>

<script>

import {mapState} from 'vuex'    //想要抽取数据  必须从vuex中 解构出来  mapState
import ClassifyNav from '../../components/Classifys/ClassifyNav'
import ClassifyList from '../../components/Classifys/classifyList'
export default {
  components:{ClassifyNav,ClassifyList},
  data(){
    return{
      
    }
  },
  mounted(){
    this.$store.dispatch('gethome')
    
  },
  computed:{
    ...mapState({
      /* 
      从状态中抽取数据 HomeNeedDatas
      刚才拿错数据了 数据是他 shuju 自己定义的名字 数据已经注入到自定义名字中了
      只要存到了vuex 中 就再这里抽取 

      shuju : state => state.HomeNeedDatas
      shuju : 自定义名字 最终数据再这里
      state => state.xxxx   xxx == state.js 自己村的数据名字 
      拿出来的数据可以直接用再页面  也可以存到data 中  一般是直接用
      后期返回数据就在 server.js 中返回自己需要的data
      */
      shuju : state => state.HomeNeedDatas,
      })
  },

  /* 
  watch 监视数据有没有
  */
  watch:{
    shuju(){
      console.log(this.shuju)
    }
  }
}
</script>

<style lang="stylus">
#classifyContainer
  overflow hidden
  .header
    background #fff
    width 100%
    height 86px
    padding 0 30px 
    display flex
    align-items center
    border 2px solid #ededed
    .search 
      width 690px
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


</style>