import React, { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from './../UI/Modal';
import CartContext from './../../context/cart-content';
import CartItem from './CartItem/CartItem';
const Cart = (props) => {
    const {hideCartHandler}=props;
    const cartContex=useContext(CartContext);
    // const cartItems=cartContex.items.map(item=><li key={item.id}>{item.name}</li>)
    const hasItem=cartContex.items.length>0;
    const cartTotalAmount=cartContex.totalAmount;

    const cartItemRemoveHandler=id=>{};
    const cartItemAddHandler=item=>{
        cartContex.addItem({...item,amount:1});
    };
    return (
        <Modal>
            <ul className={classes['cart-items']}>
            {cartContex.items.map((item)=>(
                <CartItem 
                onAdd={cartItemAddHandler.bind(null,item)}
                onRemove={cartItemRemoveHandler.bind(null,item.id)}
                key={item.id} {...item}></CartItem>
            ))}
            </ul>
            <div className={classes.total}>
           <span>Total Amount</span>
           <span>{`${cartTotalAmount}LE`}</span>
            </div>
            <div className={classes.actions}>
         <button className={classes['button-alt']} onClick={()=>{hideCartHandler()}}>Close</button>
         { hasItem && <button className={classes.button}>Order</button> }
                     </div>
        </Modal>
    );
};

export default Cart;