import React from 'react';

const Navigation = props => {
  const { currentStep, handleNextStep, handlePreviousStep } = props;

  return (
    <div className="nav-buttons">
      {currentStep < 2 && currentStep > 4 ? null : (
        <button onClick={handlePreviousStep}>Previous</button>
      )}
      {currentStep > 4 ? null : (
        <button onClick={handleNextStep}>Next</button>
      )}
    </div>
  )
};

export default Navigation;