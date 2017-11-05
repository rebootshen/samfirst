import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/global/Menu';
import App from './components/app';

import routes from './routes';


require('./css/base.scss');
require('./css/home.scss');
require('./css/contact.scss');
//export default class App extends React.Component {}

ReactDOM.render(
  ////React.createElement(Menu),
  //<Menu/>,
  //document.getElementById('app')
  //<Router history={ browserHistory } routes={ routes } />,
  (<BrowserRouter>
    <App />
  </BrowserRouter>),
  document.getElementById('app')
);
