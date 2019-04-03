import React, { Component } from "react";
import AppContainer from "./src/Router";
import MyStore from "./src/context";
class App extends Component {
  render() {
    return (
      <MyStore>
        <AppContainer />
      </MyStore>
    );
  }
}

export default App;
