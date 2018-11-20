import { combineReducers } from 'redux';
import {
  CONNECT_IDENTITY_SUCCESS,
  REQUEST_CLAIM_STARTED,
  REQUEST_CLAIM_SUCCESS,
  REQUEST_CLAIM_FAILURE
} from '../actions/types';

export const credentials = (state = null, action) => {
  switch (action.type) {
    case CONNECT_IDENTITY_SUCCESS:
      return {
        ...state,
        ...action.payload.credentials
      };
    default:
      return state;
  }
};

export const claim = (state = null, action) => {
  switch (action.type) {
    case REQUEST_CLAIM_SUCCESS:
      return {
        ...state,
        ...action.payload.claim
      };
    default:
      return state;
  }
};

export const transaction = (state = null, action) => {
  switch (action.type) {
    case REQUEST_CLAIM_SUCCESS:
      const transactions = action.payload.transaction;
      let hash = null;
      if (transactions.length > 0) {
        hash = transactions[0].hash;
      }
      return hash;
    default:
      return state;
  }
};

export const isSubmitting = (state = false, action) => {
  switch (action.type) {
    case REQUEST_CLAIM_STARTED:
      return true;
    case REQUEST_CLAIM_SUCCESS:
    case REQUEST_CLAIM_FAILURE:
      return false;
    default:
      return state;
  }
};

const reducers = combineReducers({
  credentials,
  claim,
  transaction,
  isSubmitting
});

export default reducers;
