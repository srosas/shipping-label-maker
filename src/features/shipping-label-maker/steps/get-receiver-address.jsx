import React from 'react';

const GetReceiverAddress = (props) => {
  const to = props.wizardContext;
  const { onAction } = props;

  return (
    <div className="form">
      <h4>Enter the Receiver's address: </h4>
      <div className="long">
        <label>Name:</label>
        <input className="long-input" id='name' type='text' value={to.name} onChange={onAction} />
      </div>
      <div className="long">
        <label>Street:</label>
        <input className="long-input" id="street" type="text" value={to.street} onChange={onAction} />
      </div>
      <div className="shared-input">
        <div>
          <label>City:</label>
          <input id="city" type="text" value={to.city} onChange={onAction} />
        </div>
        <div>
          <label>State:</label>
          <input id="state" type="text" value={to.state} onChange={onAction} />
        </div>
        <div>
          <label>Zip:</label>
          <input id="zip" type="text" value={to.zip} onChange={onAction} />
        </div>
      </div>
    </div>
  );
}

export default GetReceiverAddress;