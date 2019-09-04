import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// TASK: form that calculates sum of all fields
// TASK 2: clean up/optimize as much as possible
class FormCell extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  onChange = event => {
    const { onChange } = this.props;
    const { target } = event;
    const { value, dataset } = target;
    const { fieldId } = dataset;

    this.setState({ value });

    onChange(value, fieldId);
  };

  render() {
    const { field } = this.props;
    const { value } = this.state;

    return (
      <div key={field}>
        <label>Field {field}</label>
        <input
          data-field-id={field}
          value={value}
          type="text"
          onChange={(event) => this.onChange(event)}
        />
      </div>
    );
  };
}

FormCell.propTypes = {
  value: PropTypes.number.isRequired,
  field: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormCell;
