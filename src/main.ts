import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import directives from './utils/directives'
import { createPinia } from 'pinia'

const app = createApp(App)

const pinia = createPinia()
app.use(router).use(directives).use(pinia).mount('#app')
