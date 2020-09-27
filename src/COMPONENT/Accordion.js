import React from 'react';

const Accordion = ({ items }) => {
	const rerendereItems = items.map((item) => {
		return (
			<React.Fragment key={item}>
				<div className="title active">
					<i className="drop-down">{item.title}</i>
				</div>
				<div className="content active">{item.content}</div>
			</React.Fragment>
		);
	});
	return <div className="ui styled accordion"> {rerendereItems}</div>;
};
export default Accordion;
