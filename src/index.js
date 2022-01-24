import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.scss";
import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/js/bootstrap.bundle.js";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
