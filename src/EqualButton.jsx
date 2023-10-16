import './CSS/index.css';

function EqualButton({displayResult}) {  

    return (
        <>
            <button id='equalButton' onClick={displayResult}>=</button>
        </>
    )
}
  
export default EqualButton;