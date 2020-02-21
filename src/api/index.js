
/* 

引入ajax 文件  index 就有了发送请求的功能
在该文件中写入发送请求的接口
*/
import ajax from './ajax'

/* 
发送请求 url为 /data
*/
export const getdata = () => ajax({
    url:'/navitem'
})
//获取类目热销榜
export const gethotSellList = () => ajax({
    url:'/getHotSell'
})
//分类列表请求
export const getClassNavList = () => ajax({
    url:'/getClassNav'
})
//分类列表详情
export const getClassList = () => ajax({
    url:'/getClassList'
})