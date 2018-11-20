import React from 'react';
import { connect } from 'react-redux';
import { connectIdentity, requestClaim } from '../actions';

import ConnectPage from '../pages/ConnectPage';
import IssuerPage from '../pages/IssuerPage';
import ClaimPage from '../pages/ClaimPage';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.onClaimSubmit = this.onClaimSubmit.bind(this);
  }

  onClaimSubmit(formData) {
    const claimData = {
      ...formData,
      userDid: this.props.credentials.did,
      userToken: this.props.credentials.pushToken
    };

    this.props.requestClaim(claimData);
  }

  render() {
    return (
      <div className="main-container">
        <div className="text-center mt-4">
          {!this.props.credentials ? (
            <ConnectPage connect={this.props.onConnect} />
          ) : null}

          {!this.props.claim && this.props.credentials ? (
            <IssuerPage
              credentials={this.props.credentials}
              isSubmitting={this.props.isSubmitting}
              submit={this.onClaimSubmit}
            />
          ) : null}

          {this.props.credentials && this.props.claim ? (
            <ClaimPage
              claim={this.props.claim}
              transaction={this.props.transaction}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    onConnect: () => {
      dispatch(connectIdentity());
    },
    requestClaim: claimData => {
      dispatch(requestClaim(claimData));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
