import React from 'react';

const ProgressBar = props => {
  const { step, length } = props

  const getProgress = (currStep, length) => {
    return {
      width: ((currStep - 1) / (length - 1) * 100) + '%'
    }
  }

  return (
    <div className="progress-bar">
      <span style={getProgress(step, length)}></span>
    </div>
  )
};

export default ProgressBar;