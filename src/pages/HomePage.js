import React from 'react';
import { connect } from 'react-redux';

import ConnectPage from '../pages/ConnectPage';
import ClaimRequestPage from '../pages/ClaimRequestPage';
import ClaimPage from '../pages/ClaimPage';

const HomePage = props => {
  return (
    <div className="main-container">
      <div className="text-center mt-4">
        {!props.credentials ? <ConnectPage /> : null}

        {!props.claim && props.credentials ? <ClaimRequestPage /> : null}

        {props.credentials && props.claim ? (
          <ClaimPage claim={props.claim} transaction={props.transaction} />
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(HomePage);
