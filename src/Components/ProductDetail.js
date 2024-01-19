import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId, 10));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div style={{marginLeft: '15px'}}>
      <img src={require(`../pictures/${product.thumbnail}`)} alt={product.title} />
      <h2 style={{marginTop: '15px'}}>{product.title}</h2>
      <p style={{width: '40%', marginTop: '20px'}}>~ {product.description}</p>
      <Link to="/">Back to Home...</Link>
      <p style={{color: 'green', marginTop: '15px'}}><b>Price: {product.price}</b></p>
    </div>
  );
};

export default ProductDetail;