import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import primsic from './plugins/prismic'
import router from '../src/router/router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'vuetify/styles'

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(primsic)

// ✅ Dynamische title per route
router.afterEach((to) => {
  const defaultTitle = 'Steedsvoorwaarts';
  document.title = to.meta?.title || defaultTitle;
})

app.mount('#app')
