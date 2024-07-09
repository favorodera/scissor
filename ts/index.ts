import '../scss/index.scss'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import index from 'root/index.vue'
import router from 'root/router/router'

const app = createApp(index)

app.use(createPinia())
app.use(router)

app.mount('.root-container')
