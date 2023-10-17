import './CSS/index.css';
import History from './History';
import Result from './Result';

function BeatifulScreen({display, result}) {  
    return (
        <>
            <div id='screen'>
                <History result={result}/>
                <Result display={display}/>
            </div>
        </>
    )
}
  
export default BeatifulScreen;
  