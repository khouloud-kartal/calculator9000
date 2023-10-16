import './CSS/index.css';

function OperatorButton() {

    const tab = ['-', '+' , '*', '/'];

    return (
        <>
            <div id='operatorButton'>
                {tab.map((number, index) => (
                    <button key={index} value={number} >{number}</button>
                ))}
            </div>
        </>
    )
}
  
export default OperatorButton;
  