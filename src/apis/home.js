import request from '../utils/request'
export const getHomeBannerService = () => request.get('/home/banner')

// 获取新鲜好物
export const getHomeNewGoodsService = () => request.get('/home/new')

// 获取人气推荐
export const getHomeHotGoodsService = () => request.get('/home/hot')

// 获取产品列表
export const getHomeProductListService = () => request.get('/home/goods')
