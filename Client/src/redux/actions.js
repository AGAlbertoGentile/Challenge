import { getFormsByName } from "../utils/apiFunctions";

import {GET_ALL_FORMS } from './actionTypes'

export const setAllForms = (name) => {
    return async (dispatch) => {
        try {
            const userForms = await getFormsByName(name);
            return dispatch({
                type:GET_ALL_FORMS,
                payload:userForms
            })
        } catch (error) {
            console.log('Server error')
        }
    }
};
