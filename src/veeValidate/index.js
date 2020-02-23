import Vue from 'vue'
import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'


Vue.use(VeeValidate)
VeeValidate.Validator.localize('zh_CN', {
  messages: zh_CN.messages,
  attributes: {
    username: '邮箱',
    pwd: '密码'
  }
})

VeeValidate.Validator.extend('username', {
  validate: value => {
    return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)
  },
  getMessage: field => field + '请输入正确邮箱'
})


VeeValidate.Validator.extend('pwd', {
  validate: value => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/.test(value)
  },
  getMessage: field => field + '请输入正确密码'
})
