import React, { useState } from 'react';
import Header from './Components/Header';

const Tictak = () => {

 const [opponents, setopponents] = useState([
   {choice: 'Rock', weight:0 },
   {choice: 'Paper', weight:1 },
   {choice: 'Scissors', weight:2 },   
 ])

 const [state, setstate] = useState(   
    {result:'', comp_choice: '', visible: 'hidden'},    
 )

 
 const [logic, setlogic] = useState(
  [
    //rock
    { Rock: ['Draw', 'Lost', 'Win'] },
    //paper
    { Paper: ['Win', 'Drawn', 'Loss'] },
    //scissors
    { Scissors: ['Loss', 'Win', 'Draw'] },
  ]
 )



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
        console.log(a,b) 
        const computer_choice = Math.floor(Math.random() * 3) + 0;
        //const rest = compChoice(computer_choice)

       //setstate({comp_choice: computer_choice });
        //console.log('comp cho' + rest)
        console.log(computer_choice)
        const x = logic[a][b][computer_choice]
        setstate({result: x});
        divStyleTitle()
};

// const Option = (opponents, result, handleClick) => {
//   return opponents.map(op => (
//     <AddOption
//       op={op}
//       result={result}
//       handleClick={handleClick}
//     />
//   ));
// }


const AddOption = (op, divStyle, btnStyle, handleClick) => {

  const { choice, weight } = op;


  return (
    <div style={divStyle}>  
        <button style={btnStyle} onClick={handleClick(weight, choice)}>  {choice} </button>
    </div>
  );
  
}

  return(
    <div>
        <Header> </Header>
        <Option
          handleClick={handleClick}
          opponents={opponents}
          result={state.result}
        />
        <div> The Computer chose {state.comp_choice} , therefore you have {state.result}</div>
    </div>

  )
}

export default Tictak;
