import request from '@/utils/request'


// 登录接口
export const login=({username, password}) => {
  return request.post('/login',{ username, password })  
}