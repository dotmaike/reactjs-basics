import React from 'react';
import PropTypes from 'prop-types';

const Button = props => (
  <button type="button" className={props.buttonType ? `btn ${props.buttonType}` : 'btn btn-default'}>
    {props.label}
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