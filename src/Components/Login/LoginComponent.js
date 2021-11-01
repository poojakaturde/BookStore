import './LoginComponent.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { authActions } from './Store';

function Login() {

  const dispatch = useDispatch();
  const history = useHistory();

  let [username, setUserName] = useState('');
  let [password, setPassword] = useState('');

  const [formIsValid, setFormValid] = useState(false);

  let [emailValid, setEmailIsValid] = useState(false);
  let [emailTouched, setEmailIsTouched] = useState(false);
  let [passwordValid, setPasswordIsValid] = useState(false);
  let [passwordTouched, setPasswordIsTouched] = useState(false);

  const userObj = {
    username,
    password,
  }

  const usernameHandler = (event) => {

    setUserName(event.target.value);
  }

  const userValidHandler = () => {

    setEmailIsTouched(true);

    if (username.trim() === "") {
      setEmailIsValid(false);
    } else {
      setEmailIsValid(true);
    }
  }

  const passwordHandler = (event) => {

    setPassword(event.target.value);
    setFormValid(username.includes("@") && event.target.value.trim().length > 5);
  }

  const passwordValidHandler = () => {

    setPasswordIsTouched(true);

    if (password.trim() === "") {
      setPasswordIsValid(false);
    } else {
      setPasswordIsValid(true);
    }
  }

  const submitHandler = (event) => {

    event.preventDefault();
    
    if (formIsValid === true) {
      history.push('/dashboard');
      dispatch(authActions.login(userObj));
    }
    else {
    
      alert("Invalid Credentials !!!");
      
    }
  }

  const inputIsInvalid = !emailValid && emailTouched;
  const inputIsInvalid1 = !passwordValid && passwordTouched;

  return (
    <>
    <body className="body">
      <div className="wrapper">
        <form className="login" onSubmit={submitHandler}>
          <h1 className="loginh">Login </h1>
          <label>Username :</label><br></br>
          <input type="email" placeholder="username" value={username} onChange={usernameHandler} onBlur={userValidHandler}></input><br/>
          {inputIsInvalid && (
            <p className="error-text"> Username must not be empty.</p>
          )}
          <label>Password :</label><br></br>
          <input type="password" placeholder="password" value={password} onChange={passwordHandler} onBlur={passwordValidHandler}></input><br/>
          {inputIsInvalid1 && (
            <p className="error-text"> Password must not be empty.</p>
          )}
          <a href=" ">Forgot your password?</a>
          <button className="loginbutton" type="submit" >Login</button>

        </form>
      </div>
    
    </body>
    </>
  )
}

export default Login;