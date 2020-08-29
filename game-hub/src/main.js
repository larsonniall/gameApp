import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Matching from "./matchingApp";
 
class Main extends Component {
  render() {
    return (
    <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</a></li>
            <li><NavLink to="/cardMatching">Card Matching Game</a></li>
          </ul>
          <div className="content">
             <Route exact path="/" component={Home}/>
            <Route path="/cardMatching" component={Matching}/>
          </div>
        </div>
    </HashRouter>
    );
  }
}
 
export default Main;