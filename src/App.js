import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const wordCount = text.split(/\s+/).filter(Boolean).length;

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <h1>Responsive Word Counter</h1>
      <textarea
        rows="5"
        cols="50"
        placeholder="Enter your text here..."
        value={text}
        onChange={handleTextChange}
      ></textarea>
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default App;