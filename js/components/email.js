import React from 'react';
import Data from './data';


export default function Email(props) {
	const inboxData = Data[props.params.mailboxName][props.params.emailId];
		return (
			<div>
				<h3>{inboxData.tittle}</h3>
				<p>{inboxData.from}</p>
				<p>{inboxData.to}</p>
				<p>{inboxData.content}</p>
			</div>
		)
}