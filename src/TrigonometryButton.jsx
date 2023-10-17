import './CSS/index.css';

function TrigonometryButton({displayScientificButton}) {  

    const tab = ['tan', 'sin', 'cos']

    return (
        <>
            <div id='trigonometryButton'>
                {tab.map((number, index) => (
                    <button key={index} value={number} onClick={displayScientificButton}>{number}</button>
                ))}
            </div>
        </>
    )
}
  
export default TrigonometryButton;
  