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
    },
    ecStatus: {

    },
    co2Status: {
        
    },
    phStatus: {

    }
}

const getters = {
    mcuStatus(state){
        return {
            gpio: state.gpio,
            memory: state.memory,
            paracc: state.paracc,
            waterProcess: state.waterProcess,
            ecStatus: state.ecStatus,
            co2Status: state.co2Status,
            phStatus: state.phStatus
        }
    },
    ecStatus(state){
        return state.ecStatus;
    },
    phStatus(state){
        return state.phStatus;
    },
    co2Status(state){
        return state.co2Status;
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
    },
    SOCKET_EC_STATUS: (state,data)=>{
        state.ecStatus = data[0]
    },
    SOCKET_PH_STATUS: (state,data)=>{
        state.phStatus = data[0]
    },
    SOCKET_CO2_STATUS: (state,data)=>{
        state.co2Status = data[0]
    }
}

const actions = {
    updateDateTime(context, payload){
        axios.post('setting/datetime', payload)
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}