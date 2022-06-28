import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { useStore } from '@/stores'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const pinia = createPinia()
const app = createApp(App)

// import ElementPlus from 'element-plus'
// import zhCn from 'element-plus/es/locale/lang/zh-cn'

// app.use(ElementPlus, {
//   locale: zhCn,
// })

app.config.errorHandler = (err, vm, info) => {
  console.log('[全局异常]', err, vm, info)
}

app.use(ElementPlus)
app.use(pinia)
app.mount('#app')
