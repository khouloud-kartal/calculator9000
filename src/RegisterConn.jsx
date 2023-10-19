import './CSS/index.css';

function RegisterConn({showForm}) {

    return (
        <>
            <div id='registerConn'>
                <i class="fa-solid fa-user" onClick={showForm}></i>
            </div>
        </>
    )
}
  
export default RegisterConn;
  