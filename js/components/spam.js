import React from 'react';
import Data from './data';
import {Link} from 'react-router';

export default function Spam(props) {
  console.log(Data);

  const keys = Object.keys(Data.spam);
 
  const spamEmails = keys.map((key, index) => {
  		console.log(Data.spam[key].title);
  	return (
  		<li key={Data.spam[key].id}>
  		   <Link to={/spam/ + Data.spam[key].id}><h3>{Data.spam[key].title}</h3></Link>
  		</li>
  	);
  });

  return (
    <div>
    	<ul>
    		{spamEmails}
    	</ul>	
    </div>
  );
}
