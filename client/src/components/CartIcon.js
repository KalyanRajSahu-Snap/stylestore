// client/src/components/CartIcon.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartIcon = () => {
  const { cartItems } = useContext(CartContext);

  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link to="/cart" style={styles.container}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
      {itemCount > 0 && <span style={styles.badge}>{itemCount}</span>}
    </Link>
  );
};

const styles = {
  container: {
    position: 'relative',
    display: 'inline-block',
    color: '#FFEBD8',
  },
  badge: {
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    backgroundColor: '#FFC5C5',
    color: '#89B9AD',
    borderRadius: '50%',
    padding: '2px 6px',
    fontSize: '0.8rem',
  },
};

export default CartIcon;