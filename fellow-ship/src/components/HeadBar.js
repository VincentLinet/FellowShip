import React from "react";

import FellowShip from "./logo/FellowShip";

const HeadBar = ({ ...props }) => (
  <div className="headbar">
    <div className="title">
      <div className="logo">
        <FellowShip height="16px" width="16px" />
      </div>
      <div className="name">FellowShip</div>
    </div>
  </div>
);

export default HeadBar;
