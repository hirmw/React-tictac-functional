import React, { Component } from 'react';
import Option from './Components/Option';

export class tictak extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opponents: [
        { choice: 'Rock', weight: 0 },
        { choice: 'Paper', weight: 1 },
        { choice: 'Scissors', weight: 2 },
      ],
      result: '',
      logic: [
        //rock
        { rock: ['d', 'l', 'w'] },
        //paper
        { paper: ['w', 'd', 'l'] },
        //scissors
        { scissors: ['l', 'w', 'd'] },
      ],
    };
  }

  handleClick = id => {
    const computer_choice = Math.floor(Math.random() * 3) + 1;
    //console.log(id);

    const user_choice = this.state.logic[id];
    console.log(user_choice);

    //console.log(user_choice[computer_choice]);
    //get array based on id, get comp_choic return result using index

    // if (computer_choice > id) {
    //   this.setState({ result: 'win' });
    // }
  };

  render() {
    return (
      <div>
        <Option
          handleClick={this.handleClick}
          opponents={this.state.opponents}
        />
        {this.state.result}
      </div>
    );
  }
}

const buttonStyle = {
  background: '#1E90FF',
  padding: '10px',
  float: 'right',
};

const divStyle = {
  background: '#F0F8FF',
  padding: '10px',
  textAlign: 'center',
};

export default tictak;
