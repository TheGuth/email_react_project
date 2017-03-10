import React from 'react';
import Data from './data';
import {Link} from 'react-router';

export default function Spam(props) {

  const keys = Object.keys(Data[props.params.mailboxName]);
 
  const spamEmails = keys.map((key, index) => {
  	return (
  		<li key={Data.spam[key].id}>
  		   <Link to={/spam/ + Data[props.params.mailboxName][key].id}><h3>{Data[props.params.mailboxName][key].title}</h3></Link>
  		</li>
  	);
  });

  return (
    <div>
    	<ul>
    		{spamEmails}
    	</ul>
    	{props.children}	
    </div>
  );
}
