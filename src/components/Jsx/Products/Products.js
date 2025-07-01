import React, { useState } from 'react';
import './Products.css';
import Productsdata from './Productsdata';
import { Link } from 'react-router-dom';

const Products = () => {
    const [filter, setFilter] = useState('ALL');

    const categories = ['ALL', ...new Set(Productsdata.map(p => p.category))];
    const filtered = filter === 'ALL' ? Productsdata : Productsdata.filter(p => p.category === filter);

    return (
        <div className="container py-5 bg-light">
            <h2 className="text-center fw-bold mb-4">OUR PRODUCTS</h2>

            <div className="d-flex justify-content-center gap-3 flex-wrap mb-4">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`cat_btn btn fw-bold px-3 rounded-pill ${filter === cat ? 'btn-warning text-white' : 'btn-primary'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="row">
                {filtered.map((item) => (
                    <div className="col-md-4 mb-4" key={item.id}>
                        <Link to={`/products/${item.categorySlug}`} className="text-decoration-none text-dark">
                            <div className="card h-100 shadow-sm">
                                <img src={item.image} className="card-img-top" alt={item.title} />
                                <div className="card-body text-center">
                                    <h5 className="fw-bold">{item.title}</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
