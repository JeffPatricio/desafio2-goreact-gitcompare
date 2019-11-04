import React, { Component, Fragment } from 'react';
import GlobalStyle from "./styles/global";
import Main from "./pages/Main/index";

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Main />
        <div className="App" />
      </Fragment>
    )
  }
}

export default App;
