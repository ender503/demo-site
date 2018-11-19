import React from 'react';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from './utilities/store';
import Header from './components/Header';
import HomePage from './pages/HomePage';

import Users from './pages/Users';
import Activity from './pages/Activity';

import ActivityModal from './components/ActivityModal';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Container>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/users" component={Users} />
            <Route path="/activity" component={Activity} />
          </Container>

          <Route exact path="/activity/new" component={ActivityModal} />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
