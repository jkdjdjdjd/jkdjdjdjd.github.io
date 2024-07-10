import request from '@/utils/request'
//获取全部分类
export const layoutGetCategoryService = () => request.get('/home/category/head')
