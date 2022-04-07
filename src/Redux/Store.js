import { combineReducers, createStore } from "redux";
import { reducer as formReducer } from 'redux-form'
import loginReducer from "./login-reducer";
import cryppoReducer from './cryppo-reducer'
import cryppoBusinessReducer from "./cryppoBusiness-reducer";
import cryppoIndexReducer from './cryppoIndex-reducer'
import animReducer from "./anim-reduсer";
import footerReducer from "./footer-reducer";


let reducers = combineReducers({
    cryppoPage: cryppoReducer,
    cryppoBusinessPage: cryppoBusinessReducer,
    cryppoIndexPage: cryppoIndexReducer,
    login: loginReducer,
    anim: animReducer,
    footer: footerReducer,
    form: formReducer
});

let store = createStore(reducers);
export default store