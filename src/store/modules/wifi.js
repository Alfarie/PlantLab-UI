import axios from '../../axios/axios'
import moment from 'moment'

const state = {
    wifiStatus: []
}

const getters = {
   wifiStatus: (state)=>{
       return state.wifiStatus;
   }
}

const mutations = {
   setWifiStatus: (state,payload)=>{
       state.wifiStatus = payload;
   }
}

const actions = {
    GetWifiStatus: ({commit})=>{
        axios.get('/setting/wifi/scan')
            .then(res=>{
                commit('setWifiStatus', res.data);
            })
            .catch(err=>{
                console.log(err);
            })
    }
}

export default { 
    state,
    getters,
    mutations,
    actions
}