import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import Cart from './Cart';
import productsData from '../Data/Data';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState({});
  const [productStatus, setProductStatus] = useState({});
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems({ ...cartItems, [product.id]: product });
    setProductStatus({ ...productStatus, [product.id]: true });
  };

  const removeFromCart = (productId) => {
    const newCartItems = { ...cartItems };
    delete newCartItems[productId];
    setCartItems(newCartItems);
    setProductStatus({ ...productStatus, [productId]: false });
  };

  const clearCart = () => {
    setCartItems({});
    setProductStatus({});
  };

  const openCart = () => {
    setCartOpen(!cartOpen);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  return (
    <Router>
      <div>
        <Navbar openCart={openCart} cartItems={cartItems} calculateTotal={() => {}} />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div className="container mt-3">
                  <ProductList
                    products={productsData}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    productStatus={productStatus}
                    clearFromCart={clearCart}
                  />
                </div>
                <div className={`cart-slide ${cartOpen ? 'show' : ''}`}>
                  <Cart cartItems={cartItems} setCartItems={setCartItems} closeCart={closeCart} />
                </div>
              </div>
            }
          />
          <Route path="/product/:productId" element={<ProductDetail products={productsData} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;