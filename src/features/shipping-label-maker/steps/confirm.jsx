import React from 'react';
import { getShippingOption, getShippingCost } from '../shipping-functions'
const Confirm = (props) => {
  const { from } = props.wizardContext;
  const { to } = props.wizardContext;
  const { weight, shippingOption } = props.wizardContext;
  const { onAction } = props;

  const confirmInfo = () => onAction(props.wizardContext)

  return (
    <div className="form">
      <div>
        <h2>Confirm your information</h2>
        <h4>Sender Information</h4>
        <p> Name: {from.name} </p>
        <p> Street: {from.street} </p>
        <p> City: {from.city} </p>
        <p> State: {from.state} </p>
        <p> Zip: {from.zip} </p>
        <h4>Receiver Information</h4>
        <p> Name: {to.name} </p>
        <p> Street: {to.street} </p>
        <p> City: {to.city} </p>
        <p> State: {to.state} </p>
        <p> Zip: {to.zip} </p>
        <p>Weight: {weight} Lbs.</p>
        <p>Shipping option: {getShippingOption(shippingOption)}</p>
        <p>Shipping cost: ${getShippingCost(weight, shippingOption)}</p>
        <button onClick={confirmInfo}>Confirm</button>
      </div>
    </div>
  );
}

export default Confirm;