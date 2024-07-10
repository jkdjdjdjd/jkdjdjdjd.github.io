import request from '../utils/request'

// 获取二级分类列表数据
export const getCategoryDataService = (id) =>
  request.get('/category', {
    params: {
      //id为query参数类型
      id
    }
  })

//获取二级分类对应商品数据
export const getCategoryGoodsService = (id) =>
  request.get('/category/sub/filter', {
    params: {
      id
    }
  })

// 获取最终商品数据
/* 
data: {
  categoryId: 二级分类的id,
  page: 1,
  pageSize: 10
  sortField: 'publishTime' 商品排序方式,
}
*/
export const getFinalGoodsService = (data) =>
  request.post('/category/goods/temporary', data)
