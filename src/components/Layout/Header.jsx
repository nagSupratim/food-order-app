import React, { useContext } from 'react';

import HeaderCartButton from './HeaderCartButton';
import CartContext from '../../store/cart-context';

import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItemsCount = cartCtx.items.reduce(
    (total, item) => total + item.amount,
    0
  );

  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton
          itemsCount={cartItemsCount}
          onClick={props.onShowCart}
        >
          Your Cart
        </HeaderCartButton>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Header Img for Meals App" />
      </div>
    </React.Fragment>
  );
};

export default Header;
