import Seance from "../objects/Seance";
import React from "react";

const renderSeance = (seances) => {
	return seances.map((seance) => <Seance key={seance.id} {...seance} />);
};

const SideBar = ({ seance }) => {
	return <div className="sidebar">{renderSeance(seance)}</div>;
};

export default SideBar;
