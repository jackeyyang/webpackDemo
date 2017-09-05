// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/lib/css'
// import '@/lib/bootstrap/bootstrap.min'
import 'bootstrap'
import '@/lib/nano-scroller/nano-scroller'
import '@/lib/template-script.min'
import '@/lib/template-init.min'

import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
