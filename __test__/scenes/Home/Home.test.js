import React from 'react';
import { render } from 'react-dom';
import Home from './../../../src/scenes/Home/Home.jsx';

it('render Home', () => {
  const h1 = document.createElement('h1');
  render(<Home />, h1);
});
