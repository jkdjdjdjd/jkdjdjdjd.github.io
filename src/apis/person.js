import request from '@/utils/request'

// 个人订单
export const getPersonOrderService = params =>
  request.get('/member/order', { params })

// 猜你喜欢接口
// limit: 4,设置默认值为4
export const getLikeListService = (limit = 4) =>
  request.get('/goods/relevant', {
    params: {
      limit
    }
  })
