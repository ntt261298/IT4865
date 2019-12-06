import React from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import { loadToken } from '../utils/localStorage';

export class App extends React.Component {
  state = {
    loggedIn: loadToken()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path='/login' exact component={Login} />
            {/* Just for testing UI */}
            <Route path='/home' exact component={Home} />
            {/* <Route path='/home' exact render={() => (!this.props.loggedIn ? <Redirect to='/login' /> : <Home />)} /> */}
            <Redirect to='/home' />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
