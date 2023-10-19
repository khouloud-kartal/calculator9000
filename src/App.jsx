import React, { useState } from 'react';
import * as math from 'mathjs';

import './CSS/App.css';
import BeatifulScreen  from './BeautifulScreen';
import CalculatorButton  from './CalculatorButton';

function App() { 
  
  const [display , setDisplay] = useState(0);
  const [result , setResult] = useState(null);
  const [addCalcul, setAddCalcul] = useState(0);

  const displayNumberButton = (number) => {
    const newValue = number.target.value;
    if(display === 0){
      setDisplay(newValue);
    }else if(result === null){
      setDisplay(display + newValue);
    }else{
      setDisplay(display + newValue);
      // setDisplay(display + newValue);
    }
       
  };

  const displayResult = () => {
    let newResult = display;
    newResult = newResult.replace(/√/g, 'sqrt');  //l'opérateur de racine carrée (√) n'est pas directement supporté par JavaScript
    newResult = newResult.replace('π', '3.14159265359');
    newResult = math.evaluate(newResult);
    setResult(newResult.toString());
    setAddCalcul(newResult);
  }
  

  const displayScientificButton = (number)=>{
    const newValue = number.target.value;
    if(display === 0){
      setDisplay(newValue);
    }else if (newValue === 'AC'){
      setDisplay(0);
      setResult(null);
    }else if (newValue === 'CE'){
      setDisplay(display.toString().slice(0, -1)); /// slice est utilisé pour une chaine de caractere, et comme les résultat n'est pas une chaine de caractere je devait la stringifier
      if(display.length === 1){
        setDisplay(0);
      } 
    }else{
      // setDisplay(result + newValue);
      setDisplay(display + newValue);
    }
  }

  console.log(addCalcul);

  return (
    <>
      <h1>Calculator9000</h1>
      <BeatifulScreen display={display} result={result}/>
      <CalculatorButton displayNumberButton={displayNumberButton} displayResult={displayResult} displayScientificButton={displayScientificButton}/>
    </>
    
  )
}

export default App
