import {GET_ALL_FORMS, FORM_UPDATED} from './actionTypes'


const initialState = {
    allUserForms : []
}

const rootReducer = (state = initialState, action)=>{
    const {payload, type} = action;

    switch(type){
        case GET_ALL_FORMS:
            return{
                ...state,
                allUserForms: payload,
            }
        case FORM_UPDATED:
            return{
                ...state,
                allUserForms: payload,
            }
        default:
            return state
    };
}

export default rootReducer;
