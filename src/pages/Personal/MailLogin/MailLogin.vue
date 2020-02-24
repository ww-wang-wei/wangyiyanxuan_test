<template>
  <div id="login">
    <HeaderGuideLogin/>
    <div class="loginWrap">
      <div class="logo">
        <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="" class="img">
      </div>
      <div class="userForm">
        <el-input placeholder="邮箱账号" v-validate="'required'" v-model="username" name="username" clearable size="large"></el-input>
        <el-input placeholder="请输入密码" v-validate="'required'" v-model="pwd" name="pwd" show-password size="large"></el-input>
        <el-button size="large" @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderGuideLogin from '../../../components/Login/HeaderGuideLogin'
  export default {
    data(){
      return {
        username: '',
        pwd: ''
      }
    },
    components:{
      HeaderGuideLogin
    },
    methods: {
      async login(){
        // 1. 前端验证
        let {username, pwd} = this
        let names = ['username', 'pwd']
        const success = await this.$validator.validateAll(names) // 对所有表单项进行验证
        console.log(this.$validator.validateAll(names));
        if(success){ // 前端验证成功
          // 2. 后端验证逻辑.....................          
            alert('登录成功')
            this.$router.replace('/home')
        
        }else {// 前端验证失败
          alert('前端验证失败')
        }

      }
    },
    computed: {
      rightPhoneNumber(){
        return /^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phone)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#login
  width 100%
  overflow hidden
  .loginWrap
    width 100%
    height 100%
    box-sizing border-box
    .logo
      width 100%
      height 90px
      margin-top 156px
      text-align center
      .img
        width 268px
        height 90px
    .userForm
      width 100%
      height 578px
      margin-top 40px
      background-color #fff
      padding 116px 40px 0
      box-sizing border-box
      .el-input--large
        height 91px
        border-bottom 1px solid #000
        .el-input__inner
          height 91px
          line-height 91px
          font-size 28px
          border none 
        .el-input__suffix
          font-size 28px
          .el-input__suffix-inner
            font-size 28px
            i 
              font-size 28px
              line-height 91px
    .el-button--large
      margin-top 100px
      border-color #dd1a21 
      background-color #dd1a21
      width 100%
      height 91px
      span 
        color #ffffff
        font-size 28px





</style>
