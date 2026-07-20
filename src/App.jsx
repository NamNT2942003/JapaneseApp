import React, { useState } from 'react';
import { grammarData } from './data';
import CategoryList from './components/CategoryList';
import VocabPage from './components/VocabPage';
import BottomNav from './components/BottomNav';
import './App.css';
import './vocab.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('grammar'); // 'grammar' or 'vocab'

  // Filter grammar data based on search term
  const filteredData = grammarData.map(category => {
    const filteredRules = category.rules.filter(
      rule => 
        rule.structure.toLowerCase().includes(searchTerm.toLowerCase()) || 
        rule.meaning.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { ...category, rules: filteredRules };
  }).filter(category => category.rules.length > 0);

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <h1>Sổ tay ghi nhớ tiếng Nhật của Nam</h1>
          <p>Japanese Grammar Handbook</p>
          
          {activeTab === 'grammar' && (
            <div className="search-bar">
              <span className="search-icon">🔍</span>
              <input 
                type="text" 
                placeholder="Tìm kiếm ngữ pháp..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          )}
        </div>
        <div className="header-decoration"></div>
      </header>

      <main className="app-main">
        {activeTab === 'grammar' ? (
          filteredData.length > 0 ? (
            filteredData.map((category) => (
              <CategoryList key={category.id} category={category} />
            ))
          ) : (
            <div className="no-results">
              <p>Không tìm thấy ngữ pháp phù hợp.</p>
            </div>
          )
        ) : (
          <VocabPage />
        )}
      </main>

      {/* Adjust footer to not overlap with bottom nav */}
      <footer className="app-footer" style={{ paddingBottom: '80px' }}>
        <p>Built with ❤️ for Japanese Learners</p>
      </footer>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
