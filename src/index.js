import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './styles/main.scss';

import NavBar from './components/NavBar';
import Home from './scenes/Home';
import About from './scenes/About';
import Inbox from './scenes/Inbox';
import Message from './scenes/Inbox/components/Message';

injectTapEventPlugin();

render(
  <Router>
    <div className="container">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/inbox" component={Inbox} />
      <Route path="/inbox/messages/:id" component={Message} />
    </div>
  </Router>,
  document.getElementById('root')
);
