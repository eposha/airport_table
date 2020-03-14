import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";
import App from "./App";

const rootElement = document.querySelector("#root");

ReactDOM.render(
  <Provider store={store}>
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <App />
    </Router>
  </Provider>,
  rootElement
);
