import React from "react";

import classnames from "classnames";

const Filter = ({ title, children, padded }) => {
  return (
    <div className={classnames("filter", { filter__padded: padded })}>
      {!!title && <div className="filter__title">{title}</div>}
      <div className="filter__content">{children}</div>
    </div>
  );
};

export default Filter;
