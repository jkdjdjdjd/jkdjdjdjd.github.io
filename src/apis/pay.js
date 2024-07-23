import request from '@/utils/request'

//根据购买的商品生成订单id
export const createOrderIdService = data => request.post('/member/order', data)
