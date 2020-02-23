/* 

vuex 中可直接修改 state 中状态数据的地方
*/

import {
    GETHOMEDATA,
    SAVE_HOTSELLLIST,
    SAVE_NAVLIST,
    SAVE_NAVID,
    SAVE_CLASSLIST,
    SAVE_TOPICNAV,
    SAVE_TOPICLIST,
    SAVE_TOPICLISTS
} from './mutations-type.js'



export default {
    /* 
    state 参数中 有state里的所有东西给i
    第二个参数 中 有actions发送请求 传递过来的数据
    */
    [GETHOMEDATA](state,data){
        /*
        修改状态数据 HomeNeedDatas 的 值为 data
         */
        state.HomeNeedDatas = data
    },
    [SAVE_HOTSELLLIST](state,hotSellList){
        state.hotSellList = hotSellList
    },
    [SAVE_NAVLIST](state,classNavList){
        state.classNavList = classNavList
    },
    [SAVE_NAVID](state,navId){
        state.navId = navId
    },
    [SAVE_CLASSLIST](state,classList){
        state.classList = classList
    },
    [SAVE_TOPICNAV](state,topicNav){
        state.topicNav = topicNav
    },
    [SAVE_TOPICLIST](state,topicList){
        state.topicList = topicList
    },
    [SAVE_TOPICLISTS](state,topicLists){
        state.topicLists = topicLists
    }
}