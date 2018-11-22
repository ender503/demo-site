import React from 'react';
import { connect } from 'react-redux';

import ConnectPage from '../pages/ConnectPage';
import ClaimRequestPage from '../pages/ClaimRequestPage';
import ClaimPage from '../pages/ClaimPage';

class HomePage extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="text-center mt-4">
          {!this.props.credentials ? <ConnectPage /> : null}

          {!this.props.claim && this.props.credentials ? (
            <ClaimRequestPage />
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

export default connect(mapStateToProps)(HomePage);
