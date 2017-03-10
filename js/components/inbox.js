import React from 'react';
import Data from './data';
import {Link} from 'react-router';

export default function Inbox(props) {

  const keys = Object.keys(Data[props.params.mailboxName]);
 
  const inboxEmails = keys.map((key, index) => {
  	return (
  		<li key={Data[props.params.mailboxName][key].id}>
  		    <Link to={/inbox/ + Data[props.params.mailboxName][key].id}><h3>{Data[props.params.mailboxName][key].title}</h3></Link>
  		</li>
  	);
  });

  return (
    <div>
    	<ul>
    		{inboxEmails}
    	</ul>
    	{props.children}
    </div>
  );
}
