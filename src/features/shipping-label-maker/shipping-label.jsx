import React from 'react';
import { getShippingOption } from './shipping-functions'

const ShippingLabel = (props) => {

  const { from } = props.labelData;
  const { to } = props.labelData;
  const { weight, shippingOption } = props.labelData;

  return (
    <div className="shipping-label">
      <div className="main-label">
        <h1><strong>{getShippingOption(shippingOption)}</strong></h1>
        <h4>From</h4>
        <p> {from.name} </p>
        <p> {from.street} </p>
        <p> {from.city} {from.state}, {from.zip} </p>
        <h4>To</h4>
        <p> {to.name} </p>
        <p> {to.street} </p>
        <p> {to.city} {to.state}, {to.zip} </p>
        <p></p>
        <p><h3>{weight} Lbs.</h3></p>
      </div>
    </div>
  );
}

export default ShippingLabel;