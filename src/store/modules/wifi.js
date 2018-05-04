import axios from '../../axios/axios'
import moment from 'moment'

const state = {
    AvailableWifi: []
}

const getters = {
   AvailableWifi: (state)=>{
       return state.AvailableWifi;
   }
}

const mutations = {
   setAvailableWifi: (state,payload)=>{
       state.AvailableWifi = payload;
   }
}

const actions = {
    GetAvailableWifi: ({commit})=>{
        axios.get('/setting/wifi/scan')
            .then(res=>{
                // console.log(res.data);
                commit('setAvailableWifi', res.data);
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