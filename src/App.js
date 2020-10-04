import React, { useState } from 'react';
import Accordion from './COMPONENT/Accordion';
import Search from './COMPONENT/Search';
import Dropdown from './COMPONENT/Dropdown';

const items = [
	{
		title: 'QUEST CE QUE REACT',
		content: 'React est un front end framework'
	},
	{
		title: 'pourquoi utilise React',
		content: 'REact est le framework ideal ppour les developppeur'
	},
	{
		title: 'comment utilise react',
		content: 'on utilise react pouur cree des composant'
	}
];

const options = [
	{
		label: ' the color is red ',
		value: 'red'
	},
	{
		label: 'the color is Green ',
		value: 'blue'
	},
	{
		label: ' the color is blue ',
		value: 'blue'
	}
];
export default () => {
	const [ selected, setSelected ] = useState(options[0]);
	const [ showDropdown, setShowDropdown ] = useState(true);
	return (
		<div>
			<button onClick={() => setShowDropdown(!showDropdown)}> toggle dropdown</button>
			{showDropdown ? <Dropdown selected={selected} options={options} onSelectedChange={setSelected} /> : null}
		</div>
	);
};
