import { applyMiddleware, createStore } from "redux";
import { rootReducers } from "./reducer/rootReducer"; 
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'


const store = createStore(rootReducers,

    composeWithDevTools(
        applyMiddleware(thunk)
    ))



export { store }