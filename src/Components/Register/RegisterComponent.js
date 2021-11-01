import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Register.css';

function Register() {

    const history = useHistory();

    let [formIsValid, setFormValid] = useState(false);

    let [username, setUserName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [confirmPassword, setConfirmPassword] = useState('');

    let [emailValid, setEmailIsValid] = useState(false);
    let [passwordValid, setPasswordIsValid] = useState(false);
    let [confirmPasswordValid, setConfirmPasswordValid] = useState(false);


    const usernameHandler = (event) => {

        setUserName(event.target.value);
    }
    const emailHandler = (event) => {

        setEmail(event.target.value);
    }

    const passwordHandler = (event) => {

        setPassword(event.target.value);
    }

    const confirmPasswordHandler = (event) => {

        setConfirmPassword(event.target.value);
        
    }
    const confirmPasswordValidHandler =()=>{
    if (password === confirmPassword) {
        setConfirmPasswordValid(true);
    }
    else {
        setConfirmPasswordValid(false);
    }
}
    const userValidHandler = () => {

        if (email.includes("@")) {
            setEmailIsValid(true);
        } else {
            setEmailIsValid(false);
        }
    }

    const passwordValidHandler = () => {

        if (password.trim().length > 5) {
            setPasswordIsValid(true);
        } else {
            setPasswordIsValid(false);
        }
    }
    const userObj = {
        username,
        email,
        password,
        confirmPassword
    }
    
    console.log(userObj);

    const submitHandler = (event) => {
        setFormValid(emailValid&& passwordValid && confirmPasswordValid);
        event.preventDefault();

        if (formIsValid === true) {

            alert("User Registered successfully");

            history.push('/login');
        }

    }

    return (
        <div>

            <head>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet" />
                <title>Bootstrap Sign up Form with Icons</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
            </head>
            <body className="registerbody">
                <div class="signup-form">
                    <form action="/examples/actions/confirmation.php" method="post" onSubmit={submitHandler}>
                        <h2>Sign Up</h2>
                        <p>Please fill in this form to create an account!</p>
                        <hr />
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-user"></i></span>
                                <input type="text" class="form-control" name="username" placeholder="Username" required="required" onChange={usernameHandler} />
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-paper-plane"></i></span>
                                <input type="email" class="form-control" name="email" placeholder="Email Address" required="required" onChange={emailHandler} onBlur={userValidHandler} />

                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                                <input type="text" class="form-control" name="password" placeholder="Password" required="required" onChange={passwordHandler} onBlur={passwordValidHandler} />

                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon">
                                    <i class="fa fa-lock"></i>
                                    <i class="fa fa-check"></i>
                                </span>
                                <input type="text" class="form-control" name="confirm_password" placeholder="Confirm Password" required="required" onChange={confirmPasswordHandler} onBlur={confirmPasswordValidHandler} />

                            </div>
                        </div>

                        <div class="form-group">
                            <button type="submit" class="btn btn-primary btn-lg">Sign Up</button>
                        </div>

                    </form>

                </div>
            </body>
        </div>
    );

}

export default Register;