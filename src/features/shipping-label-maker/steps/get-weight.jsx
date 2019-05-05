import React from 'react';

const getWeight = (props) => {
  const { weight } = props.wizardContext
  const { onAction } = props;

  return (
    <div className="form">
      <h4>Enter Weight(in Pounds):</h4>
      <div className="long">
        <input id="weight" type="text" value={weight} onChange={onAction} /> Lbs.
      </div>
    </div>
  );
}

export default getWeight;