import React from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
const MealItem = (props) => {
    const {name,description,price,id}=props;
    const priceItem=`${price}LE`;
    return (
        <li className={classes.meal}>
            <div>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{priceItem}</div>
            </div>
            <MealItemForm id={id}/>
            </div>
        </li>
    );
};

export default MealItem;