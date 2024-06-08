import request from '@/utils/request'

export const userLoginService = ({ account, password }) =>
  request.post('/login', { account, password })
