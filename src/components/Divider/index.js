import React from 'react';
import './index.css';

const Divider = props => {
  const { className } = props;
  return (
    <div className={`horizontal-line ${className}`}/>
  )
}
export default Divider;
