import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Game';
import App from './App';
import Rule from './Rule';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import Reducers from './Reducers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const store = createStore(Reducers)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path={"/"} component={App}/>
        <Route exact path={"/game"} component={Game}/>
        <Route exact path={"/rule"} component={Rule}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

