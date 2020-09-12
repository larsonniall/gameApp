import React, { Component } from 'react';
import './styles/ticTacToe.css';
import Helper from './components/Helper.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" style={{ textAlign: "center" }}>
          <h2>Tic Tac Toe</h2>
          <Helper></Helper>
        </header>
      </div>
    );
  }
}

export default App;