import React, { Component } from 'react';
import './App.css';
import Profiles from './containers/profiles'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


class App extends Component {
  render() {
    return (

      <Router>
        <div className="App">
          <header className="App-header">
            <div className="header-items">
              <div className="App-title">Yo !! Profiling</div>
            </div>
          </header>
          <Switch>
            <Route exact path="/" render={() => (
              <Redirect to="/profiles/" />
            )} />
            <Route exact path='/profiles/' component={Profiles} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
