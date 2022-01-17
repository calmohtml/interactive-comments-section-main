import React, { Fragment } from "react";
import GlobalStyle from "./style/GlobalStyles";
import Main from "./components/Main";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Main />
    </Fragment>
  );
};

export default App;
