import { getFormsByName } from "../utils/apiFunctions";

export const GET_ALL_ANSWER = 'GET_ALL_ANSWER';


export const setAllAnswers = (name) => {
    return async (dispatch) => {
        try {
            const userAnswers = await getFormsByName(name);
            return dispatch({
                type:GET_ALL_ANSWER,
                payload:userAnswers
            })
        } catch (error) {
            console.log('Server error')
        }
    }
};