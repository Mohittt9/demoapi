import React from 'react';
import useFetch from '../hooks/useFetch';
import '../App.css'; 

const ProductList = () => {
  const url = 'https://api.escuelajs.co/api/v1/products/';
  
  const { data: products, loading, error, refetch } = useFetch(url);

  // 1. UPDATED: Matches the new CSS (.loader instead of .spinner)
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <p className="loading-text">Loading Products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>⚠️ {error}</p>
        <button onClick={refetch}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Featured Products</h1>
      <div className="product-grid">
        {products && products.slice(0, 50).map((product) => {
          
          // 2. UPDATED: Safe image logic. 
          // If images array is empty, use placeholder immediately to prevent crashes.
          let imageSrc = 'https://via.placeholder.com/300';
          if (product.images && product.images.length > 0) {
             imageSrc = product.images[0].replace(/["\[\]]/g, '');
          }

          return (
            <div key={product.id} className="product-card">
              <div className="image-wrapper">
                <img 
                  src={imageSrc} 
                  alt={product.title} 
                  onError={(e) => {e.target.src = 'https://via.placeholder.com/300'}} 
                />
              </div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <p className="price">${product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;