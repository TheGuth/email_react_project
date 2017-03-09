require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Home from './components/home';
import Inbox from './components/inbox';
import Spam from './components/spam';

const routes = (
  <Router history={hashHistory}>
      <Route path="/" component={Home}>
          <Route path="inbox" component={Inbox} />
          <Route path="spam" component={Spam} />
      </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(routes, document.getElementById('app'));
});
