//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import MainHeader from './Components/Homepage/MainHeader'
import Register from './Components/Register/RegisterComponent';
import Login from './Components/Login/LoginComponent';
import Dashboard from './Components/DashboardComponent/Dashboard'
import Biography from './Components/BookCategory/Biography';
import Comic from './Components/BookCategory/Comic';
import Romance from './Components/BookCategory/Romance';
import Cooking from './Components/BookCategory/Cooking';
import Classic from './Components/BookCategory/Classic';
import Poetry from './Components/BookCategory/Poetry';
import Horror from './Components/BookCategory/Horror';
import About from './About';

function App() {

  function Home(){
    return(
    <>
    <section className="hero-section">
    <p className="home-welcome"> Welcome</p>
    <h1 className="home-h1">Online Book Store</h1>
    </section>
    </>
)}
  return (
    <React.Fragment >
      <MainHeader></MainHeader>
      
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home"></Redirect>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/login" >
          <Login></Login>
        </Route>

        <Route path="/dashboard" exact>
            <Dashboard></Dashboard>
          </Route>
          <Route path="/biography" exact>
            <Biography></Biography>
          </Route>
          <Route path="/comic" exact>
            <Comic></Comic>
          </Route>
          <Route path="/romance" exact>
            <Romance></Romance>
          </Route>
          <Route path="/cooking" exact>
            <Cooking></Cooking>
          </Route>
          <Route path="/horror" exact>
            <Horror></Horror>
          </Route>
          <Route path="/classic" exact>
            <Classic></Classic>
          </Route>
          <Route path="/poetry" exact>
            <Poetry></Poetry>
          </Route>
        {/* <Route path="*">
            <PageNotFound></PageNotFound>
          </Route> */}

      </Switch>
      
    </React.Fragment>
  );
}


export default App;

