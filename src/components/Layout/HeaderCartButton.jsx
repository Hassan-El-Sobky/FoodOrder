import React from 'react';
import CartIcon from './../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';
const HeaderCartButton = (props) => {
    const {ShowCartHandler}=props

    return (
       <button onClick={()=>{ShowCartHandler()}} className={styles.button}>
           <span className={styles.icon}>
         <CartIcon/>
           </span>
           <span>Your Cart</span>
           <span className={styles.badge}>
               3
           </span>
           
       </button>
    );
};

export default HeaderCartButton;