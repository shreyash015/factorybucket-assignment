import { createApp } from 'vue'
import { createPinia } from 'pinia'

import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import App from './App.vue'


const pinia = createPinia()

import './style.css'
import './index.css'

createApp(App).use(pinia).use(VueAxios, axios).use(router).mount('#app')
