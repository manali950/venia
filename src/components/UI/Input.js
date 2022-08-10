import React from 'react';

import classes from './Input.module.css';

// const Input = props => {
  const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input 
      ref={ref} 
      {...props.input} readOnly/>
    </div>
  );
});
// };

export default Input;
