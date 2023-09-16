import React from 'react';
import { Link } from 'react-router-dom';
import style from '../modal/modal.module.css';


export default function Modal({ isOpen, onRequestClose, formData }) {
    // El componente recibe isOpen (para mostrar u ocultar el modal), onRequestClose (para cerrar el modal) y formData (para mostrar la información).

    if (!isOpen) {
        return null;
    }

    return (
        <div>
            <div className={style.overlay}>
                <div className={style.modal}>
                    <div>
                        <h2>Name: {formData["Nombre completo"]}</h2>
                        <h2>Phone: {formData["Número de teléfono"]}</h2>
                        <h2>Start date: {formData["Fecha de inicio"]}</h2>
                        <h2>Language: {formData["¿Cuál es tu idioma preferido?"]}</h2>
                        <h2>How did you find us? {formData["¿Cómo nos encontraste?"]}</h2>
                        <h2>{formData["¿Desea recibir nuestro boletín informativo?"] ? "Subscribed" : "Unsubscribed"}</h2>
                        <button onClick={onRequestClose}  className={style.buttonModal}>Close</button>
                        <div>
                            <Link to={`/detail/${formData["Nombre completo"]}`}>
                                <button className={style.buttonModal}>Previous forms</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

