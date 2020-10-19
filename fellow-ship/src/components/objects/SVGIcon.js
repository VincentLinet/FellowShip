import React from "react";

const SVGIcon = ({ children, ...props }) => (
  <svg width="24px" height="24px" viewBox="0 0 24 24" {...props}>
    {children}
  </svg>
);

export default SVGIcon;
