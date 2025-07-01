import React, { useEffect, useState } from 'react';
import Productsdata from './Productsdata';
import './ProductDetails.css';
import Enquiry from '../Enquiry';

const ProductDetails = () => {
  const allCategories = [...new Set(Productsdata.map(p => p.category))];
  const [selectedCategory, setSelectedCategory] = useState(allCategories[0]);

  const categoryProducts = Productsdata.filter(
    p => p.category === selectedCategory
  );

  const bannerImage = categoryProducts[0]?.categoryBanner || '';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedCategory]);

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEnquiryClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="product-details-wrapper">
      <div
        className="product-banner"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="banner-overlay text-white text-center">
          <h1>{selectedCategory}</h1>
          <p>Home | {selectedCategory}</p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-md-3">
            <div className="sticky-top" style={{ top: '100px' }}>
              {allCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`category-button w-100 mb-3 ${cat === selectedCategory ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="col-md-9">
            {categoryProducts.map(product => (
              <div
                key={product.slug}
                id={product.slug}
                className="d-flex flex-wrap justify-content-between align-items-start gap-4 mb-5"
              >
                <div className="col-md-7">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-description">{product.description}</p>
                </div>
                <div className="col-md-4 text-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="img-fluid product-image mb-3"
                  />
                  <button
                    className="btn btn-primary px-4"
                    onClick={() => handleEnquiryClick(product)}
                  >
                    Enquiry Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Enquiry show={showModal} handleClose={handleClose} product={selectedProduct} />
    </div>
  );
};

export default ProductDetails;
