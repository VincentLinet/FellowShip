import React, { useEffect, useState } from "react";
import classnames from "classnames";

const Toggle = ({ buttons, value, onChange }) => {
  return (
    <div className="toggle">
      {buttons.map((button, index) => (
        <div
          key={`toggle-choice-${button}`}
          className={classnames("toggle__choice", { active: value === index })}
          onClick={() => onChange(index)}
        >
          {button}
        </div>
      ))}
    </div>
  );
};

export default Toggle;
