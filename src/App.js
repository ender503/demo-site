import React from 'react';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from './utilities/store';
import Header from './components/Header';
import HomePage from './pages/HomePage';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Container>
              <Route exact path="/" component={HomePage} />
            </Container>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
