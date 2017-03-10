require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Home from './components/home';
import Inbox from './components/inbox';
import Spam from './components/spam';
import Email from './components/email';

const routes = (
  <Router history={hashHistory}>
      <Route path="/" component={Home}>
          <Route path=":mailboxName" component={Inbox}>
          	<Route path=":emailId" component={Email}/>
          </Route>
      </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(routes, document.getElementById('app'));
});
