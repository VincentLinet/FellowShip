import Group from "../objects/Group";
import React from "react";

const SideBar = ({ groups, selectGroup }) => {
  const renderSeance = (seance) => <Group key={seance.id} selectGroup={selectGroup} {...seance} />;
  const renderGroup = (groups) => groups.map(renderSeance);

  return (
    <div className="sidebar">
      <div className="sidebar__inner">{renderGroup(groups)}</div>
    </div>
  );
};

export default SideBar;
