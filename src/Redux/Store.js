import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import footerReducer from "./footer-reducer";
import userReducer from "./user-reducer";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import headerReducer from "./header-refucer";
import landingReducer from "./landing-reducer";
import LkReducer from "./Lk-reducer";
import operationReducer from "./operation-reducer";

let reducers = combineReducers({
  header: headerReducer,
  footer: footerReducer,
  landing: landingReducer,
  lk: LkReducer,
  user: userReducer,
  operation: operationReducer,
  form: formReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
window.store = store;
export default store;
