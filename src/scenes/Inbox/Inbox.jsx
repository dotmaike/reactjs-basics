import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonLink from './../../components/ButtonLink';

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
        {this.props.children || 'Welcome to your Inbox'}
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
          <ButtonLink to={`/inbox/messages/${this.state.message}`} label="Send Message" />
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
