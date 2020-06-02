import React from 'react';

import './App.css';

import Header from './component/Header';
import Stores from './component/Stores';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className="App-body">
        <Stores />
      </main>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
