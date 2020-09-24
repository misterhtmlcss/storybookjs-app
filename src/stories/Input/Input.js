import React from 'react';

import './Input.css'

export const Input = ({ todo: {id, text, done }, fontColor }) => (
  <>
    <label className={fontColor} htmlFor="todo">Todo Input
      <input type="text" data-todo_id={id} value={text} data-todo_state={done} name="todo"/>
    </label>
  </>
)