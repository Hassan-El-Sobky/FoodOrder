import React, { useContext } from 'react';
import CartIcon from './../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';
import CartContext from './../../context/cart-content';
const HeaderCartButton = (props) => {
    const {ShowCartHandler}=props
  const cartCtx=useContext(CartContext);
  const numberOfCartItem=cartCtx.items.reduce((curNumber,item)=>{
       return curNumber + item.amount  },0);
    return (
       <button onClick={()=>{ShowCartHandler()}} className={styles.button}>
           <span className={styles.icon}>
         <CartIcon/>
           </span>
           <span>Your Cart</span>
           <span className={styles.badge}>
               {numberOfCartItem}
           </span>
           
       </button>
    );
};

export default HeaderCartButton;