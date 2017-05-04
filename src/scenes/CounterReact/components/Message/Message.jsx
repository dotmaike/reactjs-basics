import React from 'react';
import PropTypes from 'prop-types';

const Message = props => <h5>Message: {props.message}</h5>;

Message.defaultProps = {
  message: ''
};

Message.propTypes = {
  message: PropTypes.string
};

export default Message;
