import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";
import App from "./App";
import ErrorBoundry from "./components/error-boundry/ErrorBoundry";

const rootElement = document.querySelector("#root");

ReactDOM.render(
  <ErrorBoundry>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </ErrorBoundry>,
  rootElement
);
