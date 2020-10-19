import React from "react";

const Toggle = ({ buttons }) => {
  return (
    <div className="toggle">
      {buttons.map((button, index) => (
        <div key={`toggle-choice-${button}`} className="toggle__choice">
          {button}
        </div>
      ))}
    </div>
  );
};

export default Toggle;
