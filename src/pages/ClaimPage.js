import React from 'react';

const ClaimPage = props => {
  return (
    <div>
      <h3 className="section-title">Certification Detail</h3>

      <div className="Card">
        <img
          className="claim-img"
          alt="Claim"
          src={props.claim.claim.certification.imageUri}
        />
        <table className="text-left">
          <tbody>
            <tr>
              <td>
                <label>User DID</label>
              </td>
              <td>
                <label className="field">{props.claim.claim.id}</label>
              </td>
            </tr>

            <tr>
              <td>
                <label>User Name</label>
              </td>
              <td>
                <label className="field">{props.claim.claim.name}</label>
              </td>
            </tr>

            <tr>
              <td>
                <label>Certification Name</label>
              </td>
              <td>
                <label className="field">
                  {props.claim.claim.certification.name}
                </label>
              </td>
            </tr>

            <tr>
              <td>
                <label>Certificated At</label>
              </td>
              <td>
                <label className="field">
                  {props.claim.claim.certification.issued}
                </label>
              </td>
            </tr>

            <tr>
              <td>
                <label>Expired At</label>
              </td>
              <td>
                <label className="field">
                  {props.claim.claim.certification.expires}
                </label>
              </td>
            </tr>

            <tr>
              <td>
                <label>Issuer</label>
              </td>
              <td>
                <label>{props.claim.claim.certification.issuerName}</label>
              </td>
            </tr>

            <tr>
              <td>
                <label>IOTA Transaction Hash</label>
              </td>
              <td>
                <label className="field">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://testnet.thetangle.org/transaction/${
                      props.transaction
                    }`}
                  >
                    {props.transaction}
                  </a>
                </label>
              </td>
            </tr>

            <tr>
              <td>
                <label>Image Checksum</label>
              </td>
              <td>
                <label className="field">
                  {props.claim.claim.certification.imageChecksum}
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClaimPage;
