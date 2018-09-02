import React, { Component, createRef } from 'react';
import classNames from 'classnames';
import './Display.css';

class Display extends Component {
  constructor (props) {
    super(props);
    this.displayRef = createRef();
  }

  componentDidUpdate () {
    /*const display = this.displayRef.current;
    let styles = getComputedStyle(display, null);
    let fontSize = parseFloat(styles.getPropertyValue('font-size'));
    let value = display.scrollWidth - display.offsetWidth;

    if (value) {
      value = value / 2;
      //display.style.fontSize = (fontSize - value) + "px";
    }*/
  }

  shouldComponentUpdate (nextProps, nextState) {
    return this.props.value !== nextProps.value;
  }

  render () {
    let { className } = this.props;

    return (
      <div className={classNames(className, "Display")}>
        <div className="Display-value" ref={ this.displayRef }>
          { this.props.value }
        </div>
      </div>
    );
  }
}

Display.defaultProps = {
  value: 0
};

export default Display;
