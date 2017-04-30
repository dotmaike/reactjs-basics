import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ButtonLink = ({ to, label, ...rest }) => (
  <Link to={to} {...rest} className={rest.buttonType ? `btn ${rest.buttonType}` : 'btn btn-default'}>
    {label}
  </Link>
);

ButtonLink.defaultProps = {
  to: '',
  label: ''
};

ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default ButtonLink;
