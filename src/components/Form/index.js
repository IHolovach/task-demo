import React, { Component } from 'react';

import FormCell from '../FormCell';

import './style.css';

// TASK: form that calculates sum of all fields
// TASK 2: clean up/optimize as much as possible
class Form extends Component {
  render() {
    const {
      fields,
      values,
      onChange,
      onSubmit,
    } = this.props;

    return (
      <form className="form">
        <div className="fields">
          {fields.map(field => (
            <FormCell
              key={field}
              field={field}
              value={values[field]}
              onChange={onChange}
            />
          ))}
        </div>
        <input
          type="submit"
          value="Submit"
          onClick={onSubmit}
        />
      </form>
    );
  };
}

export default Form;
