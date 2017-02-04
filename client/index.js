import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Main from './components/Main.jsx';
import Index from './components/Index.jsx';

render(
  <Router history={browserHistory} >
    <Route path="/" component={Main}>
      <IndexRoute component={Index} />
    </Route>
  </Router>,
  document.getElementById('app')
);