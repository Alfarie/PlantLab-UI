import Vue from 'vue'
import Vuex from 'vuex'

import connection from './modules/connection'
import sensors from './modules/sensors'
import socket from './modules/socket'
import mcu from './modules/mcu-status'
import control from './modules/control'

import activity from './modules/activity'
import uiStatus from './modules/ui-status'

import wifi from './modules/wifi'
Vue.use(Vuex);
export const store = new Vuex.Store({
    modules: {
        sensors,
        socket,
        mcu,
        control,
        activity,
        uiStatus,
        wifi,
        connection
    }
    
});
