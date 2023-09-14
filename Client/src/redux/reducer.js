const initialState = {
    allAnswers : []
}

const rootReducer = (state = initialState, action)=>{
    const {payload, type} = action;

    switch(type){
        case GET_ALL_ANSWER:
            return{
                ...state,
                allAnswers: payload,
            }
        default:
            return state
    };
}

export default rootReducer;
