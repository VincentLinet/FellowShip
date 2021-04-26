import React, { useState } from "react";

const types = ["text", "password"];

const Input = ({ changed, placeholder, pressed, hidden, reset, ...props }) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");

  const inChanged = (e) => {
    changed && changed(e.target.value);
    setValue(e.target.value);
  };
  const keyPressed = (e) => {
    pressed(e);
    if (e.key === "Enter" && reset) setValue("");
  };
  const focused = (e) => setFocus(true);
  const blured = (e) => setFocus(false);

  return (
    <input
      value={value}
      onChange={inChanged}
      onFocus={focused}
      onBlur={blured}
      placeholder={placeholder}
      type={types[+hidden]}
      onKeyPress={keyPressed}
      {...props}
    />
  );
};

export default Input;
