import axios from 'axios'
import { BASE_URL } from './request'

let instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000
})

instance.interceptors.request.use(function(config){
  // 自定义请求拦截
  // 1、特殊请求头的设置，如content-type
  // 2、token
  return config
})


instance.interceptors.response.use(function(response){
  // 自定义请求结果的处理
  // 1、checkStatus
  // 2、数据格式化之类的
  return response
}, function(error){
  return Promise.reject(error)
})


export default {
  get(url,param){
      return new Promise((resolve,reject) => {
        instance({
              method:'get',
              url,
              params: param
          }).then(res => {  
              resolve(res) 
          }).catch(err => {
              console.log(err,'异常')
              reject(err)
          })

      })
  },
  post(url,param){
      return new Promise((resolve,reject) => {
        instance({
              method:'post',
              url,
              data: JSON.stringify(param)
          }).then(res=>{
              resolve(res)
          }).catch(err => {
              console.log(err,'异常')
              reject(err)
          })
      })
  }
}