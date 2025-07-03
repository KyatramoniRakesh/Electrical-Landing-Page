import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Productsdata from './Productsdata';
import './ProductDetails.css';
import Enquiry from '../Enquiry';

const ProductDetails = () => {
  const { categorySlug } = useParams();

  const [categoryProducts, setCategoryProducts] = useState([]);
  const [selectedProductSlug, setSelectedProductSlug] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (categorySlug) {
      const filtered = Productsdata.filter(
        (p) => p.categorySlug?.toLowerCase() === categorySlug?.toLowerCase()
      );
      setCategoryProducts(filtered);

      if (filtered.length > 0) {
        setSelectedProductSlug(filtered[0].slug);
      } else {
        setSelectedProductSlug(null);
      }
    }
  }, [categorySlug]);

  const selectedProduct = categoryProducts.find(
    (p) => p.slug === selectedProductSlug
  );

  const handleEnquiryClick = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedProductSlug]);

  if (!categorySlug || categoryProducts.length === 0 || !selectedProduct) {
    return (
      <div className="container py-5 text-center">
        <h4>No products found for category: <code>{categorySlug}</code></h4>
      </div>
    );
  }

  return (
    <div className="product-details-wrapper">
      <div
        className="product-banner"
        style={{
          backgroundImage: `url(${selectedProduct.categoryBanner})`,
        }}
      >
        <div className="banner-overlay text-white text-center">
          <h1>{selectedProduct.category}</h1>
          <p>Home | {selectedProduct.category}</p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          {/* Sidebar: only sub-products of this category */}
          <div className="col-md-3">
            <div className="sticky-top" style={{ top: '100px' }}>
              {categoryProducts.map((product) => (
                <button
                  key={product.slug}
                  onClick={() => setSelectedProductSlug(product.slug)}
                  className={`category-button w-100 mb-3 ${
                    product.slug === selectedProductSlug ? 'active' : ''
                  }`}
                >
                  {product.title}
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="col-md-9">
            <div
              id={selectedProduct.slug}
              className="d-flex flex-wrap justify-content-between align-items-start gap-4 mb-5"
            >
              <div className="col-md-7">
                <h3 className="product-title">{selectedProduct.title}</h3>
                <p className="product-description">{selectedProduct.description}</p>
              </div>
              <div className="col-md-4 text-center">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="img-fluid product-image mb-3"
                />
                <button
                  className="btn btn-primary px-4"
                  onClick={handleEnquiryClick}
                >
                  Enquiry Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Modal */}
      <Enquiry
        show={showModal}
        handleClose={handleClose}
        product={selectedProduct}
      />
    </div>
  );
};

export default ProductDetails;
