import React from 'react';

const ActivityPage = () => {
  return (
    <div className="row">
      <div className="col-md-4 order-md-1 mb-4">
        <h4 className="my-4">Tim Cock</h4>
        <img
          src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          alt="Generic placeholder image"
          width="200"
          height="300"
        />
      </div>

      <div className="col-md-8 order-md-2">
        <h4 class="featurette-heading">Tim Cock</h4>
        <p>
          Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
          ligula porta felis euismod semper. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
        </p>
      </div>
    </div>
  );
};

export default ActivityPage;
