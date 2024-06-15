import React from 'react';
import './Card.css';

function Card({ image, name, bodyPart, target }) {
  return (
    <div className="card">
      <img className="card-image" src={image} alt="" />
      <h2 className="card-name">{name}</h2>
      <p className="card-bodyPart">{bodyPart}</p>
      <p className="card-target">{target}</p>
    </div>
  );
}

export default Card;
