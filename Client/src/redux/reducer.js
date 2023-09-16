import { GET_ALL_FORMS } from './actionTypes'


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


const initialState = {
    allUserForms: [],
    allItems: items
}

const rootReducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case GET_ALL_FORMS:
            return {
                ...state,
                allUserForms: payload,
            }
        default:
            return state
    };
}

export default rootReducer;
