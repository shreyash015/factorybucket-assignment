import { createApp } from 'vue'
import './style.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import './index.css'

createApp(App).use(VueAxios, axios).mount('#app')
