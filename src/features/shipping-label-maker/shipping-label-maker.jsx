import React, { Component } from 'react';
import ShippingLabel from './shipping-label'
import Wizard from '../../core/components/wizard/wizard';
import Header from '../../core/components/header';


class ShippingLabelMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLabelComplete: false
    };

    this.createLabel = this.createLabel.bind(this);
  }

  createLabel(labelData) {
    this.setState({
      labelData: labelData,
      isLabelComplete: true
    });
  }
  render() {
    return (
      <div>
        {(this.state.isLabelComplete) ? (
          <ShippingLabel labelData={this.state.labelData} />
        ) : (
            <Wizard
              header={Header}
              steps={["sender", "receiver", "weight", "shipping", "confirm"]}
              wizardContext={{
                from: {
                  name: '',
                  street: '',
                  city: '',
                  state: '',
                  zip: '',
                },
                to: {
                  name: '',
                  street: '',
                  city: '',
                  state: '',
                  zip: '',
                },
                weight: '',
                shippingOption: '1'
              }}
              onComplete={this.createLabel}
            />
          )}
      </div>
    );
  }
}

export default ShippingLabelMaker;