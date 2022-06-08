import React from "react";
import App from "./App";
import store from "./Redux/Store";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
