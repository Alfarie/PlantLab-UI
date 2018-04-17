import axios from '../../axios/axios';

const state = {
    control: {},
    waterControl: {}
}

const getters = {
    getControl: (state)=>{
        return state.control;
    },
    getWaterControl: (state)=>{
        return state.waterControl;
    }
}

const mutations ={
    
}

const actions = {
    SetWaterControl: ({commit,state})=>{
        axios.post('/control/water', state.waterControl).then(res=>{
            console.log(res);
        });
    },
    GetWaterControl: ({commit,state})=>{
        axios.get('/control/water').then(res=>{
            state.waterControl = res.data;
        })
    },
    GetControl: ({commit,state})=>{
        axios.get('/control').then(res=>{
            state.control = res.data;
        })
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}