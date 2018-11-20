import { combineReducers } from 'redux';
import {
  CONNECT_IDENTITY_SUCCESS,
  UPDATE_CLAIM,
  UPDATE_TRANSACTION,
  SET_SUBMITTING
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
    case UPDATE_CLAIM:
      return {
        ...state,
        ...action.claim
      };
    default:
      return state;
  }
};

export const transaction = (state = null, action) => {
  switch (action.type) {
    case UPDATE_TRANSACTION:
      return action.transaction;
    default:
      return state;
  }
};

export const isSubmitting = (state = false, action) => {
  switch (action.type) {
    case SET_SUBMITTING:
      return action.submitting;
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
