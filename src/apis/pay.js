import request from '@/utils/request'

//根据购买的商品生成订单id
export const createOrderIdService = data => request.post('/member/order', data)

//获取订单相关的信息
export const getOrderInfoService = orderId =>
  request.get(`/member/order/${orderId}`)
