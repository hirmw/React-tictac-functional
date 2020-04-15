import React, { useState, useReducer } from 'react';
import Header from './Components/Header';

const divStyle = {
  position: 'absolute',
  margin: 'auto',
  top: '0',
  right: '0',
  left: '0',
  width: '80%',
  background: '#f4f4f4',
  padding: '10px',
  borderBottom: '1px #ccc dotted',
  textAlign: 'center',
  marginleft:'100px'

};

const btnStyle = {
background: '#ff0000',
color: '#fff',
border: '10px',
padding: '10px 20px',
borderRadius: '10%',
cursor: 'pointer',
margin: '5px'
};


function AddOption({ op, divStyle, btnStyle, handleClick }) {

  const { choice, weight } = op;

  return (
    <div style={divStyle}>
      <button style={btnStyle} onClick={() => handleClick(choice, weight)}>
        {' '}
        {choice}
        {' '}
      </button>
    </div>
  );
}

function Tictak() {
  const [opponents, setopponents] = useState([
    { choice: 'Rock', weight: 0 },
    { choice: 'Paper', weight: 1 },
    { choice: 'Scissors', weight: 2 }
  ]);

  const [state, setstate] = useState({
    result: '',
    visible: 'hidden',
  });

  const [compstate, setcompstate] = useState({
    comp_choice: '',
  });

  // const [logic, setlogic] = useState(options);
  function names(names, action) {
    switch (action.type) {
      case "getscroes":
        console.log(action.weight)
        console.log(action.choice)
        return [names];
    }
  }

  let initialstate = { 
    result: [{Rock: ['Draw', 'Win', 'Lost'], Paper: ['Win', 'Draw', 'Win'], Scissors: ['Loss', 'Win', 'Draw']}]
  };

  const [count, dispatch] = useReducer(names, initialstate);


  //do i need const
  const compChoice = cc => {
    switch (cc) {
      case 0:
        return 'Rock';
      case 1:
        return 'Paper';
      case 2:
        return 'Scissors';
    }
  };

  const divStyleTitle = () => {
    setopponents({ visible: 'visible' });
  };
  
  const handleclick = (a, b) => {
    console.log(a,b + 'clicked')
    const computer_choice = Math.floor(Math.random() * 3) + 0;
    const computer_choiceString = compChoice(computer_choice)
    console.log('computer_choice ' + computer_choice)
    console.log('computer_choice ' + computer_choiceString)
    setcompstate({comp_choice: computer_choiceString})
    const get_result = count.result[0][a][computer_choice]
    console.log(count.result[0][a]);
    setstate({result: get_result})
  }


  return (

    <div style={divStyle}>
      <Header> </Header>
      {opponents.map((op) => (
        <AddOption handleClick={handleclick} op={op} btnStyle={btnStyle} />
      ))}

      <div>
    
      </div>
     
      <div>
        {' '}
        The Computer chose {compstate.comp_choice} , therefore you have {state.result}
        
      </div>
    </div>
  );
}

export default Tictak;