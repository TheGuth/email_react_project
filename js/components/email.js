import React from 'react';

export default function Email(props) {
	return (
		<div>
			<h3>{props.inbox.tittle}</h3>
			<p>{props.inbox.from}</p>
			<p>{props.inbox.to}</p>
			<p>{props.inbox.content}</p>
		</div>
	);
}