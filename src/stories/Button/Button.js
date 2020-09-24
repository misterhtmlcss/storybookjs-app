import React from 'react';

import './Button.css'
// { label, fontColor }
export const Button = (props) => {
  console.log("Button props", props);
  return (

  <div>
    {/* <button className={fontColor} type="submit">{label}</button> */}
    <button>Button</button>
  </div>
  )
}