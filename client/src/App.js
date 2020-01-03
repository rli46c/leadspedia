import React from 'react';
// import logo from './logo.svg';
import './App.css';

import {Provider} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import store from './store';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dash';

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
              <Route exact path='/register' component={Register} />
              <Route exact path='/dash' component={Dashboard} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
