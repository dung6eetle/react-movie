import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from "redux-thunk";
import resultReducer from "./result-reducer";

let reducers = combineReducers({
    resultPage: resultReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store

export default store