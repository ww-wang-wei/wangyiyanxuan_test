<template>
    <div id="headerGuideLogin">
        <div class="wrap">
            <div class="left">
                <i class="icon iconfont icon-zhuye" @click="goToIndex"></i>
            </div>
            <span class="center"></span>
            <div class="right">
                <i class="icon iconfont icon-sousuo" @click="goToSearch"></i>
                <i class="icon iconfont icon-gouwuche" @click="goToCart"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            goToSearch(){
                // console.log(this);
                this.$router.push('/search')
            },
            goToIndex(){
                // console.log(this);
                this.$router.push('/home')
            },
            goToCart(){
                // console.log(this);
                this.$router.push('/buycar')
            }
        },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#headerGuideLogin
    width 100%
    height 100px
    position relative
    position fixed
    left 0
    top 0
    z-index 10
    box-sizing border-box
    .wrap
        width 100%
        height 100px
        box-sizing border-box
        padding 0px 26px 0 24px
        background-color #fff
        display flex
        .left
            width 46px
            height 100px
            line-height 100px
            i 
                font-size 50px
        .center
            width 172px
            height 54px
            transform translateX(-50%)
            display block
            font-size 36px
            text-align center
            line-height 100px
            position absolute
            top 23px
            left 50%
            background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s88c52a8caf-e895499c8e.png?imageView&type=webp)
            background-position-y -128px
        .right
            width 141px
            height 100px
            line-height 100px
            display flex
            position absolute
            right 0
            i 
                font-size 50px
            .icon-cart
                margin-left 14px
                
            

</style>