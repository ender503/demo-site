import React from 'react';
import { Container } from 'reactstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import SiteNavbar from "./components/SiteNavbar";

import HomePage from './containers/HomePage';
import AdminPage from './containers/AdminPage';
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <SiteNavbar/>
          <Container>
            <Route exact path="/" component={HomePage}/>
            <Route path="/admin" component={AdminPage}/>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
