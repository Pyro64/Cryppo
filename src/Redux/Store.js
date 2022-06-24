import { reducer as formReducer } from "redux-form";
import footerReducer from "./footer-reducer";
import userReducer from "./user-reducer";
import headerReducer from "./header-refucer";
import landingReducer from "./landing-reducer";
import LkReducer from "./Lk-reducer";
import operationReducer from "./operation-reducer";
import LKReducer from "./LkReducer";
import paymentsReducer from "./payments-reducer";
import doughuntReducer from "./DoughuntReducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  header: headerReducer,
  footer: footerReducer,
  landing: landingReducer,
  lk: LkReducer,
  user: userReducer,
  operation: operationReducer,
  LK: LKReducer,
  payments: paymentsReducer,
  doughunt: doughuntReducer,
  form: formReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};

export default setupStore;
