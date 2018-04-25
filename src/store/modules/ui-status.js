const state = {
    isUpdating: false,
    popupMessage: 'Updating',
    image: '/src/assets/img/Spinner.svg'
}

const getters = {
   isUpdating: (state)=>{
       return state.isUpdating;
   },
   popupMessage: (state)=>{
       return state.popupMessage;
   },
   popupImage: (state)=>{
       return state.image;
   }
   
}

const mutations = {
    
}
const actions = {
    popupUpdateModal: ({state})=>{
        state.isUpdating = true;
        state.popupMessage = "Updating..."
        state.image = '/src/assets/img/Spinner.svg'
        setTimeout(()=>{ 
            state.popupMessage = "Success!"
            state.image = '/src/assets/img/checked.png'
            setTimeout(()=>{ state.isUpdating = false}, 300);
        }, 1700);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}