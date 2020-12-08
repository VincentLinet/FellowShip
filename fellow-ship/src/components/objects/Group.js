import DayPicker from "./DayPicker";
import React from "react";

const Group = ({ id, title, description, location, recurrence}) => {
	return (
		<div className="seance">
			<div className="seance__title">{`${title}`}</div>
			<div className="seance__description">{`${description}`}</div>
			<div className="seance__days">
				<DayPicker days={recurrence} id={id} blocked />
			</div>
		</div>
	);
};

export default Group;
