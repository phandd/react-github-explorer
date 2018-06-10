import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'font-awesome/css/font-awesome.css';
import {  BrowserRouter as Router, Route } from 'react-router-dom'
import { ROUTES } from './utils/routes';
import registerServiceWorker from './registerServiceWorker';
import App from './components/containers/App'

ReactDOM.render(
  <Router>
    <Route path={ROUTES.HOME_PATH} component={App}/>
  </Router>
  , document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
registerServiceWorker();
