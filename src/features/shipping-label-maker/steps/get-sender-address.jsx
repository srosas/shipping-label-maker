import React from 'react';

const GetSenderAddress = (props) => {
  const from = props.wizardContext;
  const { onAction } = props;

  return (
    <div className="form">
      <h4>Enter the Sender's address: </h4>
      <div className="long">
        <label>Name:</label>
        <input className="long-input" id='name' type='text' value={from.name} onChange={onAction} />
      </div>
      <div className="long">
        <label>Street:</label>
        <input className="long-input" id="street" type="text" value={from.street} onChange={onAction} />
      </div>
      <div className="shared-input">
        <div>
          <label>City:</label>
          <input id="city" type="text" value={from.city} onChange={onAction} />
        </div>
        <div>
          <label>State:</label>
          <input id="state" type="text" value={from.state} onChange={onAction} />
        </div>
        <div>
          <label>Zip:</label>
          <input id="zip" type="text" value={from.zip} onChange={onAction} />
        </div>
      </div>
    </div>
  );
}

export default GetSenderAddress;