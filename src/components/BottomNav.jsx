import React from 'react';

const BottomNav = ({ activeTab, setActiveTab }) => {
  return (
    <div className="bottom-nav">
      <button 
        className={`nav-item ${activeTab === 'grammar' ? 'active' : ''}`}
        onClick={() => setActiveTab('grammar')}
      >
        <span className="nav-icon">📚</span>
        <span>Ngữ pháp</span>
      </button>
      
      <button 
        className={`nav-item ${activeTab === 'vocab' ? 'active' : ''}`}
        onClick={() => setActiveTab('vocab')}
      >
        <span className="nav-icon">🗂️</span>
        <span>Từ vựng</span>
      </button>
    </div>
  );
};

export default BottomNav;
