import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Home from "./home";
import Matching from "./matchingApp";
import ticTacToe from "./ticTacToe";
import Tetris from "./components/Tetris";
import "./styles/index.css";


//  import "./index.css";
function Main() {


  return (
    <Router>
    
      <div>
         <h1>What are we calling this??</h1>
                  
        <ul className="header">
                      
          <li>
            <NavLink exact to="/home">
              Home
            </NavLink>
          </li>
                      
          <li>
            <NavLink to="/cardMatching">Card Matching Game</NavLink>
          </li>
          <li>
            <NavLink to="/ticTacToe">Tic Tac Toe Game</NavLink>
          </li>
          <li>
            <NavLink to="/Tetris"> tetris puzzle game</NavLink>
          </li>
                    
        </ul>
                  
        <div className="content">
                      
          <Route exact path="/home" component={Home} />
          <Route path="/cardMatching" component={Matching} />
          <Route path="/ticTacToe" component={ticTacToe} />
          <Route path="/Tetris" component={Tetris} />
                    
        </div>
                
      </div>
    </Router>
  );
}
export default Main;
