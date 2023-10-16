import './CSS/index.css';

import TrigonometryButton from './TrigonometryButton';

function ScientificButton() {  
    const tab = ['log', 'ln', 'π', '^', '√', '%', 'AC', '(', ')'];
    return (
        <>
            <div id='scientificButton'>
                <TrigonometryButton />
                {tab.map((number, index) => (
                    <button key={index} value={number} >{number}</button>
                ))}
            </div>
        </>
    )
}
  
export default ScientificButton;
  