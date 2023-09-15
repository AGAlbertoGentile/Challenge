import React from "react";
import { useState } from "react";
import { createNewForm } from "../utils/apiFunctions";
import { Link } from 'react-router-dom';
import style from './form.module.css';
import { useSelector } from "react-redux";




export default function Form() {

    const [form, setForm] = useState({});

    const [activeButton, setActiveButton] = useState(false);

    const allItems =useSelector((state)=> state.allItems);

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    function handleSubmit(e) {
        e.preventDefault();
        createNewForm(form)
        alert('El formulario fue creado con exito!')
        // setForm({})
        setActiveButton(true)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={style.container}>
                {allItems?.map((item, index) => {
                    return (
                        <div key={index}>
                            <label className={style.label}>{item.label}</label>
                            {item.type === 'select' || item.type === 'radio' ? (
                                <select className={style.select}
                                    name={item.label}
                                    value={form[item.label] || ''}
                                    onChange={handleChange}
                                >
                                    <option value="">Selecciona una opción</option>
                                    {item.options.map((option, optionIndex) => (
                                        <option key={optionIndex} value={option.value}>
                                            {option.value}
                                        </option>
                                    ))}
                                </select>
                            ) : (
                                <input className={style.input}
                                    name={item.label}
                                    value={form[item.label] || ''}
                                    placeholder={item.label}
                                    type={item.type}
                                    onChange={handleChange}
                                />
                            )}
                            
                        </div>
                    );
                })}
            </div>
            <div>
                <Link to={`/detail/${form["Nombre completo"]}`}>
                    <button className={style.buttonForm}>Respuestas Anteriores</button>
                </Link>
            </div>
        </form>
    )
};
