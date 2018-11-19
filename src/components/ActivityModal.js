import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ActivityModal = props => {
  const toggle = () => {
    props.history.goBack();
  };

  return (
    <Modal isOpen={true} toggle={toggle} centered={true}>
      <ModalHeader toggle={toggle}>Activity Form</ModalHeader>

      <ModalBody>
        <form class="needs-validation" novalidate="">
          <div class="mb-3">
            <label for="activityName">Activity Name</label>
            <input
              type="text"
              class="form-control"
              id="activityName"
              placeholder=""
              value=""
              required=""
            />
            <div class="invalid-feedback">Valid activity name is required.</div>
          </div>

          {/* TODO: Start End Time */}

          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="country">Start From</label>
              <select
                class="custom-select d-block w-100"
                id="country"
                required=""
              >
                <option value="">Choose...</option>
                <option>United States</option>
              </select>
              <div class="invalid-feedback">Please select a valid country.</div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="state">End to</label>
              <select
                class="custom-select d-block w-100"
                id="state"
                required=""
              >
                <option value="">Choose...</option>
                <option>California</option>
              </select>
              <div class="invalid-feedback">Please provide a valid state.</div>
            </div>
          </div>

          <div class="mb-3">
            <label for="location">Location</label>
            <input
              type="text"
              class="form-control"
              id="location"
              placeholder=""
              value=""
              required=""
            />
            <div class="invalid-feedback">Valid location is required.</div>
          </div>

          <div class="mb-3">
            <label for="type">Type</label>
            <select class="custom-select d-block w-100" id="type" required="">
              <option value="">Choose...</option>
              <option>United States</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="activityDescription">Activity Description</label>
            <input
              type="text"
              class="form-control"
              id="activityDescription"
              placeholder=""
              value=""
              required=""
            />
            <div class="invalid-feedback">Valid description is required.</div>
          </div>

          <div class="mb-3">
            <label for="website">
              Website <span class="text-muted">(Optional)</span>
            </label>
            <input
              type="text"
              class="form-control"
              id="website"
              placeholder="http://example.com"
            />
          </div>

          <div class="mb-3">
            <label for="credit">Credit</label>
            <select class="custom-select d-block w-100" id="credit" required="">
              <option value="">Choose...</option>
              <option>California</option>
            </select>
          </div>
        </form>
      </ModalBody>

      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Do Something
        </Button>{' '}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ActivityModal;
