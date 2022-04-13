import React from 'react';
import CartContext from './cart-content';

const CartProvider = (props) => {
    const {children}=props;
    const addItemHandler=()=>{};
    const removeItemHandler=()=>{};
    const cartContext=[{
        items:[],
        totalAmount:0,
        addItem:addItemHandler,
        removeItem:removeItemHandler
    }]
    return (
        <CartContext.Provider value={cartContext}>

        </CartContext.Provider>
    );
};

export default CartProvider;