import axios from 'axios'
import { ElNotification } from 'element-plus'
// js文件中不能使用useRouter
import router from '@/router'
// import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores'

// 创建axios实例
const instance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    const userStore = useUserStore()
    // 在发送请求之前做些什么
    if (userStore.user.token) {
      config.headers.Authorization = `Bearer ${userStore.user.token}`
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    const res = response.data
    if (response.status >= 200 && response.status < 300) {
      if (res.code !== '1') {
        ElNotification({
          type: 'error',
          message: res.message || 'Error',
          duration: 2000
        })
        return Promise.reject(res)
      }
    }
    return res.result
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么

    ElNotification({
      type: 'error',
      message: error.response?.data.message || 'Error',
      duration: 2000
    })
    if (error.response?.status === 401) {
      // 未登录,token失效
      // 清数据，跳路由
      const userStore = useUserStore()
      userStore.clearUser()
      router.push('/login')
    }
    return Promise.reject(error)
  }
)
export default instance
