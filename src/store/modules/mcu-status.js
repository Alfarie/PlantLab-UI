import axios from '../../axios/axios';

const state = {
    gpio: [],
    memory: 0,
    paracc: [],
    waterProcess: {
        type: 'waterprocess-fill'
    },
    waterControl: {
        type: 'waterprocess-fill',
        data: {
            crt: 0,
            max: 3600
        }
    }
}

const getters = {
    mcuStatus(state){
        return {
            gpio: state.gpio,
            memory: state.memory,
            paracc: state.paracc,
            waterProcess: state.waterProcess
        }
    }
}

const mutations ={
    SOCKET_GPIO:(state, data)=>{
        state.gpio = data[0];
    },
    SOCKET_MEMORY:(state, data)=>{
        state.memory = data[0];
    },
    SOCKET_PARACC:(state, data)=>{
        state.paracc = data[0];
    },
    SOCKET_WATER_PROCESS:(state, data)=>{
        state.waterProcess = data[0];
    }
}

const actions = {
   
}

export default{
    state,
    getters,
    mutations,
    actions
}