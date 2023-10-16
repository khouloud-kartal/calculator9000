import './CSS/index.css';

function TrigonometryButton() {  

    const tab = ['tan', 'sin', 'cos']

    return (
        <>
            <div id='trigonometryButton'>
                {tab.map((number, index) => (
                    <button key={index} value={number} >{number}</button>
                ))}
            </div>
        </>
    )
}
  
export default TrigonometryButton;
  