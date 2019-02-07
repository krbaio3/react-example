import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './app/app';

import './styles.scss';

ReactDOM.render(
  // <Router>
  <App/>
  // </Router>
  ,
  document.getElementById('root')
);
 