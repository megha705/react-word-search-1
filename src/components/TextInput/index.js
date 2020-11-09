import React, { useState } from 'react';
import './styles.css';

export default function TextInput(props) {
  const [value, setValue] = useState('');
  const { className, onEnterPressed, ...propss } = props;

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.which === 13) {
      props.onEnterPressed(e);
    }
  };

  return (
    <input
      type="text"
      className={`TextInput ${className}`}
      value={value}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      {...propss}
    />
  )
}