import tangleidConnect from '../utilities/connectSetup';

import {
  CONNECT_IDENTITY_SUCCESS,
  CONNECT_IDENTITY_STARTED,
  CONNECT_IDENTITY_FAILURE
} from './types';

const connectIdentitySuccess = credentials => ({
  type: CONNECT_IDENTITY_SUCCESS,
  payload: {
    credentials
  }
});

const connectIdentityStarted = () => ({
  type: CONNECT_IDENTITY_STARTED
});

const connectIdentityFailure = error => ({
  type: CONNECT_IDENTITY_FAILURE,
  payload: {
    error
  }
});

export const connectIdentity = () => {
  return dispatch => {
    dispatch(connectIdentityStarted());

    tangleidConnect
      .requestCredentials()
      .then(credentials => {
        dispatch(connectIdentitySuccess(credentials));
      })
      .catch(error => {
        dispatch(connectIdentityFailure(error));
      });
  };
};
