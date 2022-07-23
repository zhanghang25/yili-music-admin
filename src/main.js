import { createApp } from 'vue'
import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

import router from './router/index.js'

import store from './store'

import './permission.js'

import App from './App.vue'

const myApp = createApp(App)

myApp.use(router)
myApp.use(store)

myApp.use(Quasar, {
  plugins: {} // import Quasar plugins and add here
})

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')
