import React, { Component, Fragment } from 'react';

import './style.css';

// TASK: bug happens when from outside a new prop value is received
// leave internal state since it's crucial how you handle prop change
class CurrencyInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      currency: props.currency,
      minValue: 1,
      eurRatio: 0.9,
      usdRatio: 1.1,
    };
  }

  componentDidUpdate(prevProps) {
    const {
      value,
      currency,
    } = this.props;

    if (prevProps.value !== value || prevProps.currency !== currency) {
      this.setState({
        ...this.props,
      });
    }
  }

  updateInput = event => {
    this.setState({ value: event.target.value });
  };

  onSwitch = (isEur) => {
    this.setState({ currency: isEur ? "$" : "€" });
  };

  render() {
    const {
      value,
      currency,
      minValue,
      eurRatio,
      usdRatio,
    } = this.state;
    const isEur = currency === "€";
    const eurValue = (value * eurRatio).toFixed(2);
    const usdValue = (value * usdRatio).toFixed(2);

    return (
      <div className="currency-line">
        On the market
        {` ${currency}`}
        <input
          className="currency-input"
          size={5}
          type="number"
          min={minValue}
          value={value}
          onChange={this.updateInput}
        />
        costs
        {` ${isEur ? eurValue : usdValue}`}
        {isEur ? "USD" : "EUR"}.
        <button
          className="currency-switch-btn"
          onClick={() => this.onSwitch(isEur)}
        >
          Switch
        </button>
      </div>
    );
  }
}

export default CurrencyInput;
