import React from 'react';

import './Button.css'
//
export const Button = ({ label, fontColor }) => (
  <div>
    <button className={fontColor} type="submit">{label}</button>
  </div>
)