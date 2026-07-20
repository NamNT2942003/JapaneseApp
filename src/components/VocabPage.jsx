import React, { useState } from 'react';
import { vocabData } from '../vocabData';
import FlashcardViewer from './FlashcardViewer';

const VocabPage = () => {
  const [activeLesson, setActiveLesson] = useState(null);

  if (activeLesson) {
    return (
      <FlashcardViewer 
        words={activeLesson.words} 
        title={activeLesson.title}
        onClose={() => setActiveLesson(null)} 
      />
    );
  }

  return (
    <div className="vocab-page">
      <div className="folders-grid">
        {vocabData.map((lesson) => (
          <div 
            key={lesson.id} 
            className="folder-card"
            onClick={() => setActiveLesson(lesson)}
          >
            <div className="folder-icon">
              📁
            </div>
            <h3>{lesson.title}</h3>
            <p>{lesson.words.length} từ vựng</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VocabPage;
