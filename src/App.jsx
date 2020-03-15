import React from "react";
import ErrorBoundry from "./components/error-boundry/ErrorBoundry";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

const App = () => {
  return (
    <>
      <ErrorBoundry>
        <Header />
      </ErrorBoundry>
      <Main />
    </>
  );
};

export default App;
