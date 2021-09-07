import { applyMiddleware, createStore } from "redux";
import { rootReducers } from "./reducer/rootReducer"; 
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { getMovie } from "./action/movieAction";




const store = createStore(rootReducers,

    composeWithDevTools(
        applyMiddleware(thunk)
    ))


store.dispatch(getMovie('tt6450804'))
export { store }