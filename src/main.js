import { createApp } from 'vue'
import 'virtual:uno.css'
import './style.css'
import App from './App.vue'
import router from '@/router/index'

import Echart from '@/components/Echart'

const app = createApp(App)

app.component('Echart', Echart)

app.use(router).mount('#app')
