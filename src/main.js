import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import directives from './utils/directives'

const app = createApp(App)
app.use(router).use(directives).use(store).mount('#app')
