import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ openCart, cartItems }) => {
  const totalItems = Object.values(cartItems).reduce((total, item) => total + 1, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/" style={{ marginLeft: '15px' }}>
        Fake name
      </Link>
      <button className="navbar-toggler" type="button" onClick={openCart}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end">
        <ul className="navbar-nav">
          <li className="nav-item">
            <button style={{ marginRight: '15px' }} className="btn btn-dark" onClick={openCart}>
              <FontAwesomeIcon icon={faShoppingCart} /> ({totalItems})
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
