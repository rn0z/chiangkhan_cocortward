import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './scenes/Dashboard'
import Preferences from './scenes/Preferences'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route exact path='/preferences'>
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);