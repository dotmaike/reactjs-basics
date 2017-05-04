import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from './../../components/Button';

import * as actions from './../../data/counter';

class CounterRedux extends Component {
  render() {
    const { counter, plusOne, minusOne } = this.props;

    return (
      <div>
        <h1>Redux: {counter}</h1>
        <Button buttonType="btn-primary" label="+" onClick={plusOne} />
        <Button buttonType="btn-primary" label="-" onClick={minusOne} />
      </div>
    );
  }
}

CounterRedux.defaultProps = {
  counter: 0,
  plusOne: () => {},
  minusOne: () => {}
};

CounterRedux.propTypes = {
  counter: PropTypes.number,
  plusOne: PropTypes.func,
  minusOne: PropTypes.func
};

const mapStateToProps = state => ({ ...state.counter });

export default connect(mapStateToProps, actions)(CounterRedux);
