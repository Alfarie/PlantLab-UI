const state = {
    connect: false
}

const getters = {
    ConnectionStatus: (state)=>{
        return state.connect;
    },
    connect: (state)=>{
        return state.connect;
    },
    isConnect: (state)=>{
        return (state.connect)? 'ONLINE': 'OFFLINE';
    }
}

const mutations = {
    SOCKET_CONNECT: (state,  status ) => {
        console.log('SOCKET.IO: Connected');
        state.connect = true;
    },
    SOCKET_DISCONNECT: (state, status)=>{
        console.log('SOCKET.IO: disconnceted');
        state.connect = false;
        
    }
}

export default {
    state,
    getters,
    mutations
}