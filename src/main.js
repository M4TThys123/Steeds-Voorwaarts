import { createApp } from 'vue'
import App from './App.vue'

import router from '../src/router/router'
import 'bootstrap/dist/css/bootstrap.css' // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.js'   // Bootstrap JS

// Import Vuetify
import { createVuetify } from 'vuetify'
import 'vuetify/styles' // Import Vuetify styles
import { aliases, mdi } from 'vuetify/iconsets/mdi' // Optional: For Material Design Icons

// Create Vuetify instance
const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi', // Optional: Specify icon set (Material Design Icons)
        aliases,
        sets: { mdi },
    },
})

const app = createApp(App)

app.use(router)
app.use(vuetify) // Add Vuetify plugin

app.mount('#app')
