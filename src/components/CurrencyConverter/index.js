import React, { Component } from 'react';

import CurrencyInput from '../CurrencyInput';

import './style.css';

class CurrencyConverter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currency: '€',
      money: 0,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      // after 3 seconds new value is returned to special input
      this.changeData();
    }, 3000);
  }

  changeData() {
    this.setState({
      currency: '$',
      money: 15,
    });
  }

  render() {
    const {
      currency,
      money,
    } = this.state;

    return (
      <div className="currency-converter">
        <CurrencyInput
          currency={currency}
          value={money}
        />
      </div>
    );
  }
}

export default CurrencyConverter;
