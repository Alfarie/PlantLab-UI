import VueRouter from 'vue-router'

import {
  routes
} from './routes.js'

export const router = new VueRouter({
  mode: 'history',
  routes,
});
