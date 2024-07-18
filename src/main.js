import { createApp } from 'vue'
import { directivePlugin } from '@/directives'
import { componentPlugin } from '@/components'

import pinia from '@/stores/index.js'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
// 引入初始化样式
import '@/styles/common.scss'
import '@/styles/loading/loading1.css'
import '@/styles/loading/loading2.css'

const app = createApp(App)

// 设置全局错误处理
app.config.errorHandler = err => {
  console.error(err)
}

// 捕获未处理的 Promise 拒绝
window.addEventListener('unhandledrejection', event => {
  console.error(event.reason)
  // 防止默认的错误处理
  event.preventDefault()
})

app.use(pinia)
app.use(router)
app.use(directivePlugin)
app.use(componentPlugin)

app.mount('#app')
