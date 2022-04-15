import React, { useReducer } from 'react';
import CartContext from './cart-content';

const defaultState={
    items:[],
    totalAmount:0
}
const cartReducer=(state,action)=>{
    switch(action.type){
        case 'ADD':

        const existingCartItemIndex=state.items.findIndex(
        (item)=> item.id === action.payload.id
        );
        const existingCartItem=state.items[existingCartItemIndex];
        let updateItem;
        let updateItems;
        if(existingCartItem){
            updateItem={
                ...existingCartItem,
                amount:existingCartItem.amount+ action.payload.amount
            };
            updateItems=[...state.items];
            updateItems[existingCartItemIndex]=updateItem;
        } else {

             updateItems=state.items.concat(action.payload);
        }
            const updatedTotalAmount=state.totalAmount+action.payload.price * action.payload.amount;
          console.log(state.totalAmount,action.payload.price , action.payload.amount);
            return {
                items:updateItems,
                totalAmount:updatedTotalAmount
            }
    }
    return defaultState;
}
const CartProvider = (props) => {

    const [cartState,dispatchCartAction]=useReducer(cartReducer,defaultState);
    const {children}=props;
    const addItemHandler=(item)=>{
         dispatchCartAction({type:'ADD',payload:item});
    };
    const removeItemHandler=(id)=>{
        dispatchCartAction({type:'REMOVE',id:id});
    };
    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemHandler,
        removeItem:removeItemHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
              {children}
        </CartContext.Provider>
    );
};

export default CartProvider;