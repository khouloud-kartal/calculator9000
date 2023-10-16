import './CSS/index.css';
import ScientificButton from './ScientificButton';
import NumberButton from './NumberButton';
import OperatorButton from './OperatorButton';

function CalculatorButton({displayNumberButton, displayResult, displayScientificButton}) { 

    return (
        <>
            <div id='calculatorButton'>
                <ScientificButton displayScientificButton={displayScientificButton}/>
                <NumberButton displayNumberButton={displayNumberButton} displayResult={displayResult}/>
                <OperatorButton displayNumberButton={displayNumberButton}/>
            </div>
        </>
    )
}
  
export default CalculatorButton;
  