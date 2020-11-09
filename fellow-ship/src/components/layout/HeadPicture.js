import React from "react";

import Input from "./Input";
import SearchBar from "./SearchBar_";
import { SearchIcon } from "./Icons";

const HeadBar = ({ ...props }) => (
  <div className="head-picture">
    <div className="head-picture__title">All around the World</div>
    <div className="head-picture__subtitle">
      with <b>YOU</b>
    </div>
    {/* <div className="head-picture__search">
      <SearchBar placeholder="Country, Point of Interest, ..." />
      <div className="head-picture__search__button">
        <SearchIcon />
      </div>
    </div> */}
  </div>
);

export default HeadBar;
