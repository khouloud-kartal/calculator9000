import React, { useState } from 'react';
import * as math from 'mathjs';

import './CSS/App.css';
import BeatifulScreen  from './BeautifulScreen';
import CalculatorButton  from './CalculatorButton';
import RegisterConn from './registerConn';
import Register from './register';

function App() { 
  
  const [display , setDisplay] = useState('0');
  const [result , setResult] = useState(null);
  const [previousResults, setPreviousResults] = useState('');

  const displayNumberButton = (number) => {
    const newValue = number.target.value;
    if(display === '0'){
      setDisplay(newValue);
    }else if(result === null){
      setDisplay(display + newValue);
    }else{
      setDisplay(previousResults.result + newValue)
      setResult(null);
    }
       
  };

  const displayResult = () => {
    let newResult = display;
    newResult = newResult.replace(/√/g, 'sqrt');  //l'opérateur de racine carrée (√) n'est pas directement supporté par JavaScript
    newResult = newResult.replace('π', '3.14159265359');
    newResult = math.evaluate(newResult);
    setPreviousResults({expression: display, result: newResult});
    setResult(newResult.toString());
    
  }


  const showForm = (event)=>{
    console.log(event.target);
    const form = document.getElementById('register');

  }
  

  const displayScientificButton = (number)=>{
    const newValue = number.target.value;
    if(display === '0'){
      if(newValue === 'AC' || newValue === 'CE'){
        setDisplay('0');
      }else{
        setDisplay(newValue);
      }
      
    }else if (newValue === 'AC'){
      if(display !== '0'){
        setDisplay('0');
        setResult(null);  
      }
       
    }else if (newValue === 'CE'){
      if (display.length === 1) {
        setDisplay('0');
      } else {
        setDisplay(display.slice(0, -1));
      }
    }else{
      setDisplay(display + newValue);
    }
  }

  console.log(previousResults);

  return (
    <>
      <RegisterConn showForm={showForm}/>
      <div>
        <h1>Calculator9000</h1>
        <BeatifulScreen display={display} result={result}/>
        <CalculatorButton displayNumberButton={displayNumberButton} displayResult={displayResult} displayScientificButton={displayScientificButton}/>
      </div>
      
      <Register />
      {/* <login /> */}
      
    </>
    
  )
}

export default App
