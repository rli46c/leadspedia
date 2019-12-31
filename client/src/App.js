import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Provider} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import store from './store';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Login from './components/auth/Login';

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="container-fluid">
          <div className="container">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
