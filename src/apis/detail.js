import request from '@/utils/request'
//获取商品详情
export const getDetailService = (id) =>
  request.get('/goods/', {
    params: {
      id
    }
  })
