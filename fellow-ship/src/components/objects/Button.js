import React from "react";
import classnames from "classnames";

const KINDS = ["primary", "secondary", "tertiary", "delete", "cancel"];

const VARIANTS = ["filled", "empty"];

const Button = ({ children, kind, variant, action, ...props }) => {
  const validKind = KINDS.find((current) => kind === current) ? kind : "primary";
  const validVariant = VARIANTS.find((current) => variant === current) ? variant : "filled";
  return (
    <div className={classnames("button", validKind, validVariant)} onClick={action}>
      <div>{children}</div>
    </div>
  );
};

export default Button;
