import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./home";
import Matching from "./matchingApp";
import ticTacToe from "./ticTacToe";
import Tetris from "./components/Tetris";
import "./styles/index.css";
//import backgroundImage from "./img/main.jpg";
//  import "./index.css";
class Main extends Component {
  render() {
    return (

  
    <HashRouter>
        <div>
          
          <h1>Game Hub</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/cardMatching">Card Matching Game</NavLink></li>
            <li><NavLink to="/ticTacToe">Tic Tac Toe Game</NavLink></li>
            <li><NavLink to="/Tetris"> Tetris puzzle game</NavLink></li>
          </ul>
          <div className="content">
             <Route exact path="/" component={Home}/>
            <Route path="/cardMatching" component={Matching}/>
            <Route path="/ticTacToe" component={ticTacToe}/>
            <Route path="/Tetris" component={Tetris}/>
          </div>
        </div>
    </HashRouter>
    );
  }
}
 
export default Main;