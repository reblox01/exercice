// ProductList.js
import React from 'react';
import Product from './Product';

const ProductList = ({ products, addToCart, removeFromCart, productStatus }) => {
  return (
    <div className="product-list row">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          isInCart={productStatus && productStatus[product.id]}
        />
      ))}
    </div>
  );
};

export default ProductList;
