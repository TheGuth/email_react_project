import React from 'react';
import Data from './data';


export default function Email(props) {
	const inboxData = Data.inbox[props.params.emailId];
	const spamData = Data.spam[props.params.emailId];
	const path = props.location.pathname;
	console.log(path);
	if (path.includes('inbox')) {
		return (
			<div>
				<h3>{inboxData.tittle}</h3>
				<p>{inboxData.from}</p>
				<p>{inboxData.to}</p>
				<p>{inboxData.content}</p>
		</div>
		)
	} else if (path.includes('spam')){
		return (
			<div>
				<h3>{spamData.tittle}</h3>
				<p>{spamData.from}</p>
				<p>{spamData.to}</p>
				<p>{spamData.content}</p>
			</div>
		)
	}

}