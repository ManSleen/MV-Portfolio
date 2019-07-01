import React from "react";
import Draggable from "react-draggable";

const Github = () => {
  return (
    <Draggable grid={[100, 100]}>
      <div className="icon">
        <img alt="github logo" src="../../images/github-logo1.svg" />
        {/* <Icon key="notepad" name="notepad" width={45} height={45} /> */}
        <p>Notepad</p>
      </div>
    </Draggable>
  );
};

export default Github;
