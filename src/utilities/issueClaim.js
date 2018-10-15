const provider = process.env.REACT_APP_ISSUER_PROVIDER;

/**
 * Send verifiable claim
 *
 * @param {Object} params
 * @param {string} params.userDid
 * @param {string} params.userName
 * @param {string} params.userToken
 * @param {string} params.claimName
 * @param {string} params.issueAt
 * @param {string} params.expiresAt
 */
const issueClaim = params =>
  fetch(`${provider}/claim`, {
    body: JSON.stringify(params),
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
    mode: 'cors'
  }).then(response => response.json());

export default issueClaim;
