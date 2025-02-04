// client/src/components/Cart.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} style={styles.item}>
              <img src={item.image || "/placeholder.svg"} alt={item.name} style={styles.image} />
              <div style={styles.details}>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <div style={styles.quantity}>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)} style={styles.removeButton}>Remove</button>
            </div>
          ))}
          <div style={styles.total}>
            <h3>Total: ${total.toFixed(2)}</h3>
          </div>
          {user ? (
            <Link to="/checkout" style={styles.checkoutButton}>Proceed to Checkout</Link>
          ) : (
            <p>Please <Link to="/login" style={styles.link}>login</Link> to checkout.</p>
          )}
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'San Francisco, sans-serif',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#89B9AD',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
    padding: '1rem',
    backgroundColor: '#FFEBD8',
    borderRadius: '4px',
  },
  image: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    marginRight: '1rem',
  },
  details: {
    flex: 1,
  },
  quantity: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  removeButton: {
    padding: '0.5rem',
    backgroundColor: '#FFC5C5',
    color: '#89B9AD',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  total: {
    marginTop: '1rem',
    textAlign: 'right',
  },
  checkoutButton: {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    backgroundColor: '#89B9AD',
    color: '#FFEBD8',
    textDecoration: 'none',
    borderRadius: '4px',
    marginTop: '1rem',
  },
  link: {
    color: '#89B9AD',
    textDecoration: 'none',
  },
};

export default Cart;