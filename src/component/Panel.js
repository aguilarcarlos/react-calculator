import React, { Component } from 'react';
import Button from './Button';
import './Panel.css';

class Panel extends Component {
  handleClick = key => {
    this.props.handleOperation(key);
  }

  render () {
    return (
      <div className="Panel">
        <div className="Panel-row">
          <Button value="ac" size={3} secondary handleClick={this.handleClick}/>
          <Button value="÷" operator handleClick={this.handleClick}/>
        </div>
        <div className="Panel-row">
          <Button value="7" handleClick={this.handleClick}/>
          <Button value="8" handleClick={this.handleClick}/>
          <Button value="9" handleClick={this.handleClick}/>
          <Button value="x" operator handleClick={this.handleClick}/>
        </div>
        <div className="Panel-row">
          <Button value="4" handleClick={this.handleClick}/>
          <Button value="5" handleClick={this.handleClick}/>
          <Button value="6" handleClick={this.handleClick}/>
          <Button value="+" operator handleClick={this.handleClick}/>
        </div>
        <div className="Panel-row">
          <Button value="1" handleClick={this.handleClick}/>
          <Button value="2" handleClick={this.handleClick}/>
          <Button value="3" handleClick={this.handleClick}/>
          <Button value="-" operator handleClick={this.handleClick}/>
        </div>
        <div className="Panel-row">
          <Button value="0" size={2} handleClick={this.handleClick}/>
          <Button value="." handleClick={this.handleClick}/>
          <Button value="=" operator handleClick={this.handleClick}/>
        </div>
      </div>
    );
  }
}

Panel.defaultProps = {
  handleOperation: () => {}
};

export default Panel;
