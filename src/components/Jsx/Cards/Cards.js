import React from 'react';
import { infoCards } from './Cardsdata';
import './Cards.css';

const Cards = () => {
  return (
    <div className="row m-0 p-0 cards-section">
      <div className="col-md-3 mb-4 mb-md-0">
        <div className="label-card d-flex flex-column justify-content-center text-start p-4">
          <h3>Vision</h3>
          <h3>Mission</h3>
          <h3>Commitment</h3>
        </div>
      </div>

      {infoCards.map((card, index) => (
        <div className="col-md-3 col-12 mb-4" key={index}>
          <div className={`p-4 h-100 shadow rounded ${card.bgColor}`}>
            <h4 className="title fw-bold">{card.title}</h4>
            <p className="mb-0">{card.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
