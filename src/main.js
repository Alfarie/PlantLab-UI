import Vue from 'vue'
import VueRouter from 'vue-router'
import socketio from 'socket.io-client';
import VueSocketio from 'vue-socket.io';
import {store} from './store/store.js';
import {router} from './router/router';
import MultiLanguage from 'vue-multilanguage'
import language from './lang/language'
import "./filters/filters.js";


Vue.use(VueRouter);
Vue.use(MultiLanguage, language)
var hostname = window.location.hostname;
Vue.use(VueSocketio, socketio('http://'+ hostname +':3000'), store);

import App from './App.vue'
new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
