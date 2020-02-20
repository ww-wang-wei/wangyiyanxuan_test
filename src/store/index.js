

import Vuex from 'vuex'
import Vue from 'vue'


import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)


const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})

/*
将核心对象  store 暴露出去 
store拥有
    state,
    mutations,
    getters,
    actions
所有的东西
*/
export  default store
