import React, { Component } from 'react';
import Display from './Display';
import Panel from './Panel';
import { isNumber, math } from '../helper/util';
import './Calculator.css';

const calculate = (char, prevState) => {
  if (isNumber(char)) {
    let cur = prevState.reset ? char : prevState.current + char;
    return {
      ...prevState,
      awaiting: false,
      current: cur,
      reset: false
    };
  }

  let { total, current, operation, awaiting } = prevState;

  switch (char) {
    case ".":
      if (String(prevState.current).includes(".")) {
        return prevState;
      }

      return {
        ...prevState,
        awaiting: false,
        current: prevState.current + char,
        reset: false
      };
    case "ac":
      return {
        total: 0,
        current: 0,
        reset: true,
        operation: null,
        awaiting: false
      };
    case "=":
      if (total && operation) {
        return {
          ...prevState,
          current: operation(total, current),
          total: operation(total, current),
          operation: null,
          reset: true,
          awaiting: false
        }
      };

      return prevState;

    case "+":
      if (total && operation && !awaiting) {
        return {
          ...prevState,
          current: operation(total, current),
          total: operation(total, current),
          operation: math.sum,
          reset: true,
          awaiting: true
        };
      }

      return {
        ...prevState,
        total: prevState.current,
        operation: math.sum,
        reset: true,
        awaiting: true
      };

    case "-":
      if (total && operation && !awaiting) {
        return {
          ...prevState,
          current: operation(total, current),
          total: operation(total, current),
          operation: math.sub,
          reset: true,
          awaiting: true
        };
      }

      return {
        ...prevState,
        total: prevState.current,
        operation: math.sub,
        reset: true,
        awaiting: true
      };

    case "/":
    case "÷":
      if (total && operation && !awaiting) {
        return {
          ...prevState,
          current: operation(total, current),
          total: operation(total, current),
          operation: math.div,
          reset: true,
          awaiting: true
        };
      }

      return {
        ...prevState,
        total: prevState.current,
        operation: math.div,
        reset: true,
        awaiting: true
      };

    case "x":
      if (total && operation && !awaiting) {
        return {
          ...prevState,
          current: operation(total, current),
          total: operation(total, current),
          operation: math.mul,
          reset: true,
          awaiting: true
        };
      }

      return {
        ...prevState,
        total: prevState.current,
        operation: math.mul,
        reset: true,
        awaiting: true
      };
    default:
      return prevState;
  }
};

export default class Calculator extends Component {
  state = {
    total: 0,
    current: 0,
    reset: true,
    operation: null
  }

  handleOperation = char => {
    this.setState(calculate.bind(null, char));
  }

  render () {
    return (
      <div className="Calculator">
        <Display value={ this.state.current }/>
        <Panel handleOperation={ this.handleOperation }/>
      </div>
    );
  }
}
