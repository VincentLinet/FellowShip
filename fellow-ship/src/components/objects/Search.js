import React from "react";

import SearchIcon from "../icons/SearchIcon";

const Search = ({ placeholders = [] }) => {
  const renderInputs = () =>
    placeholders.map((placeholder, index) => (
      <input key={`search-input${index}`} className="search__input" placeholder={`${placeholder}...`} />
    ));

  return (
    <div className="search">
      <div className="search__logo">
        <SearchIcon />
      </div>
      {renderInputs()}
    </div>
  );
};

export default Search;
