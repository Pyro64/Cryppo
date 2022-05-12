import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import cryppoReducer from "./cryppo-reducer";
import cryppoBusinessReducer from "./cryppoBusiness-reducer";
import cryppoIndexReducer from "./cryppoIndex-reducer";
import animReducer from "./anim-reduсer";
import footerReducer from "./footer-reducer";
import cryppoLkReducer from "./cryppoLk-reducer";
import linkReducer from "./link-reducer";
import interfaceReducer from "./interface-reducer";
import userReducer from "./user-reducer";
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from '@redux-devtools/extension';

let reducers = combineReducers({
  cryppoPage: cryppoReducer,
  cryppoBusinessPage: cryppoBusinessReducer,
  cryppoIndexPage: cryppoIndexReducer,
  cryppoLk: cryppoLkReducer,
  anim: animReducer,
  footer: footerReducer,
  link: linkReducer,
  user: userReducer,
  interface: interfaceReducer,
  form: formReducer,
});

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunkMiddleware)
    )
);
window.store = store;
export default store;




