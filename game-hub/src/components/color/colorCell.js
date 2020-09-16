import React from 'react';
import './colorCell.css';

const colorCell = ({color, size}) => {
  let classString = "cell-" + size + " " + color;
  return (
    <div className={classString}></div>
  );
}

export default colorCell;