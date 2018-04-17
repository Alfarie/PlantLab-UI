const state = {
    sensors: {}
}
const getters = {
    getSensors(state){
        return state.sensors;
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