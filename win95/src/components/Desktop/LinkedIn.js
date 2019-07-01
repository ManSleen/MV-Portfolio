import React from "react";
import Draggable from "react-draggable";

const LinkedIn = () => {
  return (
    <Draggable grid={[100, 100]}>
      <div className="icon">
        <img
          draggable="false"
          src={require("./icon_images/linkedin-logo.png")}
        />

        <p>LinkedIn</p>
      </div>
    </Draggable>
  );
};

export default LinkedIn;
