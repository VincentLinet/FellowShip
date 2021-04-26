import React, { useEffect, useState } from "react";
import classnames from "classnames";

import { serialize } from "../../services/format";

const CheckList = ({ list, onChange }) => {
  const toggle = (item) => () => {
    const altered = list.map(({ name, selected }) => ({ name, selected: name === item ? !selected : selected }));
    onChange(altered);
  };

  return (
    <div className="checklist">
      {list.map(({ name, selected }) => {
        const classes = classnames("checklist__item", { "checklist__item--selected": selected });
        return (
          <div key={`${serialize(name)}`} className={classes} onClick={toggle(name)}>
            <div className="checklist__item__box" />
            <div className="checklist__item__text">{name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default CheckList;
