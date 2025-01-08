import React, { useState } from 'react';
import { pgr } from '../../Assets/ProductDetail'
import './ProductPage.css'
import ProductPopup from './ProductPopup';

function PGRPage() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openPopup = (product) => {
        setSelectedProduct(product);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return(
        <div className="product-container">
            <h3 className="product-title"><span>Plant Growth Regulators{"(pgr)".toLocaleUpperCase()}</span></h3>
            <div className="product-list">
                {pgr.map((item, index) => (
                    <div className="product-card" key={index} onClick={() => openPopup(item)}>
                        <img src={item.url} alt={item.brand} className="product-image" />
                        <div className='product-detail'>
                            <h2 className='product-brand'>{item.brand}</h2>
                            <p className='product-comp'>{item.comp}</p>
                            <p className='product-dose'><strong>Dose:</strong> {item.doss}</p>
                            <p className='product-Packs'><strong>Packs:</strong> {item.packs}</p>
                        </div>
                    </div>
                ))}
            </div>
            {isPopupOpen && (
                <ProductPopup product={selectedProduct} closePopup={closePopup} />
            )}
        </div>
    )
}

export default PGRPage;