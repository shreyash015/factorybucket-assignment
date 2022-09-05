import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'

import './style.css'
import './index.css'

createApp(App).use(VueAxios, axios).use(router).mount('#app')
