/* 
处理异步操作的地方
一般用来发送请求获取数据 传递给 mutations
*/
/* 
api 中定义请求的方法
*/
import {
    getdata,
    gethotSellList,
    getClassNavList,
    getClassList
} from '../api/index.js'

import {
    GETHOMEDATA,
    SAVE_HOTSELLLIST,
    SAVE_NAVLIST
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
    },
    //发送分类列表请求
    async getClassNav({commit}){
        let result = await getClassNavList()
        commit(SAVE_NAVLIST,result)
    },
    //发送分类列表详情请求
    async getClassLists({commit}){
        let result = await getClassList()
        commit(SAVE_NAVLIST,result)
    }
}