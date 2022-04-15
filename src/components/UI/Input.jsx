import React, { forwardRef } from 'react';
import classes from './Input.module.css';
const Input = forwardRef( (props ,ref) => {
    const {label,input}=props;
    return (
        <div className={classes.input}>
            <label htmlFor={input.id}>{label}</label>
            <input ref={ref}  {...input}/>
        </div>
    );
});

export default Input;