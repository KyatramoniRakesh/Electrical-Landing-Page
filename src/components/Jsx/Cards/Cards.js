import React from 'react';
import { infoCards } from './Cardsdata';
import "./Cards.css";

const Cards = () => {
  return (
    <div className="row m-0 p-0">
      <div className="col-md-3">
        <div className=" label-card d-flex flex-column justify-content-center text-start fw-bold p-4">
          <h3>Vision</h3>
          <h3>Mission</h3>
          <h3>Commitment</h3>
        </div>
      </div>

      {infoCards.map((card, index) => (
        <div className="col-md-3 text-start pb-1" key={index}>
          <div className={`p-4 ${card.bgColor}`} style={{ minHeight: '100%' }}>
            <h4 className="title fw-bold">{card.title}</h4>
            <p className="mb-0 ">{card.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
