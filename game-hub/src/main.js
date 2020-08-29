import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./home";
import Matching from "./matchingApp";
import ticTacToe from "./ticTacToe";
import "./styles/index.css"
 
class Main extends Component {
  render() {
    return (
    <HashRouter>
        <div>
          <h1>What are we calling this??</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/cardMatching">Card Matching Game</NavLink></li>
            <li><NavLink to="/ticTacToe">Tic Tac Toe Game</NavLink></li>
          </ul>
          <div className="content">
             <Route exact path="/" component={Home}/>
            <Route path="/cardMatching" component={Matching}/>
            <Route path="/ticTacToe" component={ticTacToe}/>
          </div>
        </div>
    </HashRouter>
    );
  }
}
 
export default Main;