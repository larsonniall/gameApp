import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Home from "./home";
import Matching from "./components/matchingApp";
import ticTacToe from "./components/ticTacToe";
import Tetris from "./components/Tetris";
import signUp from "./components/signUp";
import SignIn from "./components/signIn";
// import Color from "./components/color";
import "./styles/index.css";
import AuthApi from "./utils/AuthApi";

function Main() {

    const authApi = React.useContext(AuthApi);
      const handleLogOut = () => {
        authApi.setAuth(false);
      }

    return (
    
      <Router>
                <button onClick={SignIn}>Sign In</button>
                <button onClick={handleLogOut}>Logout</button>
        <div>
           <h1>Bored Games</h1>
                    
          <ul className="header">
            <li><NavLink exact to="/home">Home</NavLink></li>
            <li><NavLink to="/signup">Sign Up</NavLink></li>
            <li><NavLink to="/cardMatching">Card Matching Game</NavLink></li>
            <li><NavLink to="/ticTacToe">Tic Tac Toe</NavLink></li>
            <li><NavLink to="/Tetris"> Tetris</NavLink></li>
            {/* <li><NavLink to="/colors"> Color Fill</NavLink></li> */}
          </ul>
                    
          <div className="content">
            <Route exact path="/home" component={Home} />
            <Route path ="/signup" component={signUp} />
            <Route path="/cardMatching" component={Matching} />
            <Route path="/ticTacToe" component={ticTacToe} />
            <Route path="/Tetris" component={Tetris} />
            {/* <Route path="/colors" component={Color} /> */}
          </div>
                  
        </div>
      </Router>
    );
  
}
export default Main;
