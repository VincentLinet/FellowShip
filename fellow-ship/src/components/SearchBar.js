import React, { useState, useEffect } from "react";

import Input from "./common/Input";

const SearchBar = ({ placeholder = "Rechercher...", data = [], search, searchResult, ...props }) => {
	const [result, setResult] = useState({});
	const [value, setValue] = useState("");

	useEffect(() => {
		const fetchResult = async () => {
			const result = getResult();
			setResult(result);
		};

		if (value.length >= 3) fetchResult();
		if (value.length == 0) setResult([]);
	}, [value]);

	const getResult = () => value.length < 3 ? [] : search(value);

	const select = (name) => () => searchResult(name);

	const onChange = (value) => setValue(value);

	const renderList = (key) => {
		return (
			result[key].map(({name}, index) => (
				<div key={index} onClick={select(name)}>
					<div className="el_list">{name}</div>
				</div>
			))
		)
	};

	const renderResult = () => {
		return (
			<div className="list">
				{Object.keys(result).map((key, index) => (
					result[key].length > 0 ? <div key={index}>
						<h2 className="el_list_title">{key}</h2>
						{ renderList(key) }
					</div> : null
				))}
			</div>
		);
	};

	return (
		<div>
			<Input changed={onChange} placeholder={placeholder} />
			{Object.keys(result).length > 0 ? renderResult() : null}
		</div>
	);
};

export default SearchBar;
