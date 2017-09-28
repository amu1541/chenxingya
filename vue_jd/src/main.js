// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/css/style.css'
import '../static/js/iscroll.js'

require('swiper/dist/css/swiper.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

 import Mint from 'mint-ui'; 
 Vue.use(Mint);
 import 'mint-ui/lib/style.css'
import { Loadmore } from 'mint-ui';

Vue.component(Loadmore.name, Loadmore);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
