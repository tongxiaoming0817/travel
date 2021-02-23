// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import less from 'less'
import axios from 'axios'
import store from './store/index.js'
// css
import './assets/css/reset.css'
import './assets/font/iconfont.css'
import FastClick from 'fastclick'
//
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.prototype.$axios = axios
Vue.use(VueAwesomeSwiper)
//
Vue.use(less)
Vue.config.productionTip = false
FastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
