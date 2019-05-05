import React from 'react';

const getShippingOption = (props) => {
  const { onAction } = props;

  return (
    <div className="form">
      <h4>Enter shipping option: </h4>
      <div>
        <form>
          <input id="shippingOption" name="shipping" type="radio" value="1" onChange={onAction} checked="checked" /> Ground <br />
          <input id="shippingOption" name="shipping" type="radio" value="2" onChange={onAction} /> Express
        </form>
      </div>
    </div>
  );
}

export default getShippingOption;