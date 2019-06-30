import React from "react";
import { Icon } from "@react95/core";
import styled from "styled-components";
import "./NavBar.css";

const StartButtonDiv = styled.button`
  background-color: #c3c7cb;
  padding: 2px 10px;
  margin-left: 5px;
  border: none;
  height: 32px;
  line-height: 30px;
  font-size: 15px;
  font-weight: bold;
  box-shadow: inset 1px 1px 0px 1px #ffffff, inset 0 0 0 1px #868a8e,
    1px 1px 0 0px #000;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-evenly;

  &:disabled {
    color: #868a8e;
  }
  &:focus {
    outline: none;
    box-shadow: inset 1px 1px 0px 1px #ffffff,
      inset -0.5px -0.5px 0px 1px #868a8e, 1px 1px 0 1px #000;
    outline: 1px dotted #000;
    outline-offset: -5px;
  }
  &:active {
    padding: 2px 10px;

    outline: 1px dotted #000;
    outline-offset: -5px;
    box-shadow: inset 0 0 0 1px #868a8e, 0 0 0 1px #000;
  }
`;

const StartButton = props => {
  console.log(props);
  return (
    <div onClick={props.openStartMenu} className="start-button-container">
      <StartButtonDiv>
        <Icon width="28" height="28" name="logo" />{" "}
        <div className="start-button-text">Start</div>
      </StartButtonDiv>
    </div>
  );
};

export default StartButton;
