import { getFormsByName } from "../utils/apiFunctions";

import {GET_ALL_FORMS, FORM_UPDATED} from './actionTypes'

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

export const updateForm = (form) => {
    return async (dispatch) => {
        try {
            const editedForm = await updateInformationForm(form);
            dispatch({ type: FORM_UPDATED, payload: editedForm });
        } catch (error) {
            console.log('No se puedo editar el formulario')
        }
    }
};