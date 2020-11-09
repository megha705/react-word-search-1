import React from 'react';
import './styles.css';

const Letter = ({ className, children }) => (
  <div className={`Letter ${className}`} onClick={() => children[1] && console.log(true)}>
    {children}
  </div>
);

export default Letter;