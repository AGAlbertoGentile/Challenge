import React, { useState } from 'react';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setAllForms } from '../redux/actions'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import style from './detail.module.css';
import { updateInformationForm } from '../utils/apiFunctions';



export default function Detail() {

    const dispatch = useDispatch();

    const [edit, setEdit] = useState(false);

    const [editedForm, setEditedForm] = useState(null);

    const { name } = useParams();

    const allUserForms = useSelector((state) => state.allUserForms);

    const allItems = useSelector((state) => state.allItems);

    useEffect(() => {
        dispatch(setAllForms(name));
    }, [edit])

    function handleEditClick(form) {
        setEditedForm(form);
        setEdit(form.id)
    };

    function handleSaveClick() {
        updateInformationForm(editedForm)
        setEdit(false)
    };

    function handleCancelClick() {
        setEdit(false)
        setEditedForm(null)
    };

    function handleInputChange(e) {
        setEditedForm({
            ...editedForm,
            [e.target.name]: e.target.value
        });
    };

    const fieldType = {
        fullName: 'input',
        phone: 'input',
        date: 'date',
        language: 'select',
        howFound: 'radio',
        subscription: 'checkbox'
    };

    function renderFormFields() {
        return Object.entries(editedForm).map(([fieldName, fieldValue]) => {
            if (fieldName === 'id') return null;
            if (fieldType[fieldName] === 'select') {
                return (
                    <div key={fieldName}>
                        {/* <label>{fieldName}</label> */}
                        <select
                            name={fieldName}
                            value={editedForm[fieldName] || ''}
                            onChange={handleInputChange}
                        >
                            {allItems?.map((item, index) => {
                                if (item.type === "select") {
                                    return (
                                        item?.options?.map((option, optionIndex) => (
                                            <option key={optionIndex} value={option.value}>
                                                {option.value}
                                            </option>
                                        ))
                                    )
                                }
                            }
                            )
                            };
                        </select>
                    </div>
                );
            } else if (fieldType[fieldName] === 'checkbox') {
                // Si el campo es de tipo BOOLEAN, renderiza un checkbox
                return (
                    <div key={fieldName}>
                        <input
                            type="checkbox"
                            name={fieldName}
                            checked={editedForm[fieldName] || false}
                            onChange={handleInputChange}
                        />
                        {fieldName}
                    </div>
                );
            } else if (fieldType[fieldName] === 'date') {
                return (
                    <div>
                        <input
                            type="date"
                            name={fieldName}
                            checked={editedForm[fieldName] || false}
                            onChange={handleInputChange}
                        />
                    </div>
                );
            } else if (fieldType[fieldName] === 'radio') {
                return (
                    <div key={fieldName}>
                        {/* <label>{fieldName}</label> */}
                        <select
                            name={fieldName}
                            value={editedForm[fieldName] || ''}
                            onChange={handleInputChange}
                        >
                            {allItems?.map((item, index) => {
                                if (item.type === "radio") {
                                    return (
                                        item?.options?.map((option, optionIndex) => (
                                            <option key={optionIndex} value={option.value}>
                                                {option.value}
                                            </option>
                                        ))
                                    )
                                }
                            }
                            )
                            };
                        </select>
                    </div>
                );
            } else {
                return (
                    <div key={fieldName}>
                        {/* <label>{fieldName}</label> */}
                        <input
                            type="input"
                            name={fieldName}
                            value={editedForm[fieldName] || ''}
                            onChange={handleInputChange}
                        />
                    </div>
                );
            }
        });
    }



    return (
        <div>
            <div>
                <div>
                    <Link to={'/'}>
                        <button className={style.buttonDetail}>New Form</button>
                    </Link>
                </div>
                <h1>Respuestas proporcionadas anteriormente</h1>
                {allUserForms?.map((form, index) => (
                    <div key={index} className={style.container}>
                        {edit === form.id ? (
                            renderFormFields()
                        ) : (
                            <>
                                <p>Name: {form.fullName}</p>
                                <p>Phone: {form.phone}</p>
                                <p>Date: {form.date}</p>
                                <p>Start date: {form.language}</p>
                                <p>How did you find us?: {form.howFound}</p>
                                <p>Subscription: {form.subscription}</p>
                                <button onClick={() => handleEditClick(form)} className={style.buttonDetail}>Edit</button>
                            </>
                        )}
                        {edit === form.id && (
                            <>
                                <button onClick={() => handleSaveClick(form)} className={style.buttonDetail}>Save</button>
                                <button onClick={() => handleCancelClick(form)} className={style.buttonDetail}>Cancel</button>
                            </>
                        )}
                    </div>
                ))}
            </div>

        </div>
    );
}
