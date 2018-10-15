import React from 'react';

import ConnectPage from '../pages/ConnectPage';
import IssuerPage from '../pages/IssuerPage';
import ClaimPage from '../pages/ClaimPage';

import tangleidConnect from '../utilities/connectSetup';
import issueClaim from '../utilities/issueClaim';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      credentials: null,
      claim: null,
      transaction: null,
      isSubmiting: false
    };

    this.onConnect = this.onConnect.bind(this);
    this.onClaimSubmit = this.onClaimSubmit.bind(this);
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

  onClaimSubmit(formData) {
    this.setState({ isSubmiting: true });
    const claimData = {
      ...formData,
      userDid: this.state.credentials.did,
      userToken: this.state.credentials.pushToken
    };

    issueClaim(claimData)
      .then(response => {
        let txnHash = null;
        if (response.transaction.length > 0) {
          txnHash = response.transaction[0].hash;
        }

        this.setState({
          isSubmiting: false,
          claim: response.claim,
          transaction: txnHash
        });
      })
      .catch(error => {
        this.setState({ isSubmiting: false });
        console.error(error);
      });
  }

  render() {
    return (
      <div className="main-container">
        <div className="text-center mt-4">
          {!this.state.credentials ? (
            <ConnectPage connect={this.onConnect} />
          ) : null}

          {!this.state.claim && this.state.credentials ? (
            <IssuerPage
              credentials={this.state.credentials}
              isSubmiting={this.state.isSubmiting}
              submit={this.onClaimSubmit}
            />
          ) : null}

          {this.state.credentials && this.state.claim ? (
            <ClaimPage
              claim={this.state.claim}
              transaction={this.state.transaction}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default HomePage;
