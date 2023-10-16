import './CSS/index.css';
import EqualButton from './EqualButton';

function NumberButton() {
    const tab = [9, 8 , 7 , 6 , 5 , 4 , 3 , 2 , 1 , 0, '.'];

    return (
        <>
            <div id='numberButton'>
                {tab.map((number, index) => (
                    <button key={index} value={number} >{number}</button>
                ))}
                <EqualButton />
            </div>
        </>
    )
}
  
export default NumberButton;
  