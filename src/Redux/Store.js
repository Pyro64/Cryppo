import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import cryppoReducer from "./cryppo-reducer";
import cryppoBusinessReducer from "./cryppoBusiness-reducer";
import cryppoInvestReducer from "./cryppoInvest-reducer";
import footerReducer from "./footer-reducer";
import cryppoLkReducer from "./cryppoLk-reducer";
import businessLkReducer from "./businessLk-reducer";
import userReducer from "./user-reducer";
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from '@redux-devtools/extension';

let reducers = combineReducers({
  cryppoPage: cryppoReducer,
  cryppoBusinessPage: cryppoBusinessReducer,
  cryppoInvestPage: cryppoInvestReducer,
  cryppoLk: cryppoLkReducer,
  footer: footerReducer,
  user: userReducer,
  form: formReducer,
  businessLk:businessLkReducer
});

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunkMiddleware)
    )
);
window.store = store;
export default store;




