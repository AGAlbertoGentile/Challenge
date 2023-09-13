import axios from 'axios';
const URL = 'http://localhost:3001'
axios.defaults.baseURL = URL;


export async function getFormsByName (name){
    try{
        const endpoint = `/?name=${name}`;
        const forms = (await axios.get(endpoint, name)).data;
        return forms;
    } catch (error){

    }
};

export async function createNewForm (form){
    console.log(form)
    try{
        const endpoint = '/newPost';
        const newForm = (await axios.post(endpoint, form)).data;
        return newForm;
    } catch (error){
        return console.log('error al crear');
    }
};