import React from "react";
import ReactSpinner from "./Spinner";

const Spinner = () => {
  const config = {
    lines: 9, // The number of lines to draw
    length: 0, // The length of each line
    width: 9, // The line thickness
    radius: 9, // The radius of the inner circle
    scale: 1.8, // Scales overall size of the spinner
    corners: 1, // Corner roundness (0..1)
    color: "#6574cd", // CSS color or array of colors
    fadeColor: "white", // CSS color or array of colors
    speed: 1.1, // Rounds per second
    rotate: 0, // The rotation offset
    animation: "spinner-line-fade-more", // The CSS animation name for the lines
    direction: 1, // 1: clockwise, -1: counterclockwise
    zIndex: 2e9, // The z-index (defaults to 2000000000)
    className: "spinner mt-16", // The CSS class to assign to the spinner
    shadow: "0 0 1px transparent", // Box-shadow for the lines
    position: "relative" // Element positioning
  };

  return <ReactSpinner config={config} />;
};

export default Spinner;
