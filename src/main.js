import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'

import './plugins/axios'
import App from './App.vue'
import router from './router'
import { WOW } from 'wowjs/dist/wow.js'
// import vWow from 'v-wow'
// const WOW = require('wowjs/dist/wow.js')
var wow = new WOW()
wow.init()

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// import vWow from 'v-wow'
// Vue.use(vWow)
