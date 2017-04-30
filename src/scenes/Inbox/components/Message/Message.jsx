import React from 'react';
import PropTypes from 'prop-types';

// const Message = ({ match }) => <h3>Message {match.params.message}</h3>;
const Message = props => <h3>Message: {props.message}</h3>;

Message.defaultProps = {
  message: ''
};

Message.propTypes = {
  message: PropTypes.string
};

export default Message;
