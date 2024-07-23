import request from '@/utils/request'

// 获取订单-结算页的数据
export const getCheckoutService = () => request.get('/member/order/pre')

//修改地址数据
export const updateAddressService = data =>
  request.put(`/member/address/${data.id}`, data)

// 添加地址数据
export const addAddressService = data => request.post('/member/address', data)
