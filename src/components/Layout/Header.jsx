import React from 'react';
import mealImage from '../../assets/meals.jpg';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
    return (
        <>
        <header className={styles.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton {...props}/>
        </header>
        <div className={styles['main-image']}>
            <img src={mealImage} alt="meal image" />
        </div>
        </>
    );
};

export default Header;