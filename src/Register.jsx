import './CSS/App.css';

function Register() {  
    return (
        <>
            <form action="" id='register' method="post">
                <label htmlFor="userName">Username</label>
                <input type="text" name="userName" id="userName" />

                <label htmlFor="userPassword">Password</label>
                <input type="password" name="userPassword" id="userPassword" />

                <label htmlFor="passwordConf">Confirm your password</label>
                <input type="password" name="passwordConf" id="passwordConf" />

                <button type="submit" id='signUp' name='register'>Register</button>
            </form>
        </>
    )
}

export default Register;