import React from "react";
import { useState } from "react";
import { createNewForm } from "../utils/apiFunctions";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const items = [
    {
        "type": "text",
        "label": "Nombre completo",
        "name": "full_name",
        "required": true
    },
    {
        "type": "tel",
        "label": "Número de teléfono",
        "name": "phone_number",
        "required": true
    },
    {
        "type": "date",
        "label": "Fecha de inicio",
        "name": "start_date",
        "required": false
    },
    {
        "type": "select",
        "label": "¿Cuál es tu idioma preferido?",
        "name": "preferred_language",
        "options": [
            {
                "label": "Inglés",
                "value": "english"
            },
            {
                "label": "Español",
                "value": "spanish"
            },
            {
                "label": "Francés",
                "value": "french"
            },
            {
                "label": "Alemán",
                "value": "german"
            }
        ],
        "required": true
    },
    {
        "type": "radio",
        "label": "¿Cómo nos encontraste?",
        "name": "how_found",
        "options": [
            {
                "label": "Amigos",
                "value": "friends"
            },
            {
                "label": "Búsqueda en línea",
                "value": "online_search"
            },
            {
                "label": "Publicidad",
                "value": "advertisement"
            }
        ],
        "required": true
    },
    {
        "type": "checkbox",
        "label": "¿Desea recibir nuestro boletín informativo?",
        "name": "newsletter_subscription",
        "required": false
    },
    {
        "type": "submit",
        "label": "Enviar"
    }
]


export default function Form() {

    const dispatch = useDispatch();
    const allAnswers = useSelector((state) => state.allAnswers);
    const [form, setForm] = useState({});

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    function handleSubmit(e) {
        e.preventDefault();
        createNewForm(form)
        // setForm({})
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                {items?.map((item, index) => {
                    return (
                        <div key={index}>
                            <label>{item.label}</label>
                            {item.type === 'select' || item.type === 'radio' ? (
                                <select
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
                                <input
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
                    <button>Respuestas Anteriores</button>
                </Link>
            </div>
        </form>
    )
};