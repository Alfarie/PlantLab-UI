import moment from 'moment'
const state = {
    sensors: {
        date: moment().format('YYYY-MM-DD'),
        time: moment().format('HH:mm:ss')
    }
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