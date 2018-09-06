import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import HomePage from './containers/HomePage';
import AdminPage from './containers/AdminPage';
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/admin">Manager</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={HomePage}/>
          <Route path="/admin" component={AdminPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
