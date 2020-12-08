import Group from "../objects/Group";
import React from "react";

const SideBar = ({ groups, selectGroup }) => {
	const renderGroup = (groups) => {
		return groups.map((seance) => <Group key={seance.id} selectGroup={selectGroup} {...seance} />);
	};

	return(
		<div className="sidebar">{renderGroup(groups)}</div>
	);
};

export default SideBar;
