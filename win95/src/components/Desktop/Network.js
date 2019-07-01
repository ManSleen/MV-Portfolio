import React from "react";
import Draggable from "react-draggable";
import { Icon } from "@react95/core";

const Network = () => {
  return (
    <Draggable grid={[100, 100]}>
      <div className="icon">
        <Icon key="network_2" name="network_2" width={45} height={45} />
        <p>Network</p>
      </div>
    </Draggable>
  );
};

export default Network;
