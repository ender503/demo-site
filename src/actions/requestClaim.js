import issueClaim from '../utilities/issueClaim';

import {
  REQUEST_CLAIM_SUCCESS,
  REQUEST_CLAIM_STARTED,
  REQUEST_CLAIM_FAILURE
} from './types';

const requestClaimSuccess = response => ({
  type: REQUEST_CLAIM_SUCCESS,
  payload: {
    ...response
  }
});

const requestClaimStarted = () => ({
  type: REQUEST_CLAIM_STARTED
});

const requestClaimFailure = error => ({
  type: REQUEST_CLAIM_FAILURE,
  payload: {
    error
  }
});

export const requestClaim = claimData => {
  return dispatch => {
    dispatch(requestClaimStarted());

    issueClaim(claimData)
      .then(response => {
        dispatch(requestClaimSuccess(response));
      })
      .catch(error => {
        dispatch(requestClaimFailure(error));
      });
  };
};
