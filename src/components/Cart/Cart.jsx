import React from 'react';
import classes from './Cart.module.css';
import Modal from './../UI/Modal';
const Cart = (props) => {
    const {hideCartHandler}=props;
    const cartItems=[
        {id:'c1',name:'sushi',amount:2,price:12.99}
    ].map(item=><li key={item.id}>{item.name}</li>)
    return (
        <Modal>
            <ul>
            {cartItems}
            </ul>
            <div className={classes.total}>
           <span>Total Amount</span>
           <span>35.24</span>
            </div>
            <div className={classes.actions}>
         <button className={classes['button-alt']} onClick={()=>{hideCartHandler()}}>Close</button>
         <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;