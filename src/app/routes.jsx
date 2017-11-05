import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import App from './components/app';
import Home from './components/views/home';
import Contact from './components/views/contact';

export default (
  <Router>
    <div>
      <h2>Welcome to React Router Tutorial</h2>
      <ul>
        <li>
          <Link to={ '/' }>Home</Link>
        </li>
        <li>
          <Link to={ '/contact' }>Contact</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/contact' component={ Contact } />
      </Switch>
    </div>
  </Router>
);
