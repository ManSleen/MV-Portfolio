import React from "react";
import StartButton from "./StartButton";
import TimeSection from "./TimeSection";
import StartMenu from "../StartMenu/StartMenu";
import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="navbar-container">
        <div className="nav-bar-border" />
        {this.props.isNavBarActive && <StartMenu />}

        <StartButton openStartMenu={this.props.openStartMenu} />
        <div className="navbar-middle">
          {this.props.notepadIsOpen && (
            <div className="notepad-minimized">Notepad</div>
          )}
        </div>
        <TimeSection />
      </div>
    );
  }
}

export default NavBar;
