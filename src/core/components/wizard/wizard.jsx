import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navigation from '../navigation';
import ProgressBar from '../progress-bar'
import GetSenderAddress from '../../../features/shipping-label-maker/steps/get-sender-address';
import GetReceiverAddress from '../../../features/shipping-label-maker/steps/get-receiver-address';
import GetWeight from '../../../features/shipping-label-maker/steps/get-weight';
import GetShippingOption from '../../../features/shipping-label-maker/steps/get-shipping-option';
import Confirm from '../../../features/shipping-label-maker/steps/confirm';

class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wizardContext: this.props.wizardContext,
      showConfirmBtn: false,
      currentStep: 1,
    };

    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleNextStep = this.handleNextStep.bind(this);
    this.handlePreviousStep = this.handlePreviousStep.bind(this);
    this.handleWeight = this.handleWeight.bind(this);
    this.handleShipping = this.handleShipping.bind(this);
    this.handleSend = this.handleSend.bind(this);
    this.handleReceive = this.handleReceive.bind(this);
    this.loadStep = this.loadStep.bind(this);
  }

  handleConfirm(data) {
    this.props.onComplete(data)
  }

  handleNextStep() {
    this.setState(state => {
      return {
        currentStep: state.currentStep + 1
      };
    });
  }

  handlePreviousStep() {
    if (this.state.currentStep > 1) {
      this.setState({
        currentStep: this.state.currentStep - 1
      });
    }
  }

  handleWeight(event) {
    const id = event.target.getAttribute('id'), value = event.target.value;
    if (isNaN(value)) {
      alert("Weight must be a number, please enter a number!")
    }

    this.setState({
      wizardContext: { ...this.state.wizardContext, [id]: value }
    });
  }

  handleShipping(event) {
    const id = event.target.getAttribute('id'), value = event.target.value;

    this.setState({
      wizardContext: { ...this.state.wizardContext, [id]: value }
    });
  }


  handleSend(event) {
    const id = event.target.getAttribute('id'), value = event.target.value;
    if (id === "zip" && isNaN(value)) {
      alert("Zip must be a number, please enter a number!")
    }
    this.setState(state => ({
      ...state, wizardContext: {
        ...state.wizardContext, from: {
          ...state.wizardContext.from,
          [id]: value
        }
      }
    }));
  }
  handleReceive(event) {
    const id = event.target.getAttribute('id'), value = event.target.value;
    if (id === "zip" && isNaN(value)) {
      alert("Zip must be a number, please enter a number!")
    }
    this.setState(state => ({
      ...state, wizardContext: {
        ...state.wizardContext, to: {
          ...state.wizardContext.to,
          [id]: value
        }
      }
    }));
  }

  loadStep() {
    switch (this.state.currentStep) {
      case 1:
        return <GetSenderAddress wizardContext={this.state.wizardContext.from} onAction={this.handleSend} />
      case 2:
        return <GetReceiverAddress wizardContext={this.state.wizardContext} onAction={this.handleReceive} />
      case 3:
        return <GetWeight wizardContext={this.state.wizardContext} onAction={this.handleWeight} />
      case 4:
        return <GetShippingOption wizardContext={this.state.wizardContext} onAction={this.handleShipping} />
      case 5:
        return <Confirm wizardContext={this.state.wizardContext} onAction={this.handleConfirm} />
    }
  }

  render() {
    const { header, steps } = this.props;
    const Header = header;

    const CurrentElement = this.loadStep();
    return (
      <div className="wizard-container">
        <Header />
        <ProgressBar length={steps.length} step={this.state.currentStep} />
        {CurrentElement}
        <Navigation
          currentStep={this.state.currentStep}
          handlePreviousStep={this.handlePreviousStep}
          handleNextStep={this.handleNextStep}
        />
      </div>
    )
  };
}

export default Wizard;

Wizard.propTypes = {
  header: PropTypes.func.isRequired,
  steps: PropTypes.array.isRequired,
  wizardContext: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired
};