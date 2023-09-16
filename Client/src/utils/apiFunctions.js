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
        // alert('El formulario fue creado con exito!')

        return ('Respuestas guardadas correctamente')
    } catch (error){
        alert('El formulario no se pudo crear')
        return console.log('Error al crear');

    }
};

export async function updateInformationForm (form){
    try {
        const endpoint = '/';
        const updatedForm = (await axios.put(endpoint, form)).data;
        return ('Formulario editado con exito')
    } catch (error) {
        return console.log('Error al editar');
        
    }
};