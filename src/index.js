import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LandingPage from './LandingPage'
import { createStore } from "redux";
import { Provider } from 'react-redux';
import Reducers from './Reducers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const store = createStore(Reducers)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path={"/"} component={LandingPage}/>
        <Route exact path={"/game"} component={App}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

