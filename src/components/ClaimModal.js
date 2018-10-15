import React from 'react';
import ReactLoading from 'react-loading';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';

import { format, addYears } from 'date-fns';

class ClaimModal extends React.Component {
  constructor(props) {
    super(props);

    const issueAt = format(new Date(), 'YYYY-MM-DD');
    const expiresAt = format(addYears(new Date(), 5), 'YYYY-MM-DD');

    this.state = {
      claim: {
        userName: props.userName,
        issueAt,
        expiresAt
      }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      claim: {
        ...this.state.claim,
        [name]: value
      }
    });
  }

  render() {
    const onSubmit = event => {
      event.preventDefault();
      this.props.submit(this.state.claim);
    };
    return (
      <div>
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
          <Form onSubmit={onSubmit}>
            <ModalHeader toggle={this.props.toggle}>
              Issue Certification
            </ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label>User Name</Label>
                <Input
                  name="userName"
                  type="text"
                  readOnly
                  value={this.state.claim.userName}
                  onChange={this.handleInputChange}
                />
              </FormGroup>

              <FormGroup>
                <Label>Course Name</Label>
                <Input
                  name="claimName"
                  type="text"
                  onChange={this.handleInputChange}
                />
              </FormGroup>

              <FormGroup>
                <Label>Certificated At</Label>
                <Input
                  name="issueAt"
                  type="text"
                  value={this.state.claim.issueAt}
                  onChange={this.handleInputChange}
                />
              </FormGroup>

              <FormGroup>
                <Label>Expired At</Label>
                <Input
                  name="expiresAt"
                  type="text"
                  value={this.state.claim.expiresAt}
                  onChange={this.handleInputChange}
                />
              </FormGroup>

              <FormGroup>
                <Label>Issuer</Label>
                <Input name="certificationProvider" type="select">
                  <option>National Cheng Kung University</option>
                </Input>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              {this.props.isRoading ? (
                <ReactLoading
                  type="spinningBubbles"
                  color="#000000"
                  width={48}
                  height={48}
                />
              ) : (
                <Button color="info" type="submit">
                  Submit
                </Button>
              )}{' '}
              <Button color="secondary" onClick={this.props.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default ClaimModal;
