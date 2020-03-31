import React, { Component } from 'react';
import AddOption from './AddOption';

export class Option extends Component {
  render() {
    return this.props.opponents.map(op => (
      <AddOption
        op={op}
        handleClick={this.props.handleClick}
        result={this.props.result}
      />
    ));
  }
}

export default Option;
