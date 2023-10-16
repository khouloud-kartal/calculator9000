import './CSS/index.css';

function OperatorButton({displayNumberButton}) {

    const tab = ['-', '+' , '*', '/'];

    return (
        <>
            <div id='operatorButton'>
                {tab.map((number, index) => (
                    <button key={index} value={number} onClick={displayNumberButton}>{number}</button>
                ))}
            </div>
        </>
    )
}
  
export default OperatorButton;
  