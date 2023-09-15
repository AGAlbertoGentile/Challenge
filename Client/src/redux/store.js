import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; //thunk es un middleware, una funcion de paso q se ejecuta antes de que se termine de solicitar info
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)) // esta línea es para poder hacer peticiones a un server
);
export default store;