<template>
    <div id="goodsListContents">
        <div class="wrapper" ref="wrapper">
            <ul class="content" > 
                <li v-for="(item, index) in cateLists" :key="index" class="item">{{item.name}}</li> 
            </ul>
        </div> 
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import cateLists from '../../../datas/cateLists'
    export default {
        data() {
            return {
                cateLists
            }
        },
        mounted() {
            this.$nextTick(() => { 
                this.scroll = new BScroll(this.$refs.wrapper, {}) 
            })
        },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#goodsListContents
    display inline-block
    width 162px
    height 1148px
    background-color #fff
    .wrapper
        height 1148px
        width 162px
        overflow hidden
        .content
            box-sizing border-box
            padding 20px 0 98px
            height 1150px
            .item
                width 162px
                height 50px
                margin-top 40px
                color #333
                line-height 50px
                font-size 28px
                text-align center
                position relative
            .active
                color #ab2b2b
                &:before
                    content ""
                    display block
                    width 6px
                    height 50px
                    position absolute
                    background-color #ab2b2b

</style>