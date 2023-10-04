import React from 'react';
import './cartW.css';

const CartWidget = () => {
  const itemCount = 3;

  return (
    <div className="cart-widget">
      <i className="bi bi-cart"></i>
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default cartW;