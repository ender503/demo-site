import { UPDATE_CLAIM, UPDATE_TRANSACTION, SET_SUBMITTING } from './types';

export { connectIdentity } from './connectIdentity';

export const updateClaim = claim => {
  return {
    type: UPDATE_CLAIM,
    claim
  };
};

export const updateTransaction = transactions => {
  let hash = null;
  if (transactions.length > 0) {
    hash = transactions[0].hash;
  }
  return {
    type: UPDATE_TRANSACTION,
    transaction: hash
  };
};

export const setSubmitting = submitting => {
  return {
    type: SET_SUBMITTING,
    submitting
  };
};