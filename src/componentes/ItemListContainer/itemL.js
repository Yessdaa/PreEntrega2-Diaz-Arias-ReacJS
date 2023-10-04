import React from 'react';
import './itemL.css';
const ItemListContainer = ({ greeting }) => {
    return (
      <div className="container-fluid">
        <h2>{greeting}</h2>
      </div>
    );
  };
  
  export default itemL;