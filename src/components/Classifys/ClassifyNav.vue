<template>
  <div class="classNavWrap">
      <div class="navScroll">
        <ul class="classNav">
          <li class="navItem" :class="activeId == index?'active':''" v-for="(item,index) in classNavLists" :key="index" 
            @click="changeId(index)"
          >
            {{item.name}}
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import BScroll from "better-scroll"
import {mapState} from 'vuex'
import { SAVE_NAVID } from '../../store/mutations-type'
export default {
  data(){
    return{
      navIndex: 1,
      activeId:0,
    }
  }  ,
  mounted(){
    this.$store.dispatch('getClassNav')
    this.$nextTick(() => { 
     new BScroll(".navScroll", {
       click:true
       })
    })
  },
  computed:{
    ...mapState({
        classNavLists: state => state.classNavList,
    })
  },
  methods:{
    changeId(index){
        this.navIndex = this.$store.state.classNavList[index].id
        this.activeId = index
        this.$store.commit(SAVE_NAVID,this.navIndex)
    }
  },
  
}
</script>

<style lang="stylus">
.classNavWrap
    float left 
    left 0
    top 0
    background #fff
    height 1148px
    width 160px
    padding 40px 0
    overflow hidden
    border-right 2px solid #ededed
    .navScroll
      height 1148px
      width 162px
      position relative
      .classNav
        position absolute
        left 0
        top 0
        display flex
        flex-direction column
        height 1150px
        .navItem
          width 162px
          height 50px
          line-height 50px
          text-align center
          margin-top 40px
          font-size 28px
          color #333
          &.active
            color #ab2b2b
            &::before
              content ""
              display block
              width 6px
              height 50px
              position absolute
              background-color #ab2b2b
          &:first-child 
            margin-top 0
            
            
</style>