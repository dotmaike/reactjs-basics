import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonType, label, ...rest }) => (
  <button type="button" className={buttonType ? `btn ${buttonType}` : 'btn btn-default'} {...rest}>
    {label}
  </button>
);

Button.defaultProps = {
  buttonType: '',
  label: ''
};

Button.propTypes = {
  buttonType: PropTypes.string,
  label: PropTypes.string.isRequired
};


export default Button;
