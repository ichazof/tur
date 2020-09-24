import '@fortawesome/fontawesome-free/css/all.min.css'
// import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/mdbvue.css'
import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'

import './plugins/axios'
import App from './App.vue'
import router from './router'
import * as mdbvue from 'mdbvue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: 'giphy.gif',
  attempt: 1
})
Vue.config.productionTip = false
for (const component in mdbvue) {
  Vue.component(component, mdbvue[component])
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// Vue.component(mdbCardTitle)
// Vue.component(mdbCardBody)
// Vue.component(mdbCard)
// Vue.component(mdbCardImage)
// Vue.component(mdbBtn)
// Vue.component(mdbCardText)
// Vue.component('mdbCard', () => import(('mdbvue')))
// Vue.component('mdbCardHeader', () => import(('mdbvue')))
// Vue.component('mdbCardBody', () => import(('mdbvue')))
// // Vue.component('mdb-card', require('mdbvue/src/components/Card').default)
// // Vue.component('mdb-card-header', require('mdbvue/src/components/CardHeader').default)
// // Vue.component('mdb-card-body', require('mdbvue/src/components/CardBody').default)
// // import vWow from 'v-wow'
// Vue.use(vWow)
