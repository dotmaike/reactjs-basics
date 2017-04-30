import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './../../components/Button';
import Message from './components/Message';

class Inbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }
  handleChange = event => {
    this.setState({
      message: event.target.value
    });
  };
  render() {
    return (
      <div>
        <h3>Inbox</h3>
        <hr />
        <form>
          <div className="form-group">
            <label htmlFor="message">Enter Your Message</label>
            <input
              type="text"
              className="form-control"
              id="message"
              placeholder="Message"
              onChange={this.handleChange}
            />
          </div>
          <Message message={this.state.message} />
        </form>
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
