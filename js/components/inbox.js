import React from 'react';
import Data from './data';
import {Link} from 'react-router';

export default function Inbox(props) {

  const keys = Object.keys(Data.inbox);
 
  const inboxEmails = keys.map((key, index) => {
  	return (
  		<li key={Data.inbox[key].id}>
  		    <Link to={/inbox/ + Data.inbox[key].id}><h3>{Data.inbox[key].title}</h3></Link>
  		</li>
  	);
  });

  return (
    <div>
    	<ul>
    		{inboxEmails}
    	</ul>	
    </div>
  );
}
