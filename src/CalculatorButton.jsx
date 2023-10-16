import './CSS/index.css';
import ScientificButton from './ScientificButton';
import NumberButton from './NumberButton';
import OperatorButton from './OperatorButton';

function CalculatorButton() { 

    return (
        <>
            <div id='calculatorButton'>
                <ScientificButton />
                <NumberButton />
                <OperatorButton />
            </div>
        </>
    )
}
  
export default CalculatorButton;
  