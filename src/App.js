import React from 'react';
import Accordion from './COMPONENT/Accordion';
import Search from './COMPONENT/Search';

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
class App extends React.Component {
	render() {
		return (
			<div>
				<Search />
			</div>
		);
	}
}

export default App;
