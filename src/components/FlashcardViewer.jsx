import React, { useState, useEffect } from 'react';

const FlashcardViewer = ({ words, onClose, title }) => {
  const [cards, setCards] = useState([...words]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Reset state when words change
  useEffect(() => {
    setCards([...words]);
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [words]);

  const handleShuffle = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 150); // Delay slightly so the card flips back before changing word
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }, 150);
  };

  const currentWord = cards[currentIndex];

  if (!currentWord) return null;

  return (
    <div className="flashcard-container">
      <div className="flashcard-header">
        <button className="back-button" onClick={onClose}>
          ← Quay lại
        </button>
        <h2>{title}</h2>
        <span className="card-counter">
          {currentIndex + 1} / {cards.length}
        </span>
      </div>

      <div className="flashcard-scene" onClick={() => setIsFlipped(!isFlipped)}>
        <div className={`flashcard ${isFlipped ? 'is-flipped' : ''}`}>
          <div className="flashcard-face flashcard-front">
            <h3>{currentWord.jp}</h3>
            <span className="hint-text">Chạm để xem nghĩa</span>
          </div>
          <div className="flashcard-face flashcard-back">
            <h3>{currentWord.vn}</h3>
          </div>
        </div>
      </div>

      <div className="flashcard-controls">
        <button className="control-btn" onClick={handlePrev}>
          ◀ Lùi
        </button>
        <button className="control-btn shuffle-btn" onClick={handleShuffle}>
          🔀 Trộn thẻ
        </button>
        <button className="control-btn" onClick={handleNext}>
          Tiến ▶
        </button>
      </div>
    </div>
  );
};

export default FlashcardViewer;
