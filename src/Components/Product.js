// Product.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = ({ product, addToCart, removeFromCart, isInCart }) => {
  const thumbnailPath = require(`../pictures/${product.thumbnail}`);
  const [isProductInCart, setIsProductInCart] = useState(isInCart || false);

  useEffect(() => {
    setIsProductInCart(isInCart || false);
  }, [isInCart]);

  const handleButtonClick = () => {
    if (isProductInCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
    setIsProductInCart(!isProductInCart);
  };

  return (
    <div className="col-lg-2 col-md-3 col-sm-6 mb-4">
      <div className="card h-100">
        <Link to={`/product/${product.id}`}>
          <img className="card-img-top" src={thumbnailPath} alt={product.title} />
        </Link>
        <div className="card-body">
          <h6 className="card-title">
            <Link to={`/product/${product.id}`}>{product.title}</Link>
          </h6>
          <p className="card-text">{product.price}</p>
        </div>
        <div className="card-footer">
          <button
            type="button"
            className={`btn btn-${isProductInCart ? 'danger' : 'primary'} btn-sm`}
            onClick={handleButtonClick}
          >
            {isProductInCart ? 'Remove' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
