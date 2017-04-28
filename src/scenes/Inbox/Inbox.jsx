import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Inbox extends Component {
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || 'Welcome to your Inbox'}
      </div>
    );
  }
}

Inbox.defaultProps = {
  children: null
};

Inbox.propTypes = {
  children: PropTypes.element
};

export default Inbox;
