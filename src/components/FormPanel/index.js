import React, { Component } from 'react';

import Form from '../Form';

import './style.css';

// TASK: form that calculates sum of all fields
// TASK 2: clean up/optimize as much as possible
class FormPanel extends Component {
  state = {
    fields: [],
    values: {},
    sum: null,
  };

  componentDidMount() {
    const fields = this.createFields();
    const values = this.createValues(fields);

    this.setState({
      fields,
      values,
    });
  }

  createFields() {
    return Array.from({ length: 151 }).map((_, i) => i);
  }

  createValues(fields) {
    return fields.reduce((obj, item) => {
      obj[item] = 0;
      return obj;
    }, {});
  }

  onChange = (value, fieldId) => {
    const { values } = this.state;
    const updatedValues = Object.assign({}, values);
    updatedValues[fieldId] = parseInt(value, 10);

    this.setState({ values: updatedValues });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { values } = this.state;
    const sum = Object.values(values).reduce((accumulator, num) => {
      accumulator = accumulator + parseInt(num, 10);
      return accumulator;
    }, 0);

    this.setState({ sum });
  };

  onClean = () => {
    const { fields } = this.state;
    const values = this.createValues(fields);

    this.setState({
      values,
      sum: 0,
    });
  };

  render() {
    const {
      fields,
      values,
      sum,
    } = this.state;
    const isFields = fields.length;

    if (!isFields) return null;

    return (
      <div className="form-panel">
        <h3>Calculate numbers of all fields</h3>
        <Form
          values={values}
          fields={fields}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
        {sum
          ? `Sum of all fields is ${sum}`
          : "Calculate all fields."
        }
        <input
          type="button"
          value="Clear"
          onClick={this.onClean}
        />
      </div>
    );
  }
}

export default FormPanel;
