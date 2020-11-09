import React, { useEffect, useState, cloneElement, forwardRef } from "react";
import classnames from "classnames";

const PopUp = forwardRef(({ children, className, componentProps = {}, show = false, ...props }, ref) => {
  const [rendered, setRendered] = useState(false);
  const classes = classnames("popup", { [`${className}`]: className });

  useEffect(() => {
    setRendered(true);
  }, []);

  const renderComponent = () => (
    <div ref={ref} className={classes}>
      {cloneElement(children, componentProps)}
    </div>
  );

  return show && rendered ? renderComponent() : null;
});

export default PopUp;
