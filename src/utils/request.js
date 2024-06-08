import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores'
const router = useRouter()

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
    if (userStore.token) {
      config.headers.Authorization = `Bearer ${userStore.token}`
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
      if (res.code === '17001') {
        ElMessage.error(res.message)
        return Promise.reject(res)
      }
    }
    return res.result
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    ElMessage.error(error.response.data.message)
    if (error.response?.status === 401) {
      // 未登录
      router.push('/login')
    }
    return Promise.reject(error)
  }
)
export default instance
