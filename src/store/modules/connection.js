import moment from 'moment'
const state = {
    inetConnection: false
}
const getters = {
    inetConnection(state){
        return state.inetConnection;
    },
    isInetConnection: (state)=>{
        return (state.inetConnection)? 'ONLINE': 'OFFLINE';
    }
}
const mutations = {
    SOCKET_CONNECTION:(state, data)=>{
        state.inetConnection = data[0]
    }
}

export default{
    state,
    getters,
    mutations
}