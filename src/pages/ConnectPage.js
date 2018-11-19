import React from 'react';
import ConnectButton from '../components/ConnectButton';

const ConnectPage = () => {
  return (
    <div>
      <h3 className="section-title">I-PATH 校園學習衛星站</h3>
      <p>Identity and transaction infrastructure for IOTA</p>
      <div className="section-button">
        <ConnectButton />
      </div>
    </div>
  );
};

export default ConnectPage;
