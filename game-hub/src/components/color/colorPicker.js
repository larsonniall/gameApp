import React from 'react';
import Picker from './picker';
import './colorPicker.css';

const ColorPicker = ({colors, clickHandler, incrementCount}) => {
  let pickers = colors.map(function (color, index) {
    return <Picker color={color} key={"picker_" + color} colorIndex={index} clickHandler={clickHandler} incrementCount={incrementCount}/>
  });
  return (
    <div className="pickers">{pickers}</div>
  );
}

export default ColorPicker;