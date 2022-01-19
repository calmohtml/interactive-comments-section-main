import React, { Fragment } from "react";
import GlobalStyle from "./style/GlobalStyles";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Main />
      <Footer />
    </Fragment>
  );
};

export default App;
