import React from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';

import HomePage from './containers/HomePage';
import AdminPage from './containers/AdminPage';
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Container>
            <Route exact path="/" component={HomePage} />
            <Route path="/admin" component={AdminPage} />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
