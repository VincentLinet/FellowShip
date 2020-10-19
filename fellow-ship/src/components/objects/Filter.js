import React from "react";

const Filter = ({ title, children }) => {
  return (
    <div className="filter">
      <div className="filter__title">{title}</div>
      <div className="filter__content">{children}</div>
    </div>
  );
};

export default Filter;
