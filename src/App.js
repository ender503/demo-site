import React from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';

import HomePage from './containers/HomePage';
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Container>
            <Route exact path="/" component={HomePage} />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
