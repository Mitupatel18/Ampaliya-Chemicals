import React from 'react';
import './ProductPopup.css'; // Add your styles here

const ProductPopup = ({ product, closePopup }) => {
  return (
    <div className="product-modal-overlay" onClick={closePopup}>
      <div className="product-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={closePopup}>
          X
        </button>
        <center>
            <img src={product.url} alt={product.brand} className="modal-product-image" />
            <div className="modal-product-detail">
            <h2 className="modal-product-brand">{product.brand}</h2>
            <p className="modal-product-comp">{product.comp}</p>
            <p className="modal-product-dose"><strong>Dose:</strong> {product.doss}</p>
            <p className="modal-product-Packs"><strong>Packs:</strong> {product.packs}</p>
            </div>
        </center>
      </div>
    </div>
  );
};

export default ProductPopup;
