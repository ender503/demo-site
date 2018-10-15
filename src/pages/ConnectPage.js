import React from 'react';
import { Button } from 'reactstrap';

export default class ConnectPage extends React.Component {
  render() {
    return (
      <div>
        <h3 className="section-title">TangleID Demo</h3>
        <p>Identity and transaction infrastructure for IOTA</p>
        <div className="section-button">
          <Button
            color="info"
            onClick={this.props.connect}
            size="lg font-weight-light"
          >
            Connect with TangleID
          </Button>
        </div>
      </div>
    );
  }
}
