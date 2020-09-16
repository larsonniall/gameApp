import React from 'react';
import colorCell from './colorCell';
import './grid.css';

const Grid = ({grid, colors}) => {
  let rows = Object.keys(grid.nodes).map((v) => {
    return <colorCell key={v} color={colors[grid.nodes[v].color]} size={grid.size} />
  });

  return (
    <div className="grid">
      {rows}
    </div>
  );
}

export default Grid;