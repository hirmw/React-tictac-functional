import React, { useState } from 'react';
import Option from './Components/Option';
import Header from './Components/Header';

const Tictak = () => {

 const [opponents, setopponents] = useState([
   {choice: 'Rock', weight:0 },
   {choice: 'Rock', weight:1 },
   {choice: 'Rock', weight:2 },
   
 ],
 {result:''},
 {comp_choice: ''},
 {logic: [
  //rock
  { Rock: ['Draw', 'Lost', 'Win'] },
  //paper
  { Paper: ['Win', 'Drawn', 'Loss'] },
  //scissors
  { Scissors: ['Loss', 'Won', 'Draw'] },
]},
{visible: 'hidden'},
);

//do i need const
 const compChoice = (cc) => {
  switch(cc) {
      case 0:
        return 'Rock'
      case 1:
          return 'Paper'
      case 2:
          return 'Scissors'
    }
}

const divStyleTitle = () => {
  setopponents({visible: 'visible'})
}

const handleClick = (a, b) =>  {    
  const computer_choice = Math.floor(Math.random() * 3) + 0;
  const rest = compChoice(computer_choice)

  setopponents({comp_choice: rest })
  //console.log('comp cho' + rest)
  console.log(computer_choice)
  const x = opponents[a][b][computer_choice]
  setopponents({result: x})
  divStyleTitle()

};

  return(
    <div>
        <Header> </Header>
        <Option
          handleClick={handleClick}
          opponents={opponents}
        />
        <div> The Computer chose {opponents.comp_choice} , therefore you have {opponents.result}</div>
    </div>

  )
}

export default Tictak;
