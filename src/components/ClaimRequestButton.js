import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import ClaimModal from '../components/ClaimModal';

import { requestClaim } from '../actions';

const ClaimRequestButton = props => {
  const [isModalVisiable, setModalVisiable] = useState(false);

  const toggleModalVisiable = () => {
    setModalVisiable(!isModalVisiable);
  };

  const onClaimSubmit = formData => {
    const claimData = {
      ...formData,
      userDid: props.credentials.did,
      userToken: props.credentials.pushToken
    };

    props.requestClaim(claimData);
  };

  return (
    <div>
      <Button
        color="info"
        onClick={toggleModalVisiable}
        size="lg font-weight-light"
      >
        Issue certification
      </Button>
      <ClaimModal
        userName={props.credentials.name}
        isOpen={isModalVisiable}
        isRoading={props.isSubmitting}
        submit={onClaimSubmit}
        toggle={toggleModalVisiable}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    requestClaim: claimData => {
      dispatch(requestClaim(claimData));
    }
  };
};

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClaimRequestButton);
