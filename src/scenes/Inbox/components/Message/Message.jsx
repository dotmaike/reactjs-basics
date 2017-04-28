import React from 'react';

const Message = ({ match }) => <h3>Message {match.params.message}</h3>;

Message.defaultProps = {};

Message.propTypes = {};

export default Message;
