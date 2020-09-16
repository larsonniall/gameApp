import React from 'react';

const EndGame = ({ restartGame }) => (
  <div className="justify-center">
    <h1>Game Over!</h1>
    <h3>Would you like to play again?</h3>
    <button className="restart-button" onClick={restartGame}>Restart</button>
  </div>
);

export default EndGame;