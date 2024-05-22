import React, { useState } from 'react';
import '../App.css'

const AlphabetTileInteraction = () => {
  const [outputString, setOutputString] = useState('');

  const handleTileClick = (letter) => {
    setOutputString(prevString => {
      // Append the clicked letter to the output string
      const newString = prevString + letter;

      // Check for consecutive letters and replace them with underscores
      const updatedString = newString.replace(/([A-Z])\1{2,}/g, '_');

      return updatedString;
    });
  };

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div>
      <div id="outputString">{outputString}</div>
      <div className="tile-container">
        {alphabet.map(letter => (
          <div key={letter} className="tile" onClick={() => handleTileClick(letter)}>
            {letter}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlphabetTileInteraction;
