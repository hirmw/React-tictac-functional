import React, { Component } from 'react';

export class AddOption extends Component {
  render() {
    const { choice, weight } = this.props.op;

    return (
      <div style={divStyle}>  
          <button style={btnStyle} onClick={this.props.handleClick.bind(this, weight, choice)}>  {choice} </button>
      </div>
    );
  }
}


const divStyle = {
    background: '#f4f4f4',
    padding: '10px',
    borderBottom: '1px #ccc dotted',
    textAlign: 'center',

};

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '10%',
  cursor: 'pointer',
  //float: 'center',
  };

export default AddOption;
