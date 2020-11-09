import React from 'react';
import './styles.css';

const Button = ({ className, ...props }) => (
  <button className={`Button ${className}`} {...props} />
);

export default Button;