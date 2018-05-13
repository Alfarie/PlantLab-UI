import axios from '../../axios/axios';
import controlModel from '../../models/model-control.js'
const state = {
    control: controlModel,
    waterControl: {},
    calibration: {
        ec: 1.0,
        ph: 1.0
    }
}

const getters = {
    getControl: (state)=>{
        return state.control;
    },
    getWaterControl: (state)=>{
        return state.waterControl;
    },
    getLedTimer: (state)=>{
        return state.control[0].timer.list;
    },
    getEcControl: (state)=>{
        return state.control[2].setpoint;
    },
    getPHControl: (state)=>{
        return state.control[3].setpoint;
    },
    getCo2Control: (state)=>{
        return state.control[1].setbound;
    },
    getCalibration: (state)=>{
        return state.calibration;
    }
}

const mutations ={
    addTimer(state, timer){
        // state.control[0].mode = 1;
        state.control[0].timer.list.push(timer);
        state.control[0].timer.list.sort( (a,b)=> a[0] - b[0]);
    }
}

const actions = {
    GetCalibration: ({commit,state})=>{
        axios.get('/control/calibration').then(res=>{
            state.calibration = res.data;
        });
    },
    SetCalibration: ({commit,state})=>{
        axios.post('/control/calibration', state.calibration).then(res=>{});
    },
    SetWaterControl: ({commit,state})=>{
        axios.post('/control/water', state.waterControl).then(res=>{
            // console.log(res);
        });
    },
    GetWaterControl: ({commit,state})=>{
        axios.get('/control/water').then(res=>{
            console.log('[Info] GetWater Control', res.data);
            state.waterControl = res.data;
        })
    },
    GetControl: ({commit,state})=>{
        axios.get('/control').then(res=>{
            state.control = res.data;
        })
    },

    addTimer: ({commit,dispatch}, timer)=>{
        commit('addTimer', timer);
        dispatch('uploadControl', 0);
    },
    uploadNutrition:({dispatch,state})=>{
        // state.control[2].mode = 2;
        // state.control[3].mode = 2;
        dispatch('uploadControl', 2);
        setTimeout( ()=>{
            dispatch('uploadControl', 3);
        },1500);
    },
    uploadEC:({dispatch,state})=>{
        dispatch('uploadControl', 2);
    },
    uploadPH:({dispatch,state})=>{
        dispatch('uploadControl', 3);
    },
    uploadCo2: ({dispatch,state})=>{
        // state.control[1].mode = 3;
        dispatch('uploadControl', 1);
    },
    uploadControl: ({commit,state}, channel)=>{
        axios.post('control/',{
            control: state.control[channel]
        })
        .then(res=> { 
            /*console.log(res)*/ 
        })
        .catch(err=>console.log(err))
    },
    uploadWater:({commit,state}, channel)=>{
        axios.post('control/water',{
            control: state.waterControl
        })
        .then(res=> {
            // console.log(res)
        })
        .catch(err=>console.log(err))
    },
    addWaterTimer:({dispatch,state}, timer)=>{
        setTimeout(()=>{
            state.control[4].timer.list.push(timer);
            dispatch('uploadControl', 4);
        },2000);
    },
    deleteWaterTimer:({dispatch,state}, index)=>{

        setTimeout(()=>{
            state.control[4].timer.list.splice(index,1);
            dispatch('uploadControl', 4);
        },2000);
    },

}

export default{
    state,
    getters,
    mutations,
    actions
}