import React from "react";
import NavBar from "./components/NavBar/NavBar";
import StartMenu from "./components/StartMenu/StartMenu";
import { List } from "@react95/core";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
