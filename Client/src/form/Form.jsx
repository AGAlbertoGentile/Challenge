import React from "react";
import { useState, useEffect } from "react";
import { createNewForm } from "../utils/apiFunctions";
import { Link } from 'react-router-dom';
import style from './form.module.css';
import { useSelector } from "react-redux";
import Modal from "../modal/Modal";


function validate(form) {
  const errors = {};

  if (!form["Nombre completo"]) {
    errors["Nombre completo"] = "This field is required";
  } else if (!/^[a-zA-Z\s]*$/.test(form["Nombre completo"])) {
    errors["Nombre completo"] = "Only letters and spaces are allowed";
  }

  if (!form["Número de teléfono"]) {
    errors["Número de teléfono"] = "This field is required";
  } else if (!/^[0-9]*$/.test(form["Número de teléfono"])) {
    errors["Número de teléfono"] = "Only numbers are allowed";
  }

  if (!form["¿Cuál es tu idioma preferido?"]) {
    errors["¿Cuál es tu idioma preferido?"] = "This field is required";
  }

  if (!form["¿Cómo nos encontraste?"]) {
    errors["¿Cómo nos encontraste?"] = "This field is required";
  }

  return errors;
}


export default function Form() {

  const [form, setForm] = useState({});

  const [errors, setErrors] = useState({})

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formDataForModal, setFormDataForModal] = useState({});

  const allItems = useSelector((state) => state.allItems);

  function handleChange(e) {
    const newValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm({
      ...form,
      [e.target.name]: newValue
    })
  };

  useEffect(() => {
    setErrors(validate(form));
  }, [form]);


  function handleSubmit(e) {
    e.preventDefault();
    createNewForm(form)
    setIsModalOpen(true);
    setFormDataForModal({ ...form });
    setForm({})
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.container}>
        {allItems?.map((item, index) => {
          let element;

          if (item.type === 'select' || item.type === 'radio') {
            element = (
              <div>
                <select
                  className={style.selectForm}
                  name={item.label}
                  value={form[item.label] || ''}
                  onChange={handleChange}
                >
                  <p className={style.validations}>{errors.duration}</p>
                  <option value="">Selecciona una opción</option>
                  {item.options.map((option, optionIndex) => (
                    <option key={optionIndex} value={option.value}>
                      {option.value}
                    </option>
                  ))}
                </select>
              </div>
            );
          } else if (item.type === 'checkbox') {
            element = (
              <div>
                <label className={style.label}>{item.label}</label>

                <input
                  type="checkbox"
                  name={item.label}
                  checked={form[item.label] || false}
                  onChange={handleChange}
                />
              </div>
            );
          } else if (item.type === 'submit') {
            element = (
              <div>
                <button className={style.buttonForm} disabled={Object.keys(errors).length}>{item.label}</button>
              </div>
            );
          } else {
            element = (
              <div>
                <input
                  className={style.inputForm}
                  name={item.label}
                  value={form[item.label] || ''}
                  placeholder={item.label}
                  type={item.type}
                  onChange={handleChange}
                />
              </div>
            );
          }
          return (
            <div key={index}>
              {element}
              {errors[item.label] && <p className={style.validations}>{errors[item.label]}</p>}
            </div>
          );
        })}
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          formData={formDataForModal}
        />
      )}
    </form>

  )
};
