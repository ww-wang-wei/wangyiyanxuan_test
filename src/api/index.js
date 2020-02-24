
/* 

引入ajax 文件  index 就有了发送请求的功能
在该文件中写入发送请求的接口
*/
import ajax from './ajax'

/* 
发送请求 url为 /data
*/
export const getdata = () => ajax({
    url:'/api/navitem'
})
//获取类目热销榜
export const gethotSellList = () => ajax({
    url:'/api/getHotSell'
})
//分类列表请求
export const getClassNavList = () => ajax({
    url:'/api/getClassNav'
})
//分类列表详情

export const getClassList = () => ajax({
    url:'/api/getClassList'
})
//值得买导航接口
export const getTopicNav = () => ajax({
    method:'GET',
    url:'/foo/topic/v1/know/navWap.json'
})
//值得买瀑布流接口
export const getManual = () => ajax({
    method:'GET',
    url:' /foo/topic/v1/find/recManual.json'
})
//值得买瀑布流更多接口
export const getMoreManual = () => ajax({
    method:'GET',
    url:' /foo/topic/v1/find/recAuto.json'
})
//搜索接口
export const getSearch = () => ajax({
    method:'POST',
    url:' /foo/xhr/search/searchAutoComplete.json/:keywordPrefix'
})