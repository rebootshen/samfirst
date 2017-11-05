import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './views/home';
import Contact from './views/contact';
import ProductList from './Product/ProductList';

export default class App extends Component {
  render() {
    return (
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
            <li>
              <Link to={ '/product' }>ProductList</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/contact' component={ Contact } />
            <Route path='/product' component={ ProductList } />
          </Switch>
        </div>
      </Router>

    );
  }
}
