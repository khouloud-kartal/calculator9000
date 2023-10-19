import './CSS/index.css';

function History({result}) {  

    if(result === null){
       return (
            <>
                <div id='history'>0</div>
            </>
        ) 
    }else{
        return (
            <>
                <div id='history'>{result}</div>
            </>
        ) 
    }
    
}
  
export default History;