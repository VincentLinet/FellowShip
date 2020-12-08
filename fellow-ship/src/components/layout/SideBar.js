import Group from "../objects/Group";
import React from "react";

const renderGroup = (groups) => {
	return groups.map((seance) => <Group key={seance.id} {...seance} />);
};

const SideBar = ({ groups }) => {
	return <div className="sidebar">{renderGroup(groups)}</div>;
};

export default SideBar;
