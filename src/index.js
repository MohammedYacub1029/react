import React, { Component } from "react";
import ReactDOM from "react-dom";
import Dynamicrendering from "./dynamicrendering/Dynamicrendering";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dynamicrendering />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
