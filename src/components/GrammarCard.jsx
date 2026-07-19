import React from 'react';

const GrammarCard = ({ structure, meaning, example }) => {
  return (
    <div className="grammar-card">
      <div className="grammar-structure">
        <span className="icon">❖</span>
        <h3>{structure}</h3>
      </div>
      <div className="grammar-meaning">
        <p>{meaning}</p>
      </div>
      <div className="grammar-example">
        <span className="example-label">Ví dụ:</span>
        <p>{example}</p>
      </div>
    </div>
  );
};

export default GrammarCard;
