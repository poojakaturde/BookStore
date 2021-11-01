import { NavLink } from "react-router-dom";
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { authActions } from '../Login/Store';
import './MainHeader.css';

function MainHeader() {
  const history = useHistory();

    const dispatch = useDispatch();
    const onLogout =()=>{
        history.push('/home');
        dispatch(authActions.logout());
    }
  const authentication = useSelector((state) => state.auth.isAuthenticated);
  const username = useSelector((state) => state.auth.username);
  return (
    <>
      <head>

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      </head>
      <body>

        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand">Online Book Store</a>
            </div>
            <ul class="nav navbar-nav">
              <li><NavLink to="/">Home</NavLink></li>
            
              <li><NavLink to="/about">About Us</NavLink></li>
            </ul>
            {!authentication &&<ul class="nav navbar-nav navbar-right">
              <li><NavLink to="/register"><span class="glyphicon glyphicon-user"></span> Sign Up</NavLink></li>
              <li><NavLink to="/login"><span class="glyphicon glyphicon-log-in"></span> Login</NavLink></li>
            </ul>}
            {authentication && <ul class="nav navbar-nav navbar-right">
            <li className="username">Welcome : {username.split("@")[0]}</li> 

                    <li><button className="dbutton" onClick={onLogout}>Logout</button></li>
                </ul>}
          </div>
        </nav>
      </body>

    </>
  );
}

export default MainHeader;