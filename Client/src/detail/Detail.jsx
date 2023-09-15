import React, { useState } from 'react';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setAllForms} from '../redux/actions'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { updateForm } from '../redux/actions';
import Form from '../form/Form';
import style from './detail.module.css';



const inputComponents = {
    STRING: 'input',
    INTEGER: 'input',
    language: 'select',
    BOOLEAN: 'checkbox'
};


export default function Detail() {

    const dispatch = useDispatch();

    const [forms, setForms] = useState([]);

    const [editedForm, setEditedForm] = useState(null);

    const { name } = useParams();

    const allUserForms = useSelector((state) => state.allUserForms);

    useEffect(()=>{
        dispatch(setAllForms(name));
    },[])

    function handleEditClick(form){
        setEditedForm(form);
    };

    function handleSaveClick(){
        dispatch(updateForm(editedForm))
        setEditedForm(null)
    };

    function handleCancelClick(){
        setEditedForm(null)
    };

    function handleInputChange(e){
        // const { fullName, phone, date, language, howFound, subscription } = e.target;
        setForms((form) => ({
            ...form,
            [e.target.name] : e.target.value
        }));
    };


    const fieldType = {
        fullName: 'input',
        phone: 'input',
        date: "",
        language: 'select',
        howFound: 'select',
        subscription: 'checkbox'
    };

    function renderFormFields(form) {
        return Object.entries(form).map(([fieldName, fieldValue]) => {

          if (fieldType.fieldName === 'select') {
            // Si el campo es de tipo ENUM, renderiza un select
            return (
              <div key={fieldName}>
                <label>{fieldName}</label>
                <select
                  name={fieldName}
                  value={form[fieldName] || ''}
                  onChange={handleInputChange}
                >
                  {fieldValue.options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            );
          } else if (fieldType === 'BOOLEAN') {
            // Si el campo es de tipo BOOLEAN, renderiza un checkbox
            return (
              <div key={fieldName}>
                <label>
                  <input
                    type="checkbox"
                    name={fieldName}
                    checked={form[fieldName] || false}
                    onChange={handleInputChange}
                  />
                  {fieldName}
                </label>
              </div>
            );
          } else {
            // Para otros tipos (STRING, INTEGER), renderiza un campo de entrada
            return (
              <div key={fieldName}>
                {/* <label>{fieldName}</label> */}
                <input
                  type={fieldValue.type} // Asumiendo que los tipos son en mayúsculas
                  name={fieldName}
                  value={form[fieldName] || ''}
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
                {allUserForms?.map((form) => (
                    <div key={form.id} className={style.container}>
                        {editedForm === form ? (
                            renderFormFields(form)
                        ) : (
                            <>
                                <p>Full Name: {form.fullName}</p>
                                <p>Phone: {form.phone}</p>
                                <p>Date: {form.date}</p>
                                <p>Start date: {form.language}</p>
                                <p>How did you find us?: {form.howFound}</p>
                                <p>Subscription: {form.subscription}</p>
                                <button onClick={() => handleEditClick(form)} className={style.buttonDetail}>Edit</button>
                            </>
                        )}
                        {editedForm === form && (
                            <>
                                {/* <button onClick={() => handleSaveClick(form)} className={style.buttonDetail}>Save</button> */}
                                <button onClick={() => handleCancelClick(form)} className={style.buttonDetail}>Cancel</button>
                            </>
                        )}
                    </div>
                ))}
            </div>
            
        </div>
    );
}
    