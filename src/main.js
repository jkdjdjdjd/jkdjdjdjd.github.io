import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
// 设置全局错误处理
app.config.errorHandler = (err) => {
  console.error(err)
}

app.use(createPinia())
app.use(router)

app.mount('#app')
