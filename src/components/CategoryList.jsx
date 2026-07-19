import React, { useState } from 'react';
import GrammarCard from './GrammarCard';

const CategoryList = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`category-section ${isOpen ? 'open' : ''}`}>
      <div 
        className="category-header" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2>{category.title}</h2>
        <span className="toggle-icon">{isOpen ? '−' : '+'}</span>
      </div>
      
      <div className="category-content">
        {category.rules.map((rule, index) => (
          <GrammarCard 
            key={index}
            structure={rule.structure}
            meaning={rule.meaning}
            example={rule.example}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
