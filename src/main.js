import Vue from 'vue'
import VueRouter from 'vue-router'
import socketio from 'socket.io-client';
import VueSocketio from 'vue-socket.io';
import {store} from './store/store.js';
Vue.use(VueRouter);

var hostname = window.location.hostname;
Vue.use(VueSocketio, socketio('http://'+ hostname +':3000'), store);

import App from './App.vue'
new Vue({
  el: '#app',
  render: h => h(App),
  store
})
