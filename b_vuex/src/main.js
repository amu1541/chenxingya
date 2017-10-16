
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store.js'
import Axios from "axios"
import VueAxios from "vue-axios"
Vue.use(VueAxios,Axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
