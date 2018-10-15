import React from 'react';

import ConnectPage from '../pages/ConnectPage';

import tangleidConnect from '../utilities/connectSetup';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      credentials: null
    };

    this.onConnect = this.onConnect.bind(this);
  }

  onConnect() {
    tangleidConnect
      .requestCredentials()
      .then(credentials => {
        console.log('Credentials', credentials);
        this.setState({ credentials });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="main-container">
        <div className="text-center mt-4">
          {!this.state.credentials ? (
            <ConnectPage connect={this.onConnect} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default HomePage;
