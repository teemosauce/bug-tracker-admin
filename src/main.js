import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import Particles from "particles.vue3";
import pinia from './store/index'
import router from './router'

let app = createApp(App)
app.use(Particles)
app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.mount('#app')