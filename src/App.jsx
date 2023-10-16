import React, { useState } from 'react';

import './CSS/App.css'
import BeatifulScreen  from './BeautifulScreen';
import CalculatorButton  from './CalculatorButton';

function App() { 
  
  const [display , setDisplay] = useState(0);

  const displayNumberButton = (number) => {
    const newValue = number.target.value;
    if(display === 0){
      setDisplay(newValue);
    }else{
      setDisplay(display + newValue);
    }
  };

  const displayResult = ()=>{
    console.log(display);
    setDisplay(eval(display));
  }

  const displayScientificButton = (number)=>{

  }

  return (
    <>
      <h1>Calculator9000</h1>
      <BeatifulScreen display={display}/>
      <CalculatorButton displayNumberButton={displayNumberButton} displayResult={displayResult} displayScientificButton={displayScientificButton}/>
    </>
    
  )
}

export default App
