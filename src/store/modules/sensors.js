const state = {
    sensors: {}
}
const getters = {
    getSensors(state){
        return state.sensors;
    },
    getDate: state=>{
        return state.sensors.date
    },
    getTime: state=>{
        return state.sensors.time
    }
}
const mutations = {
    SOCKET_SENSORS:(state, data)=>{
        state.sensors = data[0];
    }
}

export default{
    state,
    getters,
    mutations
}