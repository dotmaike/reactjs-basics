import React from 'react';
import { render } from 'react-dom';
import Home from './../../../src/scenes/Home/Home.jsx';

it('render Home', () => {
  const h3 = document.createElement('h3');
  render(<Home />, h3);
});
