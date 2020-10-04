import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
	const [ open, setopen ] = useState(false);
	const ref = useRef();

	useEffect(() => {
		const onBodyClick = (event) => {
			if (ref.current.contains(event.target)) {
				return;
			}
			setopen(false);
		};
		document.body.addEventListener('click', onBodyClick);

		return () => {
			document.body.removeEventListener('click', onBodyClick);
		};
	}, []);
	if (options.value === selected.value) {
		return null;
	}
	const rerenderedOption = options.map((option) => {
		return (
			<div onClick={() => onSelectedChange(option)} key={option.value} className="item">
				{option.label}
			</div>
		);
	});

	return (
		<div ref={ref} className="ui form">
			<div className="field">
				<label className="">search a color</label>
				<div
					className={`ui selection dropdown ${open ? 'visible active' : ' '}`}
					onClick={() => setopen(!open)}
				>
					<i className="dropdown icon " />
					<div className="text">{selected.label}</div>
					<div className={`menu ${open ? 'visible transition' : ''}`}> {rerenderedOption}</div>
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
