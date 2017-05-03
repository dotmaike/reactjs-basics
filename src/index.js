import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './data/reducers';

import './styles/main.scss';

import { NavBar } from './components';
import Home from './scenes/Home';
import About from './scenes/About';
import Inbox from './scenes/Inbox';
import { Message } from './scenes/Inbox/components';
import Users from './scenes/Users';

const store = createStore(todoApp);

render(
  <Provider store={store}>
    <Router>
      <div className="container">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/inbox" component={Inbox} />
        <Route path="/inbox/messages/:message" component={Message} />
        <Route path="/users" component={Users} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
