import React from 'react';

const Message = ({ match }) => <h3>Message {match.params.id}</h3>;

Message.defaultProps = {};

Message.propTypes = {};

export default Message;
