import { createApp } from 'vue'
import App from './components/App.vue'
import store from '../store'
import ElementPlus from 'element-plus'

createApp(App).use(store).use(ElementPlus).mount('#app')
