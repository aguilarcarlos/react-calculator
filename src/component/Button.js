import React, { Component } from 'react';
import classNames from 'classnames';
import './Button.css';

class Button extends Component {
  onClickHandler = () => {
    let { handleClick, value } = this.props;
    handleClick(value);
  }

  render () {
    let { className, operator, secondary, size } = this.props;
    let cssStyles = classNames(
      className,
      `size-${size}`,
      {
        "btn": true,
        "btn-primary": true,
        "btn-secondary": secondary,
        "btn-accent": operator
      }
    );

    return (
      <button
        className={cssStyles}
        onClick={this.onClickHandler}>
        { this.props.value }
      </button>
    );
  }
}

Button.defaultProps = {
  value: "",
  operator: false,
  secondary: false,
  size: 1,
  handleClick: () => {}
};

export default Button;
