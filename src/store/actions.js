/* 
处理异步操作的地方
一般用来发送请求获取数据 传递给 mutations
*/
/* 
api 中定义请求的方法
*/
import {
    getdata,
    gethotSellList
} from '../api/index.js'

import {
    GETHOMEDATA,
    SAVE_HOTSELLLIST
} from './mutations-type.js'


export default {

   async gethome ({commit}){
        let result  =   await getdata()
        
            //发送请求 如果有数据 就 commit muactions 中的方法 并且把renult传递过去
            //再muactions中可以接受这个参数拿到数据
            commit(GETHOMEDATA,result) 
    },
    //发送类目热销榜请求
   async getHotSell ({commit}){
        let result  =   await gethotSellList()
            commit(SAVE_HOTSELLLIST,result) 
    }
}