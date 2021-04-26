import React, { useState } from "react";
import classnames from "classnames";

const DayPicker = ({ id, days, onChange, blocked }) => {
  const [down, setDown] = useState(false);

  const mouseDown = () => setDown(true);
  const mouseUp = () => setDown(false);

  const click = (index, method) => () => {
    if ((method !== "click" && !down) || blocked) return;
    const day = days[index];
    const week = days.substr(0, index) + +!+day + days.substr(index + 1);
    onChange(week);
  };

  return (
    <div className="day-picker" onMouseDown={mouseDown} onMouseUp={mouseUp} onMouseLeave={mouseUp}>
      {Array.apply(null, Array(7)).map((_, index) => {
        const isSelected = !!+days[index];
        const classes = classnames(
          "day-picker__day",
          isSelected && "day-picker__day--selected",
          blocked && "day-picker__day--blocked"
        );
        return (
          <div
            key={`day-picker${id || ""}-${index}`}
            className={classes}
            onMouseOver={click(index)}
            onMouseDown={click(index, "click")}
          />
        );
      })}
    </div>
  );
};

export default DayPicker;
