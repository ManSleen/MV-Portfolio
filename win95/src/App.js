import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Desktop from "./components/Desktop/Desktop";

import { List } from "@react95/core";

import "./App.css";

class App extends React.Component {
  state = {
    isNavBarActive: false,
    notepadIsOpen: false
  };

  openNotepad = () => {
    this.setState({
      notepadIsOpen: !this.state.notepadIsOpen
    });
  };

  openStartMenu = () => {
    this.setState({
      isNavBarActive: !this.state.isNavBarActive
    });
    console.log("firing openStartMenu!");
  };
  render() {
    return (
      <div className="App">
        <Desktop
          notepadIsOpen={this.state.notepadIsOpen}
          openNotepad={this.openNotepad}
        />
        <NavBar
          notepadIsOpen={this.state.notepadIsOpen}
          isNavBarActive={this.state.isNavBarActive}
          openStartMenu={this.openStartMenu}
        />
      </div>
    );
  }
}

export default App;
