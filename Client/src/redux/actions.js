import { getFormsByName } from "../utils/apiFunctions";

import {GET_ALL_ANSWER} from './actionTypes'

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