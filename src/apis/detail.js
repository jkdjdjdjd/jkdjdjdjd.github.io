import request from '@/utils/request'
//获取商品详情，其中包含面包屑导航用的路由信息
export const getDetailService = (id) =>
  request.get('/goods/', {
    params: {
      id
    }
  })
//获取热榜信息
export const getHotListService = ({ id, type, limit }) =>
  request.get('/goods/hot', {
    params: {
      id,
      type,
      limit
    }
  })
