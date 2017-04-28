import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './styles/main.scss';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Hola</h1>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
