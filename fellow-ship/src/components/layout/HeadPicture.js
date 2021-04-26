import React from "react";

import Search from "../objects/Search";

const HeadPicture = ({ ...props }) => (
  <div className="head-picture">
    <div className="head-picture__title">Find your Adventure</div>
    <div className="head-picture__subtitle">Become who you want, anywhere you are</div>
    <div className="head-picture__search">
      <Search placeholders={["D&D", "Lyon"]} />
    </div>
  </div>
);

export default HeadPicture;
