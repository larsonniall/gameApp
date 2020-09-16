import { useState, useEffect, useCallback } from 'react';

export const useGameStatus = rowsCleared => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);

  const linePoints = [40];

  const calcScore = useCallback(() => {
    // the score
    if (rowsCleared > 0) {
      // this is how the original tetris score is calculated
      console.log("rowscleared",rowsCleared)
      setScore(prev => prev + linePoints[0] * (level + 1));
      setRows( rowsCleared);
    }
  }, [rows, level, linePoints, rowsCleared]);

  useEffect(() => {
      console.log("calcscore log")
    calcScore();
  }, [ rowsCleared, level]);

  return [score, setScore, rows, setRows, level, setLevel];
};