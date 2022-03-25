import { combineReducers, createStore } from "redux";
import { reducer as formReducer } from 'redux-form'
import loginReducer from "./login-reducer";
import cryppoBusinessReducer from "./cryppoBusiness-reducer";
import headerReducer from "./header-reducer";
import cryppoIndexReducer from './cryppoIndex-reducer'

let reducers = combineReducers({
    login: loginReducer,
    cryppoBusinessPage: cryppoBusinessReducer,
    header: headerReducer,
    cryppoIndexPage: cryppoIndexReducer,
    form: formReducer
});

let store = createStore(reducers);
export default store