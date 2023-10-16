import './CSS/index.css';
import History from './History';
import Result from './Result';

function BeatifulScreen({display}) {  

    return (
        <>
            <div id='screen'>
                <History />
                <Result display={display}/>
            </div>
        </>
    )
}
  
export default BeatifulScreen;
  