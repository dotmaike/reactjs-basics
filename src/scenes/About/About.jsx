import React, { Component } from 'react';
import PropTypes from 'prop-types';

class About extends Component {
  render() {
    const user = {
      name: 'Miguel',
      hobbies: ['Music', 'Basketball']
    };
    return (
      <div className="container">
        <h3>About</h3>
        <hr />
        <div>
          <p>My name is: {user.name}</p>
        </div>
        <div>
          <h4>Hobbies</h4>
          <ul>
            {user.hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

About.defaultProps = {};

About.propTypes = {};

export default About;
