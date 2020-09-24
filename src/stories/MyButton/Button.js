import React from 'react';

import './Button.css'

const Button = ({ label, fontColor }) => (
  <div>
    <button className={fontColor} type="submit">{label}</button>
  </div>
)

export default Button;