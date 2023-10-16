import './CSS/index.css';
import EqualButton from './EqualButton';

function NumberButton({displayNumberButton, displayResult}) {
    const tab = [9, 8 , 7 , 6 , 5 , 4 , 3 , 2 , 1 , 0, '.'];

    return (
        <>
            <div id='numberButton'>
                {tab.map((number, index) => (
                    <button key={index} value={number} onClick={displayNumberButton}>{number}</button>
                ))}
                <EqualButton displayResult={displayResult}/>
            </div>
        </>
    )
}
  
export default NumberButton;
  