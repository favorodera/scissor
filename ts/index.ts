import '../scss/index.scss'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import index from '../index.vue'
import router from '../router/router'

const app = createApp(index)

app.use(createPinia())
app.use(router)

app.mount('.root-container')
