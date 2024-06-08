import { createApp } from 'vue'
import pinia from '@/stores/index.js'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
// 引入初始化样式
import '@/styles/common.scss'

const app = createApp(App)
// 设置全局错误处理
app.config.errorHandler = (err) => {
  console.error(err)
}
app.use(pinia)
app.use(router)

app.mount('#app')
