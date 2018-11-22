import React from 'react';
import ConnectButton from '../components/ConnectButton';

export default class ConnectPage extends React.Component {
  render() {
    return (
      <div>
        <h3 className="section-title">TangleID Demo</h3>
        <p>Identity and transaction infrastructure for IOTA</p>
        <div className="section-button">
          <ConnectButton />
        </div>
      </div>
    );
  }
}
