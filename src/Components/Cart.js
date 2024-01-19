// Cart.js
import React, { useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cartItems, setCartItems, closeCart }) => {
  const calculateTotal = () => {
    return Object.values(cartItems).reduce((total, item) => total + parseFloat(item.price), 0);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) => {
      const newCartItems = { ...prevCartItems };
      delete newCartItems[productId];
      return newCartItems;
    });
  };

  const clearCart = () => {
    setCartItems({});
  };

  const cartRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        closeCart();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeCart]);

  return (
    <div className="cart container mt-3" style={{ maxWidth: '600px' }} ref={cartRef}>
      <div className="cart-header" style={{ marginBottom: '50px' }}>
        <h5>
          <span className="cart-icon" style={{ marginRight: '10px' }} onClick={closeCart}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
          Your Cart
        </h5>
      </div>
      {Object.values(cartItems).length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {Object.values(cartItems).map((product, index) => (
            <div key={index} className="cart-item mb-2">
              <div className="d-flex justify-content-between align-items-center">
                <span style={{ marginRight: '25px' }}>{product.title}</span>
                <span className="text-muted ml-2">{product.price}</span>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(product.id)}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            </div>
          ))}
          <div className="cart-total mt-3">
            <p>Total Amount: {calculateTotal()} DH</p>
          </div>
          <div className="cart-actions mt-3">
            <button className="btn btn-secondary" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
