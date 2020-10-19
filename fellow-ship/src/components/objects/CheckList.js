import React from "react";

import { serialize } from "../../services/format";

const CheckList = ({ list }) => {
  return (
    <div className="checklist">
      {list.map((item) => {
        return (
          <div key={`${serialize(item)}`} className="checklist__item">
            <div className="checklist__item__box" />
            <div className="checklist__item__text">{item}</div>
          </div>
        );
      })}
    </div>
  );
};

export default CheckList;
