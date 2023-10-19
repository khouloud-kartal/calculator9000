import './CSS/index.css';

import TrigonometryButton from './TrigonometryButton';

function ScientificButton({displayScientificButton}) {  
    const tab = ['e', '^', 'π', 'CE', '√', '%', 'AC', '(', ')'];
    return (
        <>
            <div id='scientificButton'>
                <TrigonometryButton displayScientificButton={displayScientificButton}/>
                {tab.map((number, index) => (
                    <button key={index} value={number} onClick={displayScientificButton}>{number}</button>
                ))}
            </div>
        </>
    )
}
  
export default ScientificButton;
  