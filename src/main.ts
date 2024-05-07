import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import '@/assets/iconfont/iconfont.js'
import SvgIcon from '@/components/SvgIcon.vue'
import { require } from '@/common/utils'
import 'wow.js/css/libs/animate.css'

createApp(App)
.use(router)
.use(ElementPlus)
.use(require)
.component('SvgIcon', SvgIcon)
.mount('#app')
