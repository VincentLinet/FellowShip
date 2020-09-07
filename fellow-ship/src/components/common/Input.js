import React, { useState } from "react";

const types = ["text", "password"];

const Input = ({ changed, placeholder, hidden = false, ...props }) => {
	const [focus, setFocus] = useState(false);
	const [value, setValue] = useState("");

	const inChanged = (e) => {
		changed && changed(e.target.value);
		setValue(e.target.value);
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
			{...props}
		/>
	);
};

export default Input;
