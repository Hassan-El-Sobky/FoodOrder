import React,{useContext} from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from './../../../context/cart-content';
const MealItem = (props) => {
    const cartCtx=useContext(CartContext);
    const {name,description,price,id}=props;
    const priceItem=`${price}LE`;

    const onAddToCart=(amount)=>{
          console.log(amount);
          cartCtx.addItem({
              id:id,
              name:name,
              amount:amount,
             price:price,
          })
    }
    return (
        <li className={classes.meal}>
            <div>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{priceItem}</div>
            </div>
            <MealItemForm onAddToCart={onAddToCart} id={id}/>
            </div>
        </li>
    );
};

export default MealItem;