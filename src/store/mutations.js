/* 

vuex 中可直接修改 state 中状态数据的地方
*/

import {
    GETHOMEDATA,
    SAVE_HOTSELLLIST
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
    [SAVE_HOTSELLLIST](state,data){
        state.hotSellList = data
    }
}