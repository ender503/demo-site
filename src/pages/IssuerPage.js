import React from 'react';
import { Button } from 'reactstrap';

import ClaimModal from '../components/ClaimModal';

export default class IssuerPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
    this.onModalToggle = this.onModalToggle.bind(this);
  }

  onModalToggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <h3 className="section-title">Issue Certification</h3>
        <p>Hello {this.props.credentials.name}, welcome to this course. </p>
        <div className="section-button">
          <Button
            color="info"
            onClick={this.onModalToggle}
            size="lg font-weight-light"
          >
            Issue certification
          </Button>
        </div>

        <ClaimModal
          userName={this.props.credentials.name}
          isOpen={this.state.isOpen}
          isRoading={this.props.isSubmitting}
          submit={this.props.submit}
          toggle={this.onModalToggle}
        />
      </div>
    );
  }
}
