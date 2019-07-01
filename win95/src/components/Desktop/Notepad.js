import React from "react";
import Draggable from "react-draggable";
import { Icon } from "@react95/core";

const Notepad = props => {
  return (
    <Draggable grid={[100, 100]}>
      <div onDoubleClick={props.openNotepad} className="icon">
        <Icon key="notepad" name="notepad" width={45} height={45} />
        <p>Notepad</p>
      </div>
    </Draggable>
  );
};

export default Notepad;
