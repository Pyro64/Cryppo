import { combineReducers, createStore } from "redux";
import { reducer as formReducer } from 'redux-form'
import loginReducer from "./login-reducer";
import cryppoBusinessReducer from "./cryppoBusiness-reducer";
import cryppoIndexReducer from './cryppoIndex-reducer'
import routerReducer from "./router-reducer";
import animReducer from "./anim-reduсer";
import footerReducer from "./footer-reducer";


let reducers = combineReducers({
    login: loginReducer,
    cryppoBusinessPage: cryppoBusinessReducer,
    router: routerReducer,
    anim: animReducer,
    cryppoIndexPage: cryppoIndexReducer,
    footer: footerReducer,
    form: formReducer
});

let store = createStore(reducers);
export default store