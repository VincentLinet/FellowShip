import DayPicker from "./DayPicker";
import React from "react";

const Group = ({ id, title, description, location, picture, recurrence, openSelection, header }) => {
  return (
    <div className="group" onClick={openSelection}>
      <img className="group__picture" src={picture} alt="" />
      <div className="group__presentation">
        <div className="group__title">{`${title}`}</div>
        <div className="group__description">{`${description}`}</div>
        <div className="group__days">
          <DayPicker days={recurrence} id={id} blocked />
        </div>
      </div>
    </div>
  );
};

export default Group;
