import Vue from 'vue';
var dateFormat = require('dateformat');
const state = {
    activity: {
        type: 'Lettuce',
        dth: 0,
        ptd: new Date().toDateString()
    }
}

const getters = {
    activity: state => {
        return state.activity;
    },
    activityFormat: state => {
        var act = state.activity;
       
        return {
            type: act.type,
            dth: act.dth,
            ptd: act.ptd
        }
    }
}

const mutations = {
    updateActivity: (state, payload)=>{
        state.activity = payload;
    }
}

const actions = {
    updateActivity: ({commit}, payload) => {
        // commit('updateActivity')
        Vue.http.get('api/activities')
            .then(
                res => {
                    commit('updateActivity',res.body)
                }
            )
    }
}

export default { 
    state,
    getters,
    mutations,
    actions
}