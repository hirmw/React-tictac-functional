import React, { Component } from 'react';
import Option from './Components/Option';
import Header from './Components/Header';

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
      comp_choice: '',
      logic: [
        //rock
        { Rock: ['Draw', 'Lost', 'Win'] },
        //paper
        { Paper: ['Win', 'Drawn', 'Loss'] },
        //scissors
        { Scissors: ['Loss', 'Won', 'Draw'] },
      ],
      visible: 'hidden',
    };
  }

    compChoice = (cc) => {
        switch(cc) {
            case 0:
              return 'Rock';
            case 1:
                return 'Paper'
            case 2:
                return 'Scissors'
          }
    }

    handleClick = (a, b) =>  {    
        const computer_choice = Math.floor(Math.random() * 3) + 0;
        const rest = this.compChoice(computer_choice)

        this.setState({comp_choice: rest })
        //console.log('comp cho' + rest)
        console.log(computer_choice)
        const x = this.state.logic[a][b][computer_choice]
        this.setState({result: x})
        this.divStyleTitle()

  };

    divStyleTitle = () => {
            this.setState({visible: 'visible'})
    }

  render() {
    const divStyleTitle = {
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textAlign: 'center',
        visibility: this.state.visible
    };
    return (
      <div >
        <Header> </Header>
        <Option
          handleClick={this.handleClick}
          opponents={this.state.opponents}
        />
        <div style={divStyleTitle}> The Computer chose {this.state.comp_choice} , therefore you have {this.state.result}</div>
        </div>

    );

  }
}

export default tictak;