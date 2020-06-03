import React from 'react';

import './App.css';

import Header from './component/Header';
import Stores from './component/Stores';

function App() {
  return (
    <div className="App">
      <header className="App-header" aria-label="page header, search bar">
        <Header />
      </header>
      <main className="App-body" aria-label="store displaying section">
        <Stores />
      </main>
      <footer className="App-footer" aria-label="page footer"></footer>
    </div>
  );
}

export default App;
