import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './data/reducer';

import './styles/main.scss';

import { NavBar } from './components';
import Home from './scenes/Home';
import About from './scenes/About';
import CounterReact from './scenes/CounterReact';
import CounterRedux from './scenes/CounterRedux';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <Router>
      <div className="container">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/counter-react" component={CounterReact} />
        <Route path="/counter-redux" component={CounterRedux} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
