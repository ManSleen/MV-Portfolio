import React from "react";

import Window from "./Window";
import Notepad from "./Notepad";
import Network from "./Network";
import Email from "./Email";
import Github from "./Github";

import "../Desktop/Desktop.css";

class Desktop extends React.Component {
  render() {
    return (
      <div className="desktop-container">
        <Notepad openNotepad={this.props.openNotepad} />
        <Network />
        <Email />
        <Github />
        {this.props.notepadIsOpen && (
          <Window openNotepad={this.props.openNotepad} />
        )}
      </div>
    );
  }
}

export default Desktop;
