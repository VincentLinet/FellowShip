import DayPicker from "./DayPicker";
import React from "react";

const Group = ({ id, title, description, location, recurrence, selectGroup}) => {

	const selected = () => selectGroup(id);

	return (
		<div className="group" onClick={selected}>
			<div className="group__title">{`${title}`}</div>
			<div className="group__description">{`${description}`}</div>
			<div className="group__days">
				<DayPicker days={recurrence} id={id} blocked />
			</div>
		</div>
	);
};

export default Group;
