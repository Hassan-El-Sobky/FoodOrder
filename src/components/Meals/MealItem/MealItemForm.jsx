import React, { useRef,useState } from 'react';
import Input from './../../UI/Input';
import classes from './MealItemForm.module.css';
const MealItemForm = (props) => {
    const {id,onAddToCart}=props;
    const inputRef=useRef();
    const [amountState,setAmountState]=useState(true);
    const onSubmitHandler=(event)=>{
        event.preventDefault();
        const enterAmount=+inputRef.current.value;
         if(enterAmount < 1 || enterAmount >5){
                 setAmountState(false);
                 return;
         } 
         onAddToCart(enterAmount);
    }
    return (
        <form onSubmit={onSubmitHandler} className={classes.form}>
        <Input ref={inputRef} label="Amount" input={{
            id:'amount'+id,
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
            
            }} />
            <button>+ Add</button>
            {!amountState && <p>Not Valid</p>}
        </form>
    );
};

export default MealItemForm;