import request from '@/utils/request'

//添加购物车
export const addCartService = ({ skuId, count }) =>
  request.post('/member/cart', { skuId, count })

//获取购物车列表
export const getCartListService = () => request.get('/member/cart')

// 删除商品
export const deleteCartService = ids =>
  request.delete('/member/cart', {
    data: {
      ids
    }
  })

// 合并购物车
/*
在调用接口时处理成如下格式的数据再传进来
[
  {
    "skuId": "3672100",
    "selected": "true",
    "count": 10
  },
  {
    "skuId": "300038064",
    "selected": "true",
    "count": 101
  }
]
*/

export const mergeCartService = data => request.post('/member/cart/merge', data)
