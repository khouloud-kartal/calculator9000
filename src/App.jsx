import React, { useState } from 'react';

import './CSS/App.css'
import BeatifulScreen  from './BeautifulScreen';
import CalculatorButton  from './CalculatorButton';

function App() { 
  
  const [display , setDisplay] = useState(0);
  const [result , setResult] = useState('0')

  const displayNumberButton = (number) => {
    const newValue = number.target.value;
    if(display === 0){
      setDisplay(newValue);
    }else{
      if(typeof result === 'number'){  
        setDisplay(result.toString() + newValue);
      }else{
        setDisplay(display + newValue);
      }
      
    }
  };

  const displayResult = () => {
    // if (display.includes('sin')) {
    //   let display = display.replace('sin', 'Math.sin');
    // }
    setResult(eval(display));
  }

  const displayScientificButton = (number)=>{
    const newValue = number.target.value;
    if(display === 0){
      setDisplay(newValue);
    }else if (newValue === 'AC'){
      setDisplay('0');
      setResult('0');
    }else if (newValue === 'CE'){
      setDisplay(display.toString().slice(0, -1)); /// slice est utilisé pour une chaine de caractere, et comme les résultat n'est pas une chaine de caractere je devait la stringifier
      if(display.length === 1){
        setDisplay(0);
      } 
    }else{
      if(typeof result === 'number'){  
        setDisplay(result.toString() + newValue);
      }else{
        setDisplay(display + newValue);
      }
      
    }
  }

  console.log(result);

  return (
    <>
      <h1>Calculator9000</h1>
      <BeatifulScreen display={display} result={result}/>
      <CalculatorButton displayNumberButton={displayNumberButton} displayResult={displayResult} displayScientificButton={displayScientificButton}/>
    </>
    
  )
}

export default App
