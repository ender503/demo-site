import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { connectIdentity } from '../actions';

const ConnectButton = props => {
  return (
    <Button color="info" onClick={props.connect} size="lg font-weight-light">
      Connect with TangleID
    </Button>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    connect: () => {
      dispatch(connectIdentity());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ConnectButton);
