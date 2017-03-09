import React from 'react';
import Data from './data';

export default function Inbox(props) {

  const keys = Object.keys(Data.inbox);
 
  const inboxEmails = keys.map((key, index) => {
  	return (
  		<li key={Data.inbox[key].id}>
  		   <h3>{Data.inbox[key].title}</h3>
  		   <p>{Data.inbox[key].from}</p>
  		   <p>{Data.inbox[key].to}</p>
  		   <p>{Data.inbox[key].content}</p>
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
