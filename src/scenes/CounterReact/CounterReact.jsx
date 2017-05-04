import React, { Component } from 'react';
import Button from './../../components/Button';

class CounterReact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 10
    };
  }

  plusOne = () => this.setState(state => ({ counter: state.counter + 1 }));
  minusOne = () => this.setState(state => ({ counter: state.counter - 1 }));

  render() {
    return (
      <div>
        <h1>React: {this.state.counter}</h1>
        <Button buttonType="btn-primary" label="+" onClick={this.plusOne} />
        <Button buttonType="btn-primary" label="-" onClick={this.minusOne} />
      </div>
    );
  }
}

export default CounterReact;
