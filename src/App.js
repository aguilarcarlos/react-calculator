import React, { Component } from 'react';
import Calculator from './component/Calculator';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}
