<template>
    <div id="mine">
        <HeaderGuideLogin/>
        <div class="loginWrap">
            <div class="cont">
                <div class="logoWrap">
                    <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
                </div>
                <div class="btnWrap">
                    <div class="btnTop">
                        <i class="icon iconfont icon-phone"></i>
                        <span>手机号快捷登录</span>
                    </div>
                    <div class="btnBottom" @click="goToLogin">
                        <i class="icon iconfont icon-youxiang"></i>
                        <span>邮箱账号登录</span>
                    </div>
                </div>
            </div>
            <div class="thirdWrap">
                <div class="itemWrap">
                    <div class="item">
                        <i class="icon iconfont icon-weixin"></i>
                        <span>微信</span>
                    </div>
                    <div class="item">
                        <i class="icon iconfont icon-qq"></i>
                        <span>QQ</span>
                    </div>
                    <div class="item">
                        <i class="icon iconfont icon-weibo"></i>
                        <span>微博</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderGuideLogin from '../../components/Login/HeaderGuideLogin'
    export default {
        components:{
            HeaderGuideLogin
        },
        methods: {
            goToLogin(){
                this.$router.replace('/login')
            }
        },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#mine
    width 100%
    height 1334px
    background-color #eee
    // z-index 10
    box-sizing border-box
    padding-top 100px
    position relative
    .loginWrap
        width 100%
        .cont
            width 100%
            height 702px
            .logoWrap
                width 100%
                height 482px
                box-sizing border-box
                padding 160px 0 232px 0
                text-align center
                img 
                    width 268px
                    height 90px
            .btnWrap
                width 100%
                height 220px
                box-sizing border-box
                padding 0 40px
                .btnTop
                    width 670px
                    height 94px
                    margin-bottom 16px
                    border-radius 4px
                    background-color #dd1a21
                    color #ffffff
                    font-size 28px  
                    line-height 94px
                    display flex
                    justify-content center
                    i 
                        width 40px
                        height 40px
                        font-size 30px
                        margin-right 16px
                .btnBottom
                    width 670px
                    height 94px
                    margin-bottom 16px
                    border-radius 4px
                    background-color #fff
                    color #dd1a21
                    border 1px solid #dd1a21
                    font-size 28px  
                    line-height 94px
                    display flex
                    justify-content center
                    i 
                        width 40px
                        height 40px
                        font-size 36px
                        margin-right 16px
        .thirdWrap
            width 100%
            height 40px
            display flex
            justify-content center
            color #7f7f7f
            box-sizing border-box
            position absolute
            bottom 300px
            font-size 28px
            line-height 36px
            .item
                color #7f7f7f
                display inline-block
                height 40px
                padding 0 40px
                font-size 28px
                border-right 1px solid #7f7f7f
                &:last-child
                    border-right none
                i 
                    font-size 28px
                    margin-right 5px


</style>