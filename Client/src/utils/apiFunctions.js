import axios from 'axios';
const URL = 'http://localhost:3001'
axios.defaults.baseURL = URL;


export async function getFormsByName (name){
    try{
        const endpoint = `/?name=${name}`;
        const forms = (await axios.get(endpoint, name)).data;
        return forms;
    } catch (error){
        return error.response.data;
    }
};

export async function createNewForm (form){
    try{
        const endpoint = '/newPost';
        const newForm = (await axios.post(endpoint, form)).data;
        return ('Respuestas guardadas correctamente')
    } catch (error){
        return console.log('error al crear');
    }
};