import React from "react";
import Draggable from "react-draggable";
import { Link } from "react-router-dom";

const Github = () => {
  return (
    <Draggable grid={[100, 100]}>
      <div
        onDoubleClick={() =>
          window.open("https://github.com/ManSleen", "_blank")
        }
        className="icon"
      >
        <img
          draggable="false"
          src={require("./icon_images/github-logo3.png")}
        />
        <p>GitHub</p>
      </div>
    </Draggable>
  );
};

export default Github;
