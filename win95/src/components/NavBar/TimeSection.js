import React from "react";
import "./NavBar.css";
import Clock from "react-live-clock";

const TimeSection = () => {
  return (
    <div className="time-section-container">
      <Clock format={"h:mm A"} />
    </div>
  );
};
export default TimeSection;
