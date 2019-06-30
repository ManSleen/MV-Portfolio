import React from "react";
import StartButton from "./StartButton";
import TimeSection from "./TimeSection";
import StartMenu from "../StartMenu/StartMenu";
import "./NavBar.css";

class NavBar extends React.Component {
  state = {
    isNavBarActive: false
  };

  openStartMenu = () => {
    this.setState({
      isNavBarActive: !this.state.isNavBarActive
    });
    console.log("firing openStartMenu!");
  };

  render() {
    console.log(this.state);
    return (
      <div className="navbar-container">
        <div className="nav-bar-border" />
        {this.state.isNavBarActive && <StartMenu />}

        <StartButton openStartMenu={this.openStartMenu} />
        <TimeSection />
      </div>
    );
  }
}

export default NavBar;
