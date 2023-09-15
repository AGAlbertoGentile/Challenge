import React from 'react';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setAllAnswers} from '../redux/actions'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function Detail() {

    const dispatch = useDispatch();

    const { name } = useParams();

    const allAnswers = useSelector((state) => state.allAnswers);

    useEffect(()=>{
        dispatch(setAllAnswers(name));
    },[])


    return (
        <div>
        <div>
            <h1>Respuestas proporcionadas anteriormente</h1>
            {allAnswers?.map((answer) => {
                return (
                    <div key={answer.id}>
                        <p>Nombre completo: {answer.fullName}</p>
                        <p>Teléfono: {answer.phone}</p>
                        <p>Fecha: {answer.date}</p>
                        <p>Idioma: {answer.language}</p>
                        <p>Encontrado: {answer.howFound}</p>
                        <p>Suscripción: {answer.subscription}</p>
                        <button>Edit</button>
                    </div>
                )
            }
            )}
        </div>
            <Link to={"/"}>
                <button>New Form</button>
            </Link>
        </div>
    )
};