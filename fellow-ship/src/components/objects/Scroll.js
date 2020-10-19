import React from "react";

const Scroll = () => {
  return (
    <div className="scroll">
      <div className="scroll__bar" />
      <div className="scroll__bar__filled" />
      <div className="scroll__cursor--left" />
      <div className="scroll__cursor--right" />
    </div>
  );
};

export default Scroll;
