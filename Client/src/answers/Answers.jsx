import React, { useEffect, useDispatch } from "react";
import { getFormsByName } from "../utils/apiFunctions";


export default function EditAnswers () {

    const dispatch = useDispatch();

    const allAnswers = useSelector((state) => state.allAnswers);
    console.log(allAnswers)
    const [editAnswer, setEditAnswer] = useState({});

    useEffect(()=>{
        dispatch(getFormsByName())
    },[])


    function handleChange(e){
        setEditAnswer(
            ...editAnswer,
        [e.target.name] = e.target.value)
    }

    function handleSubmit (e){
        e.preventDefault();
        setEditAnswer(e.target.value)
    }
    
    return(
        <div>
            <h1>Respuestas proporcionadas anteriormente</h1>
            {allAnswers?.map((answer)=> <h1>{answer}</h1>)}
        </div>
    )
};