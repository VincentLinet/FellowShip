import React from "react";
import classnames from "classnames";

const DayPicker = ({ id, days, blocked }) => {
  return (
    <div className="day-picker">
      {Array.apply(null, Array(7)).map((_, index) => {
        const isSelected = !!+days[index];
        const classes = classnames(
          "day-picker__day",
          isSelected && "day-picker__day--selected",
          blocked && "day-picker__day--blocked"
        );
        return <div key={`day-picker${id || ""}-${index}`} className={classes} />;
      })}
    </div>
  );
};

export default DayPicker;
