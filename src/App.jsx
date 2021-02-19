import React from 'react';
import './App.css';
import Stars from './components/Stars/Stars';

function App() {

  return (
    <div className="component__wrapper">
      <Stars count={2} />
    </div>
  );
}

export default App;
