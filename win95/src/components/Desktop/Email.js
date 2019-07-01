import React from "react";
import Draggable from "react-draggable";
import { Icon } from "@react95/core";

const Email = () => {
  return (
    <Draggable grid={[100, 100]}>
      <div className="icon">
        <Icon key="mail" name="mail" width={45} height={45} />
        <p>E-mail</p>
      </div>
    </Draggable>
  );
};

export default Email;
