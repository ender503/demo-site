import { Connect } from '@tangleid/connect';

const provider = process.env.REACT_APP_CONNECT_PROVIDER;
const tangleID = new Connect({
  provider
});

export default tangleID;
