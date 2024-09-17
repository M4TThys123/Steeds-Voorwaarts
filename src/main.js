import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import router from '../src/router/router'
import PrismicVue from '@prismicio/vue'
import { createPrismicClient } from '@prismicio/client'; // Prismic Client for Vue 3

const endpoint = 'https://streeds-voorwaarts.cdn.prismic.io/api/v2'

const routes = [
    // {
    //   type: 'page',
    //   path: '/:uid',
    // },
    {
      type: 'page',
      uid: 'homepage',
      path: '/',
    },
];

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

// Vuetify
import 'vuetify/styles'

const prismicClient = createPrismicClient(endpoint, {
    routes,
});

const app = createApp(App)

app.use(PrismicVue, {
    client: prismicClient,
});

app.use(router)
app.use(vuetify)
app.mount('#app')