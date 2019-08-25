import React, { Component } from 'react';

import './style.css';

// TASK: form that calculates sum of all fields
// TASK 2: clean up/optimize as much as possible
class Form extends Component {
  onChange = event => {
    const { onChange } = this.props;
    const { target } = event;
    const { value, dataset } = target;
    const { fieldId } = dataset;

    onChange(value, fieldId);
  };

  render() {
    const {
      fields,
      values,
      onSubmit,
    } = this.props;

    return (
      <form className="form">
        <div className="fields">
          {fields.map(field => (
            <div key={field}>
              <label>Field {field}</label>
              <input
                data-field-id={field}
                value={values[field] || ""}
                type="text"
                onChange={(event) => this.onChange(event)}
              />
            </div>
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
