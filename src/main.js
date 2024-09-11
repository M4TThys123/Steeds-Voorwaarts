import { createApp } from 'vue'
import App from './App.vue'

import router from '../src/router/router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')

// const vuetify = createVuetify({
//     icons: {
//         defaultSet: 'mdi', // Optional: Specify icon set (Material Design Icons)
//         aliases,
//         sets: { mdi },
//     },
// })