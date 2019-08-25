import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';

import App from './App';
import store from './store';

import './styles.css';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div className="app">
    <Provider store={store}>
      <Router>
        <Route exact path="/react-task-demo" component={App} />
        <Redirect from="/" to="/react-task-demo" />
      </Router>
    </Provider>
  </div>, rootElement);
