import request from '../utils/request'
// 获取轮播图数据
//1为首页轮播图，2为分类页轮播图
//参数不同，分类页的轮播图的数据不同，这里分类页的数据都是相同的，以后可能2-服饰轮播，3-鞋包配饰轮播，4-美妆个护轮播等等
export const getHomeBannerService = (distributionSite) =>
  request.get('/home/banner', {
    params: {
      distributionSite: distributionSite || 1
    }
  })

// 获取新鲜好物
export const getHomeNewGoodsService = () => request.get('/home/new')

// 获取人气推荐
export const getHomeHotGoodsService = () => request.get('/home/hot')

// 获取产品列表
export const getHomeProductListService = () => request.get('/home/goods')
