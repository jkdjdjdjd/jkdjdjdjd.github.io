import request from '@/utils/request'
//账号密码登录
export const userLoginService = ({ account, password }) =>
  request.post('/login', { account, password })
