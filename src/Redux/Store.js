import { combineReducers, createStore } from "redux";
import { reducer as formReducer } from 'redux-form'
import cryppoReducer from './cryppo-reducer'
import cryppoBusinessReducer from "./cryppoBusiness-reducer";
import cryppoIndexReducer from './cryppoIndex-reducer'
import animReducer from "./anim-reduсer";
import footerReducer from "./footer-reducer";


let reducers = combineReducers({
    cryppoPage: cryppoReducer,
    cryppoBusinessPage: cryppoBusinessReducer,
    cryppoIndexPage: cryppoIndexReducer,
    anim: animReducer,
    footer: footerReducer,
    form: formReducer
});

let store = createStore(reducers);
window.store = store
console.log(store.getState())
export default store